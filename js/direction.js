console.info('direction.js loaded');

let h2 = document.querySelector("h2");
let montRoyal = { lat: 45.5071018, lng: -73.5874071 };

const getRoute = (destination) => {    
  navigator.geolocation.getCurrentPosition((position) => {
    const pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    calcRoute(pos, destination);
  });
}

function calcRoute(start, end) {
    
  let directionsService = new google.maps.DirectionsService();
  let directionsRenderer = new google.maps.DirectionsRenderer();
  let mapOptions = {
      zoom: 12,
      center: start
  } 
  let map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);
  directionsRenderer.setOptions( { suppressMarkers: true } );
    
  let request = {
    origin: start,
    destination: end,
    travelMode: 'TRANSIT',
    transitOptions: {
        departureTime: new Date(Date.now()),
        modes: ['TRAIN'],
        routingPreference: 'FEWER_TRANSFERS'
    },
    unitSystem: google.maps.UnitSystem.IMPERIAL
  };

  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }

    let startMarker = new google.maps.Marker({
        position: start,
        map: map,
        title: 'Your location',
        label: 'Your location'
      });

      let endMarker = new google.maps.Marker({
        position: end,
        map: map,
        title: 'Mont Royal',
        label: 'Mont Royal'
      });
  });
}

const direction = document.querySelector('#direction');
const directionLink = document.querySelector('#directionLink');
const geoLocationLink = document.querySelector('#geolocationLink');
const montroyalLink = document.querySelector('#montroyalLink');


document.addEventListener('click', (event) => {
  event.preventDefault();
  
    if (event.target === direction || event.target === directionLink) {
        getRoute(montRoyal);
        h2.innerHTML = 'Direction';
        geoLocationLink.style.display = 'block';
        directionLink.style.display = 'none';
        montroyalLink.style.display = 'block';
  }
});