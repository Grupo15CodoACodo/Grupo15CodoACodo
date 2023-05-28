var map = L.map('map').setView([-34.567209, -58.450429], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-34.567209, -58.450429]).addTo(map);

marker.bindPopup("<b>Grupo15</b><br>Desarrollo Web").openPopup();