const hamburger_menu_link = document.querySelector('.hamburger-menu-link');

hamburger_menu_link.addEventListener('click', function() {
    const hamburger_menu = document.querySelector('.hamburger-menu');
    hamburger_menu.style.display = 'block';
});