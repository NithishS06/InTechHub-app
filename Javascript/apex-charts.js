const chartOptions = (color, seriesData) => ({
    chart: {
      type: 'area',
      height: 70,
      width: 360,
      sparkline: { enabled: true },
    },
    stroke: {
      curve: 'smooth',
      width: 5,
      lineCap: 'round'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        gradientToColors: [color],
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100]
      }
    },
    colors: [color],
    series: [{ data: seriesData }],
    tooltip: { enabled: false },
    markers: {
      size: 0
    },
    dropShadow: {
      enabled: true,
      top: 7,
      left: 2,
      blur: 5,
      opacity: 0.8
    }
  });


  const series1 = [12, 205, 18, 250, 32, 600, 40, 268, 50, 300, 80, 600, 0];
  const series2 = [22, 280, 35, 450, 40, 600, 52, 70, 0, 900, 120];
  const series3 = [280, 850, 400, 220, 700, 300, 120, 0, 30, 45, 100 ];
  const series4 = [15, 25, 20, 38, 28, 55, 43, 65];



  function initializeApexCharts() {
       console.log("Attempting to initialize ApexCharts...");
  
  const chart1Element = document.querySelector("#chart1");
      if(chart1Element) {
           new ApexCharts(chart1Element, chartOptions("#f7b731", series1)).render();
           console.log("ApexChart 1 initialized");
      } else {
           console.error("Element #chart1 not found for ApexCharts initialization.");
      }
  
  
  const chart2Element = document.querySelector("#chart2");
      if(chart2Element) {
           new ApexCharts(chart2Element, chartOptions("#a55eea", series2)).render();
           console.log("ApexChart 2 initialized");
      } else {
           console.error("Element #chart2 not found for ApexCharts initialization.");
      }
  
  
  const chart3Element = document.querySelector("#chart3");
      if(chart3Element) {
           new ApexCharts(chart3Element, chartOptions("#20c997", series3)).render();
           console.log("ApexChart 3 initialized");
      } else {
           console.error("Element #chart3 not found for ApexCharts initialization.");
      }
  
  
  const chart4Element = document.querySelector("#chart4");
      if(chart4Element) {
           new ApexCharts(chart4Element, chartOptions("#fd5c63", series4)).render();
           console.log("ApexChart 4 initialized");
      } else {
           console.error("Element #chart4 not found for ApexCharts initialization.");
      }
  
       console.log("ApexCharts initialization attempt finished.");
  }
