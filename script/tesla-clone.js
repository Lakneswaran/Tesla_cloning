import ScrollOut from "scroll-out";

const overlay = document.querySelector('.overlay');
const overlayClose = document.querySelector('.overlay__close');

const openMenu = document.querySelectorAll('.open-menu');
openMenu.forEach(menuBtn => {
    menuBtn.addEventListener('click', (e) => {
        overlay.classList.add('show');
    });
});
overlayClose.addEventListener('click', (e) => {
    overlay.classList.remove('show');
});

ScrollOut({
    scrollingElement: ".container",
    onShown: function(el) {
      el.animate([{ opacity: .5 }, { opacity: 1 }], 1500);
    },
    onHidden: function(el) {
      el.animate([{ opacity: 1 }, { opacity: .5 }], 1500);
    }
  });