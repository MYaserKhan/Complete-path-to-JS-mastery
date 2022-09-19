const hamburger = document.querySelector('.hamburger-container');
const navbar = document.querySelector('.nav-list-items');

hamburger.addEventListener(('click'), () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('action');
});
