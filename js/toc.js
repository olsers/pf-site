async function loadToc() {
    const response = await fetch('components/toc.html');
    const html = await response.text();
    document.getElementById('toc').innerHTML = html;

    // Generate TOC items from h2s
    generateTocItems();

    // Mouse users get the old hover-to-peek convenience, but it's
    // implemented by toggling the same [open] attribute that keyboard
    // users control via Enter/Space on the <summary> — so the visual
    // state and the semantic/AT state can never fall out of sync.
    const toc = document.querySelector('.toc');
    if (toc) {
        toc.addEventListener('mouseenter', () => { toc.open = true; });
        toc.addEventListener('mouseleave', () => { toc.open = false; });
    }
}

function generateTocItems() {
    const h2s = document.querySelectorAll('h2');
    const tocList = document.querySelector('.toc ul');

    // Clear existing items
    tocList.innerHTML = '';

    h2s.forEach((h2, index) => {
        // Add an id if the h2 doesn't have one
        if (!h2.id) {
            h2.id = `heading-${index}`;
        }

        // Create list item
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${h2.id}`;
        a.textContent = `${h2.textContent}`;

        li.appendChild(a);
        tocList.appendChild(li);
    });
}

loadToc();