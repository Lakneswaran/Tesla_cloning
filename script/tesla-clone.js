const overlay = document.querySelector('.overlay');
const overlayClose = document.querySelector('.overlay__close');

const openMenu = document.querySelectorAll('.open-menu');
openMenu.forEach(menuBtn => {
    overlay.classList.add('click', (e) => {
        overlay.classList.add('show');
    });
});
overlayClose.addEventListener('click', (e) => {
    overlay.classList.remove('show');
});