
$(document).ready(function () {
    $("#include-sidebar").load("Main-sections/sidebar.html");

    $("#include-header").load("Main-sections/header.html");

    $("#include-overview-cards").load("Main-sections/overview-cards.html", function() {
      if (typeof initializeApexCharts === 'function') {
           initializeApexCharts();
      } else {
           console.error("initializeApexCharts function not found!");
      }
  });

    $("#include-charts-row").load("Main-sections/charts-row.html", function() {
      if (typeof initializeChartJSCharts === 'function') {
           initializeChartJSCharts();
      } else {
           console.error("initializeChartJSCharts function not found!");
      }
  });

    $("#include-customer-map").load("Main-sections/customer-map.html", function() {
      if (typeof initializeIndiaMap === 'function') {
           initializeIndiaMap();
      } else {
           console.error("initializeIndiaMap function not found!");
      }
  });

    $("#include-customer-orders").load("Main-sections/customer-orders.html", function() {
      if (typeof initializeTableActions === 'function') {
          initializeTableActions();
      } else {
           console.error("initializeTableActions function not found!");
      }
  });
  
    $('[data-toggle="tooltip"]').tooltip();

    $('.sidebar-nav ul li').on('click', function () {
      $('.sidebar-nav ul li').removeClass('active');
      $(this).addClass('active');
    });
  
  });
