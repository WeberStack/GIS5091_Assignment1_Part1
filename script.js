var mymap = L.map('mapid').setView([38.6270, -90.1994], 10);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 15
  
}).addTo(mymap);

var marker1 = L.marker([38.630737,-90.199501]).addTo(mymap);
var marker2 = L.marker([38.624691,-90.184776]).addTo(mymap);
var marker3 = L.marker([38.6348,-90.2336]).addTo(mymap);
var marker5 = L.marker([38.5510,-90.3534]).addTo(mymap);
var marker4 = L.marker([38.6349,-90.2910]).addTo(mymap);

marker1.bindPopup("STLLibrary").openPopup();
marker2.bindPopup("The Gateway Arch").openPopup();
marker3.bindPopup("St. Louis University").openPopup();
marker4.bindPopup("St. Louis Zoo").openPopup();
marker5.bindPopup("Grant’s Farm").openPopup();
