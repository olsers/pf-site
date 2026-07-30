// vibe.js — the default-vs-corporate segmented control in the nav.
//
// Architecture:
//   - One canonical toggle markup (vibeToggleMarkup()) is used in two
//     places: the desktop copy lives in components/nav.inc (inside
//     .nav-footer, below the social buttons) and arrives via nav.js's
//     fetch. The mobile drawer copy doesn't exist in markup anywhere —
//     it's injected here, once, by wrapping the drawer's existing
//     .drawer-social in a new .drawer-footer, with the toggle placed
//     after it, mirroring the desktop layout.
//   - The actual re-theming is just an attribute: data-vibe="corporate"
//     on <html>. Every colour/font token flip lives in tokens.css
//     ([data-vibe="corporate"]) — this file only sets the attribute,
//     persists the choice, and keeps both toggle copies in sync.
//   - A tiny inline script in every page's <head> (before the CSS
//     <link>s) reads the same localStorage key and sets the attribute
//     synchronously, so a returning visitor who chose "corporate"
//     never sees a flash of the default vibe before this file runs.
//   - The pill now fills the full width of the nav, and the labels are
//     full body-text size, so "Unhinged Technicolour" wraps to two
//     lines while "HR Approved" stays on one — the two rows are
//     genuinely different heights. positionThumb() measures whichever
//     row is active and sets the thumb's top/height directly instead
//     of assuming a fixed 50/50 split.

const VIBE_STORAGE_KEY = 'vibe';

function vibeToggleMarkup() {
	// "default"/"corporate" stay as the internal data-vibe-option values
	// (they're what tokens.css's [data-vibe="corporate"] selector and
	// the localStorage key key off) — only the visible labels changed:
	// default vibe displays as "Unhinged Technicolour", corporate as
	// "HR Approved".
	return `<div class="vibe-toggle-group">
		<span class="vibe-toggle-label">Theme:</span>
		<div class="vibe-toggle" role="group" aria-label="Site vibe">
			<span class="vibe-toggle-thumb" aria-hidden="true"></span>
			<button type="button" class="vibe-toggle-option" data-vibe-option="default" aria-pressed="true">Unhinged Technicolour</button>
			<button type="button" class="vibe-toggle-option" data-vibe-option="corporate" aria-pressed="false">Corporate HR Approved</button>
		</div>
	</div>`;
}

function positionThumb(toggle) {
	const vibe = toggle.getAttribute('data-active');
	const active = toggle.querySelector(`.vibe-toggle-option[data-vibe-option="${vibe}"]`);
	const thumb = toggle.querySelector('.vibe-toggle-thumb');
	if (!active || !thumb) return;
	// offsetTop/offsetHeight are relative to .vibe-toggle itself (the
	// nearest positioned ancestor), which is exactly the box the thumb
	// (position: absolute) needs to match — no viewport math needed.
	thumb.style.top = active.offsetTop + 'px';
	thumb.style.height = active.offsetHeight + 'px';
}

function positionAllThumbs() {
	document.querySelectorAll('.vibe-toggle').forEach(positionThumb);
}

function applyVibe(vibe) {
	document.documentElement.setAttribute('data-vibe', vibe);
	try {
		localStorage.setItem(VIBE_STORAGE_KEY, vibe);
	} catch (err) {
		// Storage can be unavailable (private browsing, disabled
		// cookies/storage) — the toggle still works for this page
		// view, it just won't persist. Not worth surfacing to the user.
	}
	document.querySelectorAll('.vibe-toggle').forEach(toggle => {
		toggle.setAttribute('data-active', vibe);
		toggle.querySelectorAll('.vibe-toggle-option').forEach(btn => {
			btn.setAttribute('aria-pressed', String(btn.dataset.vibeOption === vibe));
		});
		positionThumb(toggle);
	});
}

function wireVibeToggle(toggle) {
	if (toggle.dataset.wired) return;
	toggle.dataset.wired = '1';
	toggle.querySelectorAll('.vibe-toggle-option').forEach(btn => {
		btn.addEventListener('click', () => applyVibe(btn.dataset.vibeOption));
	});
}

function initVibeToggles() {
	// The drawer's toggle isn't in any page's static HTML. Wrap the
	// existing .drawer-social in a new .drawer-footer, with the
	// toggle group placed just after it — same grouping and order as
	// the desktop .nav-footer.
	const drawerSocial = document.querySelector('.drawer-social');
	if (drawerSocial && !drawerSocial.parentElement.classList.contains('drawer-footer')) {
		const footer = document.createElement('div');
		footer.className = 'drawer-footer';
		drawerSocial.parentElement.insertBefore(footer, drawerSocial);
		footer.appendChild(drawerSocial);
		footer.insertAdjacentHTML('beforeend', vibeToggleMarkup());
	}

	document.querySelectorAll('.vibe-toggle').forEach(wireVibeToggle);

	// Reflect whatever's currently on <html> (set either by the
	// no-flash inline script in <head>, or left at the "default"
	// markup default) into both toggle copies' visual state.
	applyVibe(document.documentElement.getAttribute('data-vibe') || 'default');

	// Row heights depend on where "Unhinged Technicolour" wraps, which
	// depends on the actual rendered font — re-measure once webfonts
	// finish loading (initial paint likely used a fallback font) and
	// on resize (the mobile drawer's width, unlike the desktop nav's,
	// isn't fixed against viewport changes in every browser/zoom combo).
	if (document.fonts && document.fonts.ready) {
		document.fonts.ready.then(positionAllThumbs);
	}
	window.addEventListener('resize', positionAllThumbs);
}
