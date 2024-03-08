console.info('init.js loaded');

async function initPage() {
  const { Map } = await google.maps.importLibrary("maps");
  let montRoyal = {lat: 45.5071018, lng: -73.5874071};

  let map = new Map(document.querySelector("#map"), {
    center: montRoyal,
    zoom: 12,
  });

  let marker = new google.maps.Marker({
    position: montRoyal, 
    map: map,
    title: 'Mont Royal',
    label: 'Mont Royal'
  });
}