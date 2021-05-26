var map = L.map("map").setView([13.69,  -89.19], 8);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

osm.addTo(map);

var rios = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:rios",
    format: 'image/png',
    transparent: true,
})

var lagos = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:lagos",
    transparent: true,
    format: 'image/png',
    
})

var areas_protegidas = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:areas_protegidas",
    transparent: true,
    format: 'image/png',
    
})

var cerros = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:cerros",
    transparent: true,
    format: 'image/png',
    
})

var departamentos = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:departamentos",
    transparent: true,
    format: 'image/png',
    
})

var escuelas = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:escuelas",
    transparent: true,
    format: 'image/png',
    
})

var montanas = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:montanas",
    transparent: true,
    format: 'image/png',
    
})

var red_vial = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:red_vial",
    transparent: true,
    format: 'image/png',
    
})

var volcanes = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:volcanes",
    transparent: true,
    format: 'image/png',
    
})

var municipios = L.tileLayer.wms("http://localhost:8080/geoserver/wms",{
    layers: "cite:municipios",
    transparent: true,
    format: 'image/png',
    
})

var baseMaps = {
    "OSM":osm
}

var overlayMaps = {
    "departamentos":departamentos,
    "municipios":municipios,
    "rios":rios,
    "lagos":lagos,
    "areas_protegidas":areas_protegidas,
    "cerros":cerros,
    "escuelas":escuelas,
    "montanas":montanas,
    "red_vial":red_vial,
    "volcanes":volcanes


}

var title = L.control();
    title.onAdd = function (map){
        var div = L.DomUtil.create('div','info');
        div.innerHTML +=
        '<h2>Mapa del El Salvador</h2>';
    return div;
}

title.addTo(map)

var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
 var div = L.DomUtil.create('div', 'info legend');
 div.innerHTML +=
 '<img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/soy-leyenda_0.jpg?itok=NS58nujY" alt="legend" width="101" height="120">';
 return div;
};
legend.addTo(map);

L.control.layers(baseMaps, overlayMaps,{
    position: 'topleft'
}).addTo(map);
L.control.scale().addTo(map)

   