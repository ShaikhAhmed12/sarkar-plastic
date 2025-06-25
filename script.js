function initMap() {
  const loc = { lat: 19.3640, lng: 72.8411 };
  const map = new google.maps.Map(document.getElementById('map'), { zoom: 13, center: loc });
  new google.maps.Marker({ position: loc, map });
}
