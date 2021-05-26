var map = L.map("map").setView([13.69,  -89.19], 8);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

osm.addTo(map);

var rios = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:rios",
    transparent: true
})

var lagos = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:lagos",
    transparent: true,
    
})

var areas_protegidas = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:areas_protegidas",
    transparent: true,
    
})

var cerros = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:cerros",
    transparent: true,
    
})

var departamentos = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:departamentos",
    transparent: true,
    
})

var escuelas = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:escuelas",
    transparent: true,
    
})

var montanas = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:montanas",
    transparent: true,
    
})

var red_vial = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:red_vial",
    transparent: true,
    
})

var volcanes = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:volcanes",
    transparent: true,
    
})



var baseMaps = {
    "OSM":osm
}

var overlayMaps = {
    "rios":rios,
    "lagos":lagos

}

var title = L.control();
    title.onAdd = function (map){
        var div = L.DomUtil.create('div','info');
        div.innerHTML +=
        '<h2>Mapa del El Salvador</h2>';
    return div;
}

title.addTo(map)

L.control.layers(baseMaps, overlayMaps,{
    position: 'topleft'
}).addTo(map);
L.control.scale().addTo(map)

   