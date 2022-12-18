const burger = document.querySelector('.header__burger');
const menyBurger = document.querySelector('.header__menu');
const bodyLock = document.querySelector('body');
const links = document.querySelectorAll('.nav__item');

burger.addEventListener('click', toggleMenu);

[...links].forEach((link) => {
    link.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    burger.classList.toggle('active');
    menyBurger.classList.toggle('active');
    bodyLock.classList.toggle('lock');
}
