const Hamburger = document.querySelector('.header .Nav-Bar .Nav-list .Hamburger');
const mobile_menu = document.querySelector('.header .Nav-Bar .Nav-list ul');
const menu_item = document.querySelectorAll('.header .Nav-Bar .Nav-list ul li a');
const header = document.querySelector('.header.container');

Hamburger.addEventListener('click', () => {
    Hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 600) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        Hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});