(function () {
	const masonrySections = [
		{
			title: 'The Edison Task Lamp',
			items: [
				{
					src: 'assets/id/edison-making-1.jpg',
					alt: 'A wooden and foam mockup of an articulated desk lamp arm resting on a workbench, used to test the arm\'s proportions and range of motion.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-2.jpg',
					alt: 'A hand holding a small turned wooden disc component next to a laptop, testing the fit of a dial or base part.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-3.jpg',
					alt: 'A hand holding a small grey 3D-printed hinge mechanism prototype against a white background.',
					width: 1351,
					height: 2400,
				},
				{
					src: 'assets/id/edison-making-4.jpg',
					alt: 'Close-up of flat, laser-cut metal hinge brackets with drilled holes, laid out on a workbench.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-5.jpg',
					alt: 'A CNC machine cutting a metal component, with coolant mist rising from the cutting area.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-6.jpg',
					alt: 'Close-up of a lathe turning a cylindrical metal part, chuck jaws visible gripping the workpiece.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-7.jpg',
					alt: 'Close-up of a machined cylindrical metal part surrounded by curls of metal swarf.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-8.jpg',
					alt: 'A hand holding a finned circular metal component, likely an early version of the lamp head, beside a lathe.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-9.jpg',
					alt: 'Close-up of a drill bit cutting into a block of material clamped to a workbench, with shavings scattered around.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-10.jpg',
					alt: 'Close-up of a hand holding a machined metal tube with a slot cut into it, part of the lamp\'s arm assembly.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-11.jpg',
					alt: 'Close-up of hands assembling a metal hinge bracket on a workbench.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-12.jpg',
					alt: 'A cylindrical metal part being finished on a bench grinder, with a magazine visible in the background.',
					width: 1351,
					height: 2400,
				},
				{
					src: 'assets/id/edison-making-13.jpg',
					alt: 'A hand holding a metal hinge bracket assembly, partly wrapped in blue protective tape, on a workbench.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-14.jpg',
					alt: 'A person adjusting a workpiece clamped in a pillar drill press.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-15.jpg',
					alt: 'Close-up of two curved metal lamp-head components sitting together, wrapped in blue protective tape.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-16.jpg',
					alt: 'Close-up of a black cylindrical lamp arm component being sanded and finished by hand.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-making-17.jpg',
					alt: 'A circular printed circuit board with an intricate copper trace pattern, likely for a touch-sensitive dimmer control.',
					width: 2400,
					height: 1351,
				},
				{
					src: 'assets/id/edison-1.jpg',
					alt: 'Side view of the finished matte black articulated task lamp, folded into a compact resting position against a dark studio background.',
					width: 2400,
					height: 1420,
				},
				{
					src: 'assets/id/edison-2.jpg',
					alt: 'Multiple-exposure composite showing the lamp\'s arm moving through its full range of motion, against a light grey background.',
					width: 1804,
					height: 2400,
				},
				{
					src: 'assets/id/edison-3.jpg',
					alt: 'Close-up of the underside of the lamp head, showing its finned, heatsink-like vent pattern.',
					width: 2400,
					height: 1420,
				},
				{
					src: 'assets/id/edison-4.jpg',
					alt: 'Close-up of one of the lamp\'s arm joints, showing a cylindrical pivot hinge with a visible bolt.',
					width: 2400,
					height: 1420,
				},
				{
					src: 'assets/id/edison-5.jpg',
					alt: 'Close-up of the lower arm joint and finned lamp head, showing the tensioning cable that runs along the arm.',
					width: 1736,
					height: 2400,
				},
				{
					src: 'assets/id/edison-6.jpg',
					alt: 'View from below looking up the lamp\'s pole, showing the tensioning cables crossing near the top joint and the finned head.',
					width: 1726,
					height: 2400,
				},
				{
					src: 'assets/id/edison-7.jpg',
					alt: 'Side profile of the lamp head angled downward, showing its minimalist matte black finish.',
					width: 2400,
					height: 1420,
				},
				{
					src: 'assets/id/edison-8.jpg',
					alt: 'Close-up of the top pivot joint where the tensioning cables cross, with visible bolts.',
					width: 2400,
					height: 1726,
				},
				{
					src: 'assets/id/edison-9.jpg',
					alt: 'Close-up looking straight up the pole at the top joint mechanism, showing the two tensioning cables and hinge pin.',
					width: 1806,
					height: 2400,
				},
				{
					src: 'assets/id/edison-10.jpg',
					alt: 'Close-up of the top joint mechanism, showing the cable-tensioning hub detail at the pivot.',
					width: 1804,
					height: 2400,
				},
				{
					src: 'assets/id/edison-11.jpg',
					alt: 'Close-up of an arm joint showing the tensioning cable and a sliding bracket mechanism running along the arm.',
					width: 1804,
					height: 2400,
				},
				{
					src: 'assets/id/edison-12.jpg',
					alt: 'Close-up of the lamp\'s weighted round base and the cable routing near the bottom joint.',
					width: 2400,
					height: 1429,
				},
			]
		},
		{
			title: 'Motion cancelling paintbrush for Parkinson\'s sufferers',
			items: [
				{
					src: 'assets/id/invenire-1.jpg',
					alt: 'A page of pencil concept sketches exploring different handheld brush-holder forms.',
					width: 1920,
					height: 1080,
				},
				{
					src: 'assets/id/invenire-11.jpg',
					alt: 'An early prototype: a padded black glove with a white wrist support and red foam pads, worn on a mannequin hand to explore hand stabilisation.',
					width: 420,
					height: 420,
				},
				{
					src: 'assets/id/invenire-12.jpg',
					alt: 'A hand testing the padded glove prototype with red foam elements, in a workshop setting.',
					width: 420,
					height: 420,
				},
				{
					src: 'assets/id/invenire-2.jpg',
					alt: 'Two finished dark wood-effect brush handles with paintbrush tips, showing a sliding stabiliser mechanism on the barrel.',
					width: 1500,
					height: 1125,
				},
				{
					src: 'assets/id/invenire-3.jpg',
					alt: 'An exploded render showing the internal components of the brush handle, including its stabilising counterweight parts.',
					width: 1920,
					height: 1080,
				},
				{
					src: 'assets/id/invenire-4.jpg',
					alt: 'Close-up of the finished brush handle painting a purple stroke on paper, showing the branded logo on the barrel.',
					width: 1920,
					height: 1080,
				},
			]
		},
		{
			title: 'Fine motor control/tracking accessory for VR gaming',
			items: [
				{
					src: 'assets/id/mylo-1.jpg',
					alt: 'A pair of black, lattice-patterned VR tracking rings sitting on a smartphone-shaped charging dock.',
					width: 1500,
					height: 1125,
				},
				{
					src: 'assets/id/mylo-2.jpg',
					alt: 'Close-up render of the two lattice-textured tracking rings stacked together, showing small white tracking LEDs along the band.',
					width: 960,
					height: 1080,
				},
				{
					src: 'assets/id/mylo-3.jpg',
					alt: 'Close-up of the charging case\'s rounded corner, showing power and reset icons on its surface.',
					width: 960,
					height: 1080,
				},
				{
					src: 'assets/id/mylo-4.jpg',
					alt: 'The two tracking rings and their charging case shown together on a plain white background, product-shot style.',
					width: 1920,
					height: 1080,
				},
				{
					src: 'assets/id/mylo-5.jpg',
					alt: 'A repeating pattern of the product\'s retail packaging boxes, each showing the brand mark and a photo of the rings.',
					width: 1920,
					height: 1080,
				},
			]
		},
		{
			title: 'Sexy bespoke kitchens',
			items: [
				{
					src: 'assets/id/kitchen-1-1.jpg',
					alt: 'Photo of a green shaker style kitchen with a large island, brass accents, and a copper worktop.',
					width: 2400,
					height: 1600,
				},
				{
					src: 'assets/id/kitchen-1-2.jpg',
					alt: 'Photo of the open island side from the neighboring room.',
					width: 1080,
					height: 725,
				},
				{
					src: 'assets/id/kitchen-1-3.jpg',
					alt: 'Close-up photo of one of the alcoves next to the cooker showcasing the reeded glass in the cabinet above as well as a tall marble splashback',
					width: 1080,
					height: 1350,
				},
				{
					src: 'assets/id/kitchen-1-4.jpg',
					alt: 'A tall dark green corner cabinet with glass-fronted doors, near a brick wall with potted plants on the counter below.',
					width: 1600,
					height: 2400,
				},
				{
					src: 'assets/id/kitchen-1-5.jpg',
					alt: 'Wide view of the kitchen island with a wooden countertop and brass tap, under a glazed conservatory-style roof.',
					width: 2400,
					height: 1614,
				},
				{
					src: 'assets/id/kitchen-1-6.jpg',
					alt: 'A slim kitchen island styled as a bookshelf, with cookbooks, crockery and potted plants, glass roof and garden visible beyond.',
					width: 1080,
					height: 1350,
				},
				{
					src: 'assets/id/kitchen-1-7.jpg',
					alt: 'A styled countertop vignette showing wooden utensils in a caddy, a chopping board, and a small vase of flowers against a marble splashback.',
					width: 2400,
					height: 1600,
				},
				{
					src: 'assets/id/kitchen-2-1.jpg',
					alt: 'A long white kitchen extension with a vaulted glazed roof and a black woven pendant light, bifold doors open to the garden.',
					width: 1500,
					height: 1000,
				},
				{
					src: 'assets/id/kitchen-2-2.jpg',
					alt: 'View through the glazed kitchen extension roof toward a dining table set against a white-painted brick wall.',
					width: 750,
					height: 999,
				},
				{
					src: 'assets/id/kitchen-2-3.jpg',
					alt: 'Wide view of the vaulted kitchen extension, showing exposed white roof beams, pendant lights, and a marble-topped island.',
					width: 1602,
					height: 2400,
				},
				{
					src: 'assets/id/kitchen-2-4.jpg',
					alt: 'Wide view of the vaulted kitchen extension from the opposite end, showing the island, pendant lights, and glazed roof.',
					width: 1602,
					height: 2400,
				},
				{
					src: 'assets/id/kitchen-2-5.jpg',
					alt: 'Close-up of a hexagonal tiled splashback, open shelving, and pale green cabinetry around the sink.',
					width: 2400,
					height: 1602,
				},
				{
					src: 'assets/id/kitchen-2-6.jpg',
					alt: 'Closer view of pendant lights hanging over the hexagon-tiled splashback and open shelves, with a stack of pancakes on the counter.',
					width: 1602,
					height: 2400,
				},
				{
					src: 'assets/id/kitchen-3-1.jpg',
					alt: 'A dark navy shaker-style kitchen with a marble-topped island, brass tap, and a vase of yellow flowers.',
					width: 1600,
					height: 1150,
				},
				{
					src: 'assets/id/kitchen-3-2.jpg',
					alt: 'Close-up of a dark marble countertop and matching splashback with bold veining, flanked by brass cabinet handles.',
					width: 1200,
					height: 1600,
				},
				{
					src: 'assets/id/kitchen-3-3.jpg',
					alt: 'View of a dark green island unit with a corner sink, looking through to a white-panelled hallway beyond.',
					width: 1600,
					height: 2400,
				},
				{
					src: 'assets/id/kitchen-3-4.jpg',
					alt: 'A Belfast sink set into a dark countertop beneath a large sash window, with sunlit greenery visible outside.',
					width: 1150,
					height: 1600,
				},
				{
					src: 'assets/id/kitchen-4-1.jpg',
					alt: 'View through open green garden doors into a plant-filled outdoor seating area, with a black-and-white tiled floor inside.',
					width: 712,
					height: 1066,
				},
				{
					src: 'assets/id/kitchen-4-2.jpg',
					alt: 'A dark green dresser unit with open shelving for glassware and books, log store below, blush pink walls.',
					width: 712,
					height: 1066,
				},
				{
					src: 'assets/id/kitchen-4-3.jpg',
					alt: 'A Belfast sink with brass tap set into dark green cabinetry, marble splashback, and a mantel shelf styled with plants and framed pictures above.',
					width: 712,
					height: 1066,
				},
				{
					src: 'assets/id/kitchen-4-4.jpg',
					alt: 'Wide view of the kitchen showing the marble-topped counter, dark green cabinetry, open shelving, and a breakfast bar stool.',
					width: 712,
					height: 1066,
				},
				{
					src: 'assets/id/kitchen-4-5.jpg',
					alt: 'A styled hob scene with a red pan and fresh vegetables and citrus fruit, garden doors open in the background.',
					width: 1598,
					height: 1066,
				},
				{
					src: 'assets/id/kitchen-4-6.jpg',
					alt: 'View across the kitchen toward a hallway with a green console table and glazed doors opening onto a courtyard.',
					width: 1598,
					height: 1066,
				},
				{
					src: 'assets/id/kitchen-4-7.jpg',
					alt: 'Tall built-in cabinetry in soft beige, with a broom leaning against it and sunlight falling across the monochrome tiled floor.',
					width: 712,
					height: 1066,
				},
			]
		},
		{
			title: 'Graphics and packing for airline snacks',
			items: [
				{
					src: 'assets/id/packaging-1.jpg',
					alt: 'Artful photo of airline oven meals surrounded by fresh ingredients, with a focus on the packaging design',
					width: 1500,
					height: 1125,
				},
				{
					src: 'assets/id/packaging-2.jpg',
					alt: 'Photo of a cracker and cheese snack package on an airline table with a glass of wine in the background.',
					width: 570,
					height: 455,
				},
				{
					src: 'assets/id/packaging-3.jpg',
					alt: 'Photo of a snackbox with its contents laid out infront of it.',
					width: 570,
					height: 455,
				},
				{
					src: 'assets/id/packaging-4.jpg',
					alt: 'Concept render of a beauty products display for a first class bathroom.',
					width: 550,
					height: 500,
				},
			]
		},
	];

	function createMasonryItem(item) {
		const figure = document.createElement('figure');
		figure.className = 'masonry-item';

		const img = document.createElement('img');
		img.className = 'zoomable';
		img.loading = 'lazy';
		img.src = item.src;
		img.alt = item.alt || '';
		if (item.width) img.width = item.width;
		if (item.height) img.height = item.height;
		figure.appendChild(img);

		if (item.caption) {
			const figcaption = document.createElement('figcaption');
			figcaption.textContent = item.caption;
			figure.appendChild(figcaption);
		}

		return figure;
	}

	function renderMasonryWalls(containerId = 'masonry-sections') {
		const container = document.getElementById(containerId);
		if (!container) return;

		// Built once, on load — deliberately no resize/rebuild here.
		// An earlier version of this file rebuilt the whole DOM tree
		// (sections, images, everything) on every resize, which quietly
		// broke two things: it tore down and recreated the <img>
		// elements lightbox.js had already wired up, so zooming stopped
		// working after the first resize; and it recreated the section
		// <h2> elements with fresh (empty) ids, so the TOC's anchor
		// links — generated once, from the original ids — pointed at
		// nothing. Column layout is handled entirely by CSS
		// (.masonry-wall's column-count + media queries in
		// components.css), so there's no need to ever rebuild this.
		container.innerHTML = '';

		masonrySections.forEach((section) => {
			const sectionEl = document.createElement('section');
			sectionEl.className = 'masonry-section';

			const heading = document.createElement('h2');
			heading.textContent = section.title;
			sectionEl.appendChild(heading);

			const wall = document.createElement('div');
			wall.className = 'masonry-wall';

			section.items.forEach((item) => {
				wall.appendChild(createMasonryItem(item));
			});

			sectionEl.appendChild(wall);
			container.appendChild(sectionEl);
		});
	}

	document.addEventListener('DOMContentLoaded', () => {
		renderMasonryWalls();
		// lightbox.js's own DOMContentLoaded handler runs after this one
		// (script tag order), so it already picks up the images built
		// above — this call is only a safety net in case script order
		// ever changes.
		if (typeof window.initLightbox === 'function') {
			window.initLightbox();
		}
	});

	window.renderMasonryWalls = renderMasonryWalls;
})();
