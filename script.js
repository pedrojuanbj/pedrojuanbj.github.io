
document.addEventListener('DOMContentLoaded', ()=> {
  const burger = document.querySelector('.burger');
  const navUL = document.querySelector('nav ul');
  burger.addEventListener('click', ()=> navUL.classList.toggle('open'));
});
