async function loadNav() {
    try {
        const response = await fetch('components/nav.html');
        if (!response.ok) {
            throw new Error(`components/nav.html responded with ${response.status}`);
        }
        const html = await response.text();
        document.getElementById('nav').innerHTML = html;
    } catch (err) {
        // Nav is fetched at runtime with no server-side fallback, so a
        // failed request (offline, hosting hiccup, wrong path after a
        // deploy) would otherwise leave the page with no visible nav
        // and no error anywhere to explain why. Surface it clearly;
        // the rest of this file already guards against a missing nav
        // (setActiveNav/initDrawer no-op safely if their elements
        // aren't there), so the rest of the page still works.
        console.error('Failed to load nav:', err);
    }
}

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        let isActive = false;

        // Exact match
        if (href === currentPage) {
            isActive = true;
        }

        // If on a project page, highlight "Projects"
        if (href === 'projects.html' && currentPage.startsWith('project-')) {
            isActive = true;
        }

        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initDrawer() {
    const burgerBtn = document.querySelector('.burger-button');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');

    if (!burgerBtn || !drawer || !overlay) return;

    function openDrawer() {
        drawer.classList.add('open');
        overlay.style.display = 'block';
        requestAnimationFrame(() => overlay.classList.add('open'));
        drawer.setAttribute('aria-hidden', 'false');
        burgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        burgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        overlay.addEventListener('transitionend', () => {
            overlay.style.display = 'none';
        }, { once: true });
    }

    burgerBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.contains('open');
        isOpen ? closeDrawer() : openDrawer();
    });

    overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
}

loadNav().then(() => {
    setActiveNav();
    // Also mark active links in the drawer
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.drawer-nav-list a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'projects.html' && currentPage.startsWith('project-'))) {
            link.classList.add('active');
        }
    });
    initDrawer();
});