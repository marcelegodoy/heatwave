// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
});

window.onload = function () {
  var tilePath = 'wmts/epsg3857/best/' +
    'MODIS_Terra_CorrectedReflectance_TrueColor/default/' +
    '2018-06-01/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg';

  // Add token here when using Mapbox layers
  mapboxgl.accessToken = 'undefined';

  new mapboxgl.Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        gibs: {
          type: 'raster',
          tiles: [
            '//gibs-a.earthdata.nasa.gov/' + tilePath,
            '//gibs-b.earthdata.nasa.gov/' + tilePath,
            '//gibs-c.earthdata.nasa.gov/' + tilePath
          ],
          tileSize: 256
        }
      },
      layers: [{
        id: 'gibs',
        type: 'raster',
        source: 'gibs',
        minzoom: 0,
        maxzoom: 8
      }]
    },
    center: [0, 0],
    minZoom: 0,
    maxZoom: 7,
    zoom: 2
  });
};
