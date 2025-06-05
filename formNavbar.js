async function formNavbar(currentFile) {
  const response = await fetch('navbar.html');
    const data = await response.text();
    document.getElementById('navbar-placeholder').innerHTML = data;
    document.querySelectorAll('.navbar-nav.ms-auto .nav-link').forEach(link => {
        if (link.getAttribute('href') === currentFile) {
            link.classList.add('active');
        }
    });
}
