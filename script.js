const banner = document.querySelector('.banner');
const closeBtn = document.querySelector('.xmark-icon');
const body = document.body;
const header = document.querySelector('header');

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();

    banner.classList.add('hidden');
    header.classList.add('shift-up');
    body.classList.add('no-banner-padding');
});
