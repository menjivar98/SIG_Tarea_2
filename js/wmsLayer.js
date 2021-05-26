var map = L.map("map").setView([13.35, -88.45], 10);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

osm.addTo(map);

function cuidad(){
    var wmsLayer = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
        layers: "topp:tasmania_cities",
    });

    wmsLayer.addTo(map);
}




function rutas(){
    var wmsLayer = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
        layers: "topp:tasmania_roads",
    });

    wmsLayer.addTo(map);
}

wmsLayer.addTo(map);
