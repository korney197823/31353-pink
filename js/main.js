/**
 * Created by Denis on 28.03.2016.
 */
var menu = document.querySelector('.navigation'),
    menuOpener = menu.querySelector('.navigation__toggle--closed');

menuOpener.addEventListener('click', function() {
  menu.classList.toggle('navigation--open');
});
