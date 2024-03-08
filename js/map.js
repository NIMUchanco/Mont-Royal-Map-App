console.info('map.js loaded');

export const updateMap = async (location, posText) => {
  const { Map } = await google.maps.importLibrary("maps");

  let map = new google.maps.Map(document.querySelector("#map"), {
      center: location,
      zoom: 14,
  });

  let marker = new google.maps.Marker({
      position: location,
      map: map,
      title: posText,
      label: posText
  });
}