async function loadNav() {
    const response = await fetch('components/nav.html');
    const html = await response.text();
    document.getElementById('nav').innerHTML = html;
    setActiveNav();
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

loadNav();