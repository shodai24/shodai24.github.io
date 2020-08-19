var mymap = L.map('mapid').setView([52.51643, 13.389587], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hvZGFpMjQiLCJhIjoiY2tlMDF6MXZ3MDZxejJycDlwM2Rpd2x1YiJ9.qfhY0lpqYBZMQfXzyDko3w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    // accessToken: 'pk.eyJ1Ijoic2hvZGFpMjQiLCJhIjoiY2tlMDF6MXZ3MDZxejJycDlwM2Rpd2x1YiJ9.qfhY0lpqYBZMQfXzyDko3w'
}).addTo(mymap);

var marker = L.marker([52.520008, 13.404954]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
var circle = L.circle([ 52.520008, 13.404954], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked on the map at " + e.latlng.toString())
        .openOn(mymap);
}   

mymap.on('click', onMapClick); 