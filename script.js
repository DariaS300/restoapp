const banner = document.querySelector('.banner');
const closeBtn = document.querySelector('.xmark-icon');
const body = document.body;
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

const originalParent = menu.parentElement;

closeBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    header.classList.add('shift-up');
    body.classList.add('no-banner-padding');
    menu.classList.add('shift-up');
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-opened');
    const isOpen = navList.classList.toggle('opened');
    hamburger.setAttribute('aria-label', isOpen? 'Закрыть меню' : 'Открыть меню');
    navList.setAttribute('aria-hidden', isOpen? 'false' : 'true');
    body.classList.toggle('menu-opened', isOpen);
});


overlay.addEventListener('click', ()=>{
    body.classList.remove('menu-opened');
    navList.classList.remove('opened');
});

navList.addEventListener('click', (event) => {
    if (event.target.closest('.nav__link')) {
        body.classList.remove('menu-opened');
        navList.classList.remove('opened');
    }
});