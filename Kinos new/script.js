// Toggle menu on hamburger click
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});
