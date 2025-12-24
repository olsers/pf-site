async function loadNav() {
    const response = await fetch('components/nav.html');
    const html = await response.text();
    document.getElementById('nav').innerHTML = html;
    setActiveNav(); // Run this AFTER the HTML is loaded
}

function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

loadNav();