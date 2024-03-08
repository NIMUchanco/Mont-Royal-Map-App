console.info('geolocation.js loaded');

import { updateMap } from "./map.js";
let h2 = document.querySelector("h2");

const getLocation = (posText) => {    
  navigator.geolocation.getCurrentPosition(
      (position) => {
          const pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          updateMap(pos, posText);
      });
}

const geoLocation = document.querySelector('#geolocation');
const geoLocationLink = document.querySelector('#geolocationLink');
const montroyal = document.querySelector('#montroyal');
const montroyalLink = document.querySelector('#montroyalLink');
const directionLink = document.querySelector('#directionLink');

montroyalLink.style.display = 'none';

document.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (event.target === geoLocation || event.target === geoLocationLink) {
    getLocation('Your location');
    updateMap(location, 'Your location');
    h2.innerHTML = 'Your location';
    geoLocationLink.style.display = 'none';
    montroyalLink.style.display = 'block';
    directionLink.style.display = 'block';
  }
});

document.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (event.target === montroyal || event.target === montroyalLink) {
    let montRoyal = {lat: 45.5071018, lng: -73.5874071};
    updateMap(montRoyal, 'Mont Royal');
    h2.innerHTML = 'Mont Royal';
    montroyalLink.style.display = 'none';
    geoLocationLink.style.display = 'block';
    directionLink.style.display = 'block';
  }
});