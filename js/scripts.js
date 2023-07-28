function menuShow() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon button');
    mobileMenuIcon.classList.toggle('open');

    let menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.toggle('open');

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.toggle('open');
    });
}