// Lightbox — click any <img class="zoomable"> to open it large in a
// modal <dialog>. One <dialog> is created and reused for the whole
// page, so adding a new zoomable image anywhere is just a class,
// nothing to wire up per-image.

function initLightbox() {
	const dialog = document.createElement('dialog');
	dialog.className = 'lightbox';
	dialog.innerHTML = '<img src="" alt="">';
	document.body.appendChild(dialog);

	const dialogImg = dialog.querySelector('img');
	// Lets the dialog itself receive focus on open (see openLightbox),
	// and be a sane fallback focus target if the trigger disappears.
	dialogImg.tabIndex = -1;

	// Click anywhere on the dialog (backdrop or image) closes it.
	dialog.addEventListener('click', () => dialog.close());

	// Native <dialog> already closes on Escape (fires a 'cancel' event)
	// and traps focus inside itself while open — no extra work needed
	// for either of those.
	dialog.addEventListener('close', () => {
		if (lastTrigger) {
			lastTrigger.focus();
			lastTrigger = null;
		}
	});

	let lastTrigger = null;

	function openLightbox(img) {
		lastTrigger = img;
		dialogImg.src = img.currentSrc || img.src;
		dialogImg.alt = img.alt;
		dialog.showModal();
		// showModal() only auto-focuses an element if one is focusable;
		// focus the image explicitly so screen readers announce the
		// dialog opened, and so Tab has a defined starting point.
		dialogImg.focus();
	}

	document.querySelectorAll('img.zoomable').forEach((img) => {
		// Images aren't natively focusable or announced as interactive —
		// make each one behave like the button it functionally is.
		img.tabIndex = 0;
		img.setAttribute('role', 'button');
		if (!img.hasAttribute('aria-label')) {
			const label = img.alt ? `Zoom in on: ${img.alt}` : 'Zoom in on image';
			img.setAttribute('aria-label', label);
		}

		img.addEventListener('click', () => openLightbox(img));

		img.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault(); // stop the page from scrolling on Space
				openLightbox(img);
			}
		});
	});
}

document.addEventListener('DOMContentLoaded', initLightbox);
