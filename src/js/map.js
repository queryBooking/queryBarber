import '~/css/style.css';

success();

function success() {
  const latitude = 17.2194059;
  const longitude = 100.1993588;
  const latLong = [latitude, longitude];

  const map = L.map('map').setView(latLong, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '© OpenStreetMap',
  }).addTo(map);

  const marker = L.marker(latLong).addTo(map);
  const mapCenter = map.getCenter();
  marker.setLatLng(mapCenter);

  const circle = L.circle(latLong, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);
}
