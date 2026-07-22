// nav.js — loads the shared nav bar and wires up the mobile drawer.
//
// Architecture:
//   - The burger button, drawer, and overlay are static HTML in every page.
//     They don't depend on this script to exist in the DOM.
//   - This script wires the drawer behaviour and loads the nav bar content.
//   - initDrawer() is called both at script parse time AND on DOMContentLoaded
//     to ensure it runs regardless of when the browser parses the script tag.

async function loadNav() {
    try {
        const res = await fetch('components/nav.html');
        if (!res.ok) throw new Error(res.status);
        document.getElementById('nav').innerHTML = await res.text();
    } catch (err) {
        console.error('Nav failed to load:', err);
    }
}

function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-list a, .drawer-nav-list a').forEach(link => {
        const href = link.getAttribute('href');
        const active = href === page || (href === 'projects.html' && page.startsWith('project-'));
        link.classList.toggle('active', active);
    });
}

function openDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const btn = document.querySelector('.burger-button');
    if (!drawer) return;
    drawer.classList.add('open');
    overlay?.classList.add('open');
    btn?.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
}

function closeDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const btn = document.querySelector('.burger-button');
    if (!drawer) return;
    drawer.classList.remove('open');
    overlay?.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
}

// Expose globally so the onclick attribute on the burger can call it directly
window.toggleDrawer = function() {
    const drawer = document.getElementById('mobile-drawer');
    drawer?.classList.contains('open') ? closeDrawer() : openDrawer();
};

function initDrawer() {
    const overlay = document.getElementById('drawer-overlay');
    if (overlay && !overlay.dataset.wired) {
        overlay.dataset.wired = '1';
        overlay.addEventListener('click', closeDrawer);
    }
    document.querySelectorAll('.drawer-nav-list a[href]').forEach(a => {
        a.addEventListener('click', closeDrawer);
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeDrawer();
    });
}

// Wire drawer on script parse (burger button is already in DOM above this script)
initDrawer();

// Also wire on DOMContentLoaded as a safety net
document.addEventListener('DOMContentLoaded', initDrawer);

// Load nav content and mark active state
loadNav().then(setActiveNav);
