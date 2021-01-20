// Modal Navigation
const navModal = document.querySelector('.nav-modal');
const menu = document.querySelector('.menu');
const navButton = document.querySelector('.burger-menu');

const showNavigation = () => {
  navModal.style.transform = 'scale(6)';
  menu.style.transform = 'translate(-50%, -50%)';
  menu.style.opacity = '1';
};

const hideNavigation = () => {
  menu.style.opacity = '0';
  menu.style.transform = 'translate(100vw, -50%)';
  navModal.style.transform = 'scale(0)';
};

navButton.addEventListener('click', showNavigation);
navModal.addEventListener('click', hideNavigation);
menu.addEventListener('click', hideNavigation);

// Page Scroll Effects
const redContainer = document.querySelector('.red-container');
const yellowContainer = document.querySelector('.yellow-container');
const arrow = document.querySelector('.arrow');

const scrollEffects = () => {
  if (
    document.body.scrollTop > 50 ||
    window.pageYOffset > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    redContainer.style.transform = 'scale(0.7)';
    yellowContainer.style.transform = 'scaleX(0.8) translateX(-20px)';
    arrow.style.transform = 'scaleY(2) translateY(20px)';
  } else {
    redContainer.style.transform = 'scale(1)';
    yellowContainer.style.transform = 'scaleX(1) translateX(0)';
    arrow.style.transform = 'scaleY(1) translateY(0)';
  }
};

// window.onscroll = function () {
//   scrollEffects();
// };

document.addEventListener(
  'scroll',
  () => {
    scrollEffects();
  },
  { capture: false, passive: true }
);
