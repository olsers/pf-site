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

	// Click anywhere on the dialog (backdrop or image) closes it.
	dialog.addEventListener('click', () => dialog.close());

	document.querySelectorAll('img.zoomable').forEach((img) => {
		img.addEventListener('click', () => {
			dialogImg.src = img.currentSrc || img.src;
			dialogImg.alt = img.alt;
			dialog.showModal();
		});
	});
}

document.addEventListener('DOMContentLoaded', initLightbox);
