/**
 * Created by Denis on 28.03.2016.
 */
var menu = document.querySelector('.navigation'),
    menuOpener = menu.querySelector('.navigation__toggle');

menuOpener.addEventListener('click', function() {
  menu.classList.toggle('navigation--open');
  if (menuOpener.classList.contains('navigation__toggle--closed')) {
    menuOpener.classList.remove('navigation__toggle--closed');
    menuOpener.classList.add('navigation__toggle--opened');
  }
  else if (menuOpener.classList.contains('navigation__toggle--opened')) {
    menuOpener.classList.remove('navigation__toggle--opened');
    menuOpener.classList.add('navigation__toggle--closed');
  }
});
