// To do

// MAP
// DONE JUSTIN HELPED figure out how to set up option selection
// NO NEED FOR THIS I THINK create geojson for zips
// DONE create geojson for city council 
// map block groups to city council
// DONE create geojson 100 and 500 year flood zone
// create geojson for watersheds
// buyouts?





// DATA 
// Get data on spending in each waterway on flooding
// get places that flooded in past 2 floods (may need to pull fema)
// get data from jeff on places that flooded Harvey


// Add blockgroup layer
// var blockGroup = L.tileLayer(blockGroupJSON),


// creates a map centered on Houston, zoomed in to level 10
var map = L.map('map', {
  center: [29.7604, -95.3698], 
  zoom: 10,
  // layers: [blockGroup]
});


var basicBaseLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibHViYWd1emVpIiwiYSI6ImNqMTd6YmcxOTA2NmUycW83Nnc3bHppMXUifQ.I5MeLgSRNHdBztBDWvQmbA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.light'
}).addTo(map);

// This is a layer just to see all the block group outlines without color
// var geojson = L.geoJson(harris100YrFloodplainJSON).addTo(map);


// Set Color
// function getColor(d) {
//     return d > 3000 ? '#006400' :
//            d > 2000 ? '#32CD32' :
//            d > 1000 ? '#CAFF70' :
//            d > 500  ? '#E3CF57' :
//            d > 100  ? '#EE7942' :
//                       '#EE4000';
// }

// L.geoJSON(layer, {
// filter: function(feature) {
// return features.properties.FLD_ZONE === "AE"
// },


function style(features) {
    return {
        fillColor: 'lightblue',
        weight: .5,
        opacity: 1,
        color: 'blue',
        // color: 'blue',
        fillOpacity: 0.7
    };
}

function getColor(d) {
    return d > 3000 ? 'black' :
           d > 1000  ? '#99000D' :
           d > 500  ? '#CB181D' :
           d > 400  ? '#EF3B2C' :
           d > 300   ? '#FB6A4A' :
           d > 200   ? '#FC9272' :
           d > 100   ? '#FCBBA1' :
           d > 0 ? '#FEE5D9' :
                      'white';
}

function styleHarvey(feature) {
    return {
        fillColor: getColor(feature.properties.Harvey_Affected_Units_Total),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}


function getColorDist(d) {
    return d == 'A' ? 'black' :
           d == 'B' ? 'lavender' :
           d == 'C'  ? 'blue' :
           d == 'D'  ? 'yellow' :
           d == 'E'  ? 'green' :
           d == 'F'  ? 'pink' :
           d == 'G'  ? 'purple' :
           d == 'H'  ? 'brown' :
           d == 'I'  ? 'orange' :
           d == 'J'  ? 'teal' :
           d == 'K'  ? 'peach' :
                      'white';
}

function styleCouncilDist(feature) {
    return {
        fillColor: getColorDist(feature.properties.primaryCC),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}


function getColorCC(d) {
    return d > 35000 ? 'black' :
           d > 30000  ? 'green' :
           d > 25000  ? 'blue' :
           d > 20000  ? 'pink' :
           d > 15000   ? 'yellow' :
           d > 10000   ? 'orange' :
           d > 5000   ? 'orange' :
           d > 0 ? 'orange' :
                      'white';
}

function styleCC(feature) {
    return {
        fillColor: getColorCC(feature.properties.HarveyAffectTotalUnits),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

// *************For SNs
function getColorSN(d) {
    return d > 10000 ? 'black' :
           d > 8000  ? '#99000D' :
           d > 6000  ? '#CB181D' :
           d > 4000  ? '#EF3B2C' :
           d > 2000   ? '#FB6A4A' :
           d > 1000   ? '#FC9272' :
           d > 500   ? '#FCBBA1' :
           d > 0 ? 'pink' :
                      'white';
}

function styleHarveySN(feature) {
    return {
        fillColor: getColorSN(feature.properties.HarveyAffectTotalUnits),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}


var blockGroupLayer = L.geoJson(blockGroupJSON, {style: styleHarvey}).addTo(map),
    cityCouncilLayer = L.geoJson(cityCouncilJSON, {style: style}).addTo(map);
    superNBLayer = L.geoJson(superNBJSON, {style: styleHarveySN}).addTo(map);
    // FEMAnoSUBTYLayer = L.geoJson(FEMAnoSUBTYjson, {style: style}).addTo(map);
    // FEMA500YrFEMALayer = L.geoJson(FEMA500YrFEMAjson, {style: style}).addTo(map);
    // FEMAminhazardLayer = L.geoJson(FEMAminhazardjson, {style: style}).addTo(map);
    // FEMAreducedriskbcLeveeLayer = L.geoJson(FEMAreducedriskbcLeveejson, {style: style}).addTo(map);
    // FEMAfloodwayLayer = L.geoJson(FEMAfloodwayjson, {style: style}).addTo(map);
    // FEMAriverinefloodwayLayer = L.geoJson(FEMAriverinefloodwayjson, {style: style}).addTo(map);

// // popup layer
// var harveyImpactLayer = L.geoJSON(blockGroupGeoWHarveyJSON, {
//   onEachFeature: function (feature, layer) {
//     layer.bindPopup('<h1>'+feature.properties.GEOdisplaylabel+'</h1><p>name: '+feature.properties.GEOdisplaylabel+'</p>');
//   }
// }).addTo(map);

// var baseMaps = {
//     "streets": basicBaseLayer
// }

var overlayMaps = {
    "Block Groups": blockGroupLayer,
    "City Council Districts": cityCouncilLayer,
    "Super Neighborhoods": superNBLayer
    // "FEMA no subty" : FEMAnoSUBTYLayer, 
    // "FEMA 500 Yr" : FEMA500YrFEMALayer, 
    // "FEMA In Hazard" : FEMAminhazardLayer, 
    // "FEMA Reduced Risk b/c Levee" : FEMAreducedriskbcLeveeLayer, 
    // "FEMA Floodway" : FEMAfloodwayLayer, 
    // "FEMA Riverine Floodway" : FEMAriverinefloodwayLayer
}

// Markers in case I ever need to test a specific point
// var marker = L.marker([29.8100603635408,-95.7522754597583]).addTo(map);
// var marker2 = L.marker([29.7604, -95.3698]).addTo(map);


L.control.layers(null, overlayMaps).addTo(map);

// ***********

// Everything below this is not relevant

// ************
// Add legend to the map
// var legend = L.control({position: 'bottomright'});

// legend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//         grades = [0, 100, 500, 1000, 2000, 3000],
//         labels = [];

//     // loop through our density intervals and generate a label with a colored square for each interval
//     for (var i = 0; i < grades.length; i++) {
//         div.innerHTML +=
//             '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
//             grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//     }

//     return div;
// };

// legend.addTo(map);


// // ************
// // add selector for layers
// var overlayMaps = {
//     "Block Group": blockGroup
// };

// L.control.layers(NULL, overlayMaps).addTo(map);





