'strict';

const menuLinks = document.querySelectorAll('.navigation__link');
const navCheckbox = document.querySelector('.navigation__checkbox');

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    console.log('hey you clicked!');
    navCheckbox.checked = false;
  });
});
