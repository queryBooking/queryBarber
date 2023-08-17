import './style.css';

success();

function success() {
  const latitude = 16.8109577;
  const longitude = 100.2535932;
  const latLong = [latitude, longitude];

  const map = L.map('map').setView(latLong, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(map);

  const marker = L.marker(latLong).addTo(map);

  const circle = L.circle(latLong, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);
}
