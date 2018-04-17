
// creates a map centered on Houston, zoomed in to level 10
var map = L.map('map', {
  center: [29.7604, -95.3698], 
  zoom: 10,
});




// // this is to see something in a basic blue
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

// Choropleth view
function getColorHarvImpact(d) {
    return d > 30000 ? '#660000' :
           d > 20000 ? '#cc0000' :
           d > 10000   ? '#ff6666' :
           d > 7500   ? '#ff9999' :
           d > 5000   ? '#db87bd' :
           d > 2500 ? '#bd78db' :
           d > 1000  ? '#996bff' :
           d > 500  ? '#9985ff' :
           d > 250   ? '#99a3ff' :
           d > 100   ? '#99bdff' :
           d > 0 ? ' #cce0ff' :
                      'transparent';
}

// Choropleth style for Block Group Layer
function styleHarveyBG(feature) {
    return {
        fillColor: getColorHarvImpact(feature.properties.Harvey_Affected_Units_Total),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

// Choropleth style for CC and SNB Layers
function styleHarveyCCSNB(feature) {
    return {
        fillColor: getColorHarvImpact(feature.properties.HarveyAffectTotalUnits),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

// ************************
// Color for different flood zones

function getColorFP(d) {
    return  d == '500Yr' ? '#6b8fd1' :
            d == '100Yr' ? '#36479c' :
            d == 'Outside' ? '#91c2f7' :
            d == 'Floodway' ? '#080a6e' :
            d == 'noSSPEEDdata' ? 'red':
            d == 'Levee' ? 'green' :
                      'transparent';
}

function styleHarveyFP(feature) {
    return {
        fillColor: getColorFP(feature.properties.SSPEEDFloodplain),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

// ************************

// COLOR FOR ETHNICITY QUARTILES
function getColorBlack(d) {
    return d > 75 ? '#336600' :
           d > 50 ? '#59b300' :
           d > 25   ? '#8cff1a' :
           d > 0 ? ' #b3ff66' :
                      'transparent';
}


    // Choropleth style for Block Group Layer
function styleBlack(feature) {
    return {
        fillColor: getColorBlack(feature.properties.NH_Black/feature.properties.Total_Pop*100),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

// Hispanic

function getColorHispanic(d) {
    return d > 75 ? '#00b3b3' :
           d > 50 ? '#00ffff' :
           d > 25   ? '#66ffff' :
           d > 0 ? '#b3ffff' :
                      'transparent';
}

    // Choropleth style for Block Group Layer
function styleHispanic(feature) {
    return {
        fillColor: getColorHispanic(feature.properties.Hispanic/feature.properties.Total_Pop*100),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

// White

function getColorWhite(d) {
    return d > 75 ? '#b36b00' :
           d > 50 ? '#ff9900' :
           d > 25   ? '#ffb84d' :
           d > 0 ? '#ffcc80' :
                      'transparent';
}

    // Choropleth style for Block Group Layer
function styleWhite(feature) {
    return {
        fillColor: getColorWhite(feature.properties.NH_White/feature.properties.Total_Pop*100),
        weight: .5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}



// ************************
function styleTransparent(feature) {
    return {
        fillColor: 'transparent',
        color: 'transparent',
    };
}


// ************************

// Color blocks by district
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


// // Adds info box on the top

// var info = L.control();

// info.onAdd = function (map) {
//   this._div = L.DomUtil.create('div', 'info');
//   this.update();
//   return this._div;
// };

// info.update = function (props) {
//   this._div.innerHTML = '<h4>Estimated Number of Units Affected</h4>' +  (props ?
//     '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
//     : 'Hover over a geography for more info');
// };

// info.addTo(map);

// adds base reality
var basicBaseLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibHViYWd1emVpIiwiYSI6ImNqMTd6YmcxOTA2NmUycW83Nnc3bHppMXUifQ.I5MeLgSRNHdBztBDWvQmbA', {
    maxZoom: 18,
    attribution: ' © Luba Guzei, ' + '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.light'
}).addTo(map);

// ADDS LAYERS FOR HARVEY IMPACT
var baseMapRevert = L.geoJson(blockGroupJSON, {style: styleTransparent})

var blockGroupLayer = L.geoJson(blockGroupJSON, {style: styleHarveyBG,
    onEachFeature: function(feature, layer){
        layer.bindPopup('Units affected:' + feature.properties.Harvey_Affected_Units_Total +'<p> Portion affected: ' + parseInt(feature.properties.Harvey_Affected_Units_Total)/parseInt(feature.properties.Total_Pop)*100);
    }
})


var cityCouncilLayer = L.geoJson(cityCouncilJSON, {style: styleHarveyCCSNB,
    onEachFeature: function(feature, layer){
        unitsAffected = Math.round(feature.properties.HarveyAffectTotalUnits),
        // unitsWDecimals = Math.number.toLocaleString(unitsAffected),
        layer.bindPopup('City Council District: '+ feature.properties.DISTRICT + '<p> Units affected: ' + unitsAffected.toLocaleString());
    }
})


var superNBLayer = L.geoJson(superNBJSON, {style: styleHarveyCCSNB,
    onEachFeature: function(feature, layer){
        unitsAffected = Math.round(feature.properties.HarveyAffectTotalUnits),
        // unitsWDecimals = Math.number.toLocaleString(unitsAffected),
        layer.bindPopup('Super Neighborhood: '+ feature.properties.SNBNAME + '<p> Units affected: ' + unitsAffected.toLocaleString());
    }
})


// ADDS LAYERS AT BLOCK GROUP LEVEL OF DEMOGRAPHICS

var blockGroupBlack = L.geoJson(blockGroupJSON, {style: styleBlack,
    onEachFeature: function(feature, layer){
        layer.bindPopup('Black (Non-Hispanic) Population :' + feature.properties.NH_Black +'<p> Total Population: ' + feature.properties.Total_Pop +'<p> Percent African American Population: ' + parseInt(feature.properties.NH_Black/feature.properties.Total_Pop*100)+'%');
    }
})

var blockGroupHispanic = L.geoJson(blockGroupJSON, {style: styleHispanic,
    onEachFeature: function(feature, layer){
        layer.bindPopup('Hispanic Population:' + feature.properties.Hispanic +'<p> Total Population: ' + feature.properties.Total_Pop +'<p> Percent Hispanic Population: ' + parseInt(feature.properties.Hispanic/feature.properties.Total_Pop*100)+'%');
    }
})

var blockGroupWhite = L.geoJson(blockGroupJSON, {style: styleWhite,
    onEachFeature: function(feature, layer){
        layer.bindPopup('White (Non-Hispanic) Population:' + feature.properties.NH_White +'<p> Total Population: ' + feature.properties.Total_Pop +'<p> Percent White Population: ' + parseInt(feature.properties.NH_White/feature.properties.Total_Pop*100)+'%');
    }
})


// var floodplainLayer = L.geoJson(floodplainJSON, {style: styleHarveyFP,
//     onEachFeature: function(feature, layer){
//         layer.bindPopup('SSPEED Data: '+ feature.properties.SSPEEDFloodplain);
//     }
// })

// var floodplainSimpleLayer = L.geoJson(floodplainSimpleJSON, {style: styleHarveyFP,
//     onEachFeature: function(feature, layer){
//         // unitsWDecimals = Math.number.toLocaleString(unitsAffected),
//         layer.bindPopup('Type of Zone: '+ feature.properties.ZONE_SUBTY);
//     }
// })


// var blockGroupLayer = L.geoJson(blockGroupJSON, {style: styleHarveyBG}).addTo(map),
// var cityCouncilLayer = L.geoJson(cityCouncilJSON, {style: styleHarveyCCSNB})
// var    superNBLayer = L.geoJson(superNBJSON, {style: styleHarveyCCSNB})
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

var baseMaps = {
    "Street View": baseMapRevert,
    "African American Population": blockGroupBlack,
    "Hispanic Population": blockGroupHispanic,
    "White Population": blockGroupWhite
    // "Flood Plain": floodplainLayer
    // "Flood Simple Plain": floodplainSimpleLayer
    // "FEMA no subty" : FEMAnoSUBTYLayer, 
    // "FEMA 500 Yr" : FEMA500YrFEMALayer, 
    // "FEMA In Hazard" : FEMAminhazardLayer, 
    // "FEMA Reduced Risk b/c Levee" : FEMAreducedriskbcLeveeLayer, 
    // "FEMA Floodway" : FEMAfloodwayLayer, 
    // "FEMA Riverine Floodway" : FEMAriverinefloodwayLayer
}

var overlayMaps = {
    "Flooding: Block Groups": blockGroupLayer,
    "Flooding: Super Neighborhoods": superNBLayer,
    "Flooding: City Council Districts": cityCouncilLayer,
    // "Flood Plain": floodplainLayer
    // "Flood Simple Plain": floodplainSimpleLayer
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


L.control.layers(baseMaps, overlayMaps).addTo(map);


// // ************
// // Add mouseover
// // ************


//   // control that shows state info on hover
//   var info = L.control();

//   info.onAdd = function (map) {
//     this._div = L.DomUtil.create('div', 'info');
//     this.update();
//     return this._div;
//   };

//   info.update = function (props) {
//     this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
//       '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
//       : 'Hover over a state');
//   };

//   info.addTo(map);


//   // get color depending on population density value
//   function getColor(d) {
//     return d > 1000 ? '#800026' :
//         d > 500  ? '#BD0026' :
//         d > 200  ? '#E31A1C' :
//         d > 100  ? '#FC4E2A' :
//         d > 50   ? '#FD8D3C' :
//         d > 20   ? '#FEB24C' :
//         d > 10   ? '#FED976' :
//               '#FFEDA0';
//   }

//   function style(feature) {
//     return {
//       weight: 2,
//       opacity: 1,
//       color: 'white',
//       dashArray: '3',
//       fillOpacity: 0.7,
//       fillColor: getColor(feature.properties.density)
//     };
//   }

//   function highlightFeature(e) {
//     var layer = e.target;

//     layer.setStyle({
//       weight: 5,
//       color: '#666',
//       dashArray: '',
//       fillOpacity: 0.7
//     });

//     if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//       layer.bringToFront();
//     }

//     info.update(layer.feature.properties);
//   }

//   var geojson;

//   function resetHighlight(e) {
//     geojson.resetStyle(e.target);
//     info.update();
//   }

//   function zoomToFeature(e) {
//     map.fitBounds(e.target.getBounds());
//   }

//   function onEachFeature(feature, layer) {
//     layer.on({
//       mouseover: highlightFeature,
//       mouseout: resetHighlight,
//       click: zoomToFeature
//     });
//   }

//   geojson = L.geoJson(statesData, {
//     style: style,
//     onEachFeature: onEachFeature
//   }).addTo(map);




// ************
// Add legend to the map
// ************
var demoColorFuncs = {
  white: getColorWhite,
  black: getColorBlack,
  hispanic: getColorHispanic
}

function createDemoLegend(demographic) {
  var legend = L.control(
    {position: 'bottomleft'})
  legend.onAdd = function (map) {

      var idString = 'legend-' + demographic,
          div = L.DomUtil.create('div', 'info legend demo-legend'),
          grades = [0, 25, 50, 75],
          labels = ["<strong> Percentage of Population</strong>"],
          // labels = [],
          from, 
          to;

      // set id so its visibility can be toggled with onbaselayerchange
      div.id = idString
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          from = grades[i];
          to = grades[i + 1];

          labels.push(
              '<i style="background:' + demoColorFuncs[demographic](from + 1) + '"></i> ' +
              from + (to ? '&ndash;' + to : '+'));
      }
    div.innerHTML = labels.join('<br>');
    legend.id = idString
    return div;
  };
  legend.addTo(map)
  return legend
}

var harveyLegend = L.control({position: 'bottomright'}),
    whiteLegend = createDemoLegend('white'),
    hispanicLegend = createDemoLegend('hispanic'),
    blackLegend = createDemoLegend('black'),
    currentDemoLegend = whiteLegend

// window.wl = whiteLegend

harveyLegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 100, 250, 500, 1000, 2500, 5000, 7500, 10000, 20000, 30000],
        labels = ["<strong> Units Affected (estimated)</strong>"],
        // labels = [],
        from, to;

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
            to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColorHarvImpact(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }
  div.innerHTML = labels.join('<br>');
  return div;
};

harveyLegend.addTo(map);

function switchBaseLayerLegend(newBase) {
  var baseLayerName = newBase.name
  if (currentDemoLegend) {
    console.log(document.querySelector('#' + currentDemoLegend.id))
    console.log(currentDemoLegend.id)
    document.querySelector('#' + currentDemoLegend.id).style.display = 'none'
  }
  if (baseLayerName === "African American Population") {
    currentDemoLegend = blackLegend
    document.querySelector('#' + currentDemoLegend.id).style.display = 'block'
  }
  if (baseLayerName === "Hispanic Population") {
  currentDemoLegend = hispanicLegend
  document.querySelector('#' + currentDemoLegend.id).style.display = 'block'
  }
  if (baseLayerName === "White Population") {
  currentDemoLegend = whiteLegend
  document.querySelector('#' + currentDemoLegend.id).style.display = 'block'
  }
}

map.on('baselayerchange',switchBaseLayerLegend)


// ***********

// var floodLegend = L.control({position: 'bottomright'});

// floodLegend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//         grades = [0, 100, 250, 500, 1000, 2500, 5000, 7500, 10000, 20000, 30000],
//         labels = ["<strong> Units Affected (estimated)</strong>"],
//         // labels = [],
//         from, to;

//     // loop through our density intervals and generate a label with a colored square for each interval
//     for (var i = 0; i < grades.length; i++) {
//         from = grades[i];
//             to = grades[i + 1];

//         labels.push(
//             '<i style="background:' + getColorHarvImpact(from + 1) + '"></i> ' +
//             from + (to ? '&ndash;' + to : '+'));
//     }
//   div.innerHTML = labels.join('<br>');
//   return div;
// };

// var ethnicityLegend = L.control({position: 'bottomright'});

// ethnicityLegend.onAdd = function (map) {

//     var div = L.DomUtil.create('div', 'info legend'),
//         grades = [0, 100, 250],
//         labels = ["<strong> Units Affected (estimated)</strong>"],
//         // labels = [],
//         from, to;

//     // loop through our density intervals and generate a label with a colored square for each interval
//     for (var i = 0; i < grades.length; i++) {
//         from = grades[i];
//             to = grades[i + 1];

//         labels.push(
//             '<i style="background:' + getColorCC(from + 1) + '"></i> ' +
//             from + (to ? '&ndash;' + to : '+'));
//     }
//   div.innerHTML = labels.join('<br>');
//   return div;
// };


// var layerToLegendMapping={
//   "Flooding": floodLegend,
//   "Ethnicity/Race": ethnicityLegend
// }
// function legendAdd(event) {
//   var layername = event.name;
//   map.addControl(layerToLegendMapping[layername]);
// }

// function legendRemove(event) {
//   var layername = event.name;
//   map.removeControl(layerToLegendMapping[layername]);
// }

// map.on('baselayerchange',legendAdd);
// // map.on('overlayremove',legendRemove);



// // ************
// // add selector for layers
// var overlayMaps = {
//     "Block Group": blockGroup
// };

// L.control.layers(NULL, overlayMaps).addTo(map);





