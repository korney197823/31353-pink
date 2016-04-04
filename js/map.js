/**
 * Created by Denis on 04.04.2016.
 */
var myMap;

ymaps.ready(init);

function init () {

  myMap = new ymaps.Map('map', {

    center: [59.93598592700855, 30.324272134106657], // Невский проспект
    zoom: 15,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  });

}
