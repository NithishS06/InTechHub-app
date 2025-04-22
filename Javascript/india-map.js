
function initializeIndiaMap() {

am5.ready(function() {

      var indiaMapElement = document.getElementById("indiaMap");
      if (indiaMapElement) {
          var root = am5.Root.new("indiaMap");
          root.setThemes([am5themes_Animated.new(root)]);

          var chart = root.container.children.push(am5map.MapChart.new(root, {
              panX: "none", panY: "none", wheelY: "none", projection: am5map.geoMercator()
          }));

          var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
              geoJSON: am5geodata_indiaLow
          }));

          polygonSeries.mapPolygons.template.setAll({
              tooltipText: "{name}", interactive: true, fill: am5.color(0xf6f6f6), stroke: am5.color(0xff9933), strokeWidth: 1
          });


          var cities = [
              { title: "Delhi", latitude: 28.61, longitude: 77.20 },
              { title: "Maharashtra", latitude: 19.08, longitude: 72.88 },
              { title: "Tamil Nadu", latitude: 13.08, longitude: 80.27 },
              { title: "Kerala", latitude: 8.52, longitude: 76.93 },
              { title: "Goa", latitude: 15.29, longitude: 74.12 },
              { title: "Gujarat", latitude: 22.30, longitude: 70.79 },
              { title: "Rajasthan", latitude: 27.02, longitude: 74.21 },
              { title: "Uttar Pradesh", latitude: 26.84, longitude: 80.94 },
              { title: "Odisha", latitude: 20.95, longitude: 85.10 },
              { title: "Andhra Pradesh", latitude: 16.50, longitude: 80.64 }
          ];

          var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
          pointSeries.bullets.push(function() {
              return am5.Bullet.new(root, {
                  sprite: am5.Circle.new(root, {
                      radius: 10, fill: am5.color(0xffcc99), stroke: am5.color(0xff6600), strokeWidth: 1
                  })
              });
          });
          pointSeries.data.setAll(cities);

           console.log("India Map initialized successfully.");

      } else {
          console.error("Element with id 'indiaMap' not found when trying to initialize map.");
      }

});
}
