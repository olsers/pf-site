// tooltip.js — layered on top of the CSS-only hover/:focus-within
// tooltip (see .tooltip / .tooltip-text in components.css).
//
// The accessible description is already exposed to screen readers via
// aria-describedby regardless of this script — assistive tech reads
// the referenced role="tooltip" text when the trigger receives focus,
// independent of its visual show/hide state. This file only adds the
// *visual* reveal for touch users, who have no hover state and whose
// tap-to-focus behaviour on non-form elements (span/abbr) varies
// across mobile browsers:
//   - tapping a trigger toggles a .tooltip-active class (shown via the
//     same CSS transition as hover/focus-within)
//   - tapping elsewhere, or pressing Escape, closes any open tooltip

function closeAllTooltips() {
	document.querySelectorAll('.tooltip.tooltip-active').forEach((t) => {
		t.classList.remove('tooltip-active');
	});
}

function initTooltips() {
	document.querySelectorAll('.tooltip').forEach((trigger) => {
		if (trigger.dataset.tooltipBound === 'true') return;
		trigger.dataset.tooltipBound = 'true';

		trigger.addEventListener('click', (e) => {
			const wasOpen = trigger.classList.contains('tooltip-active');
			closeAllTooltips();
			if (!wasOpen) {
				trigger.classList.add('tooltip-active');
			}
			e.stopPropagation();
		});
	});
}

document.addEventListener('click', closeAllTooltips);
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') closeAllTooltips();
});
document.addEventListener('DOMContentLoaded', initTooltips);
