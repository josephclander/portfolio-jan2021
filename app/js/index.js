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
