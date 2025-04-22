
function initializeChartJSCharts() {
  console.log("Attempting to initialize Chart.js charts...");

  // Total Earnings
  const earningsCanvas = document.getElementById('earningsChart');
  if (earningsCanvas) { 
      const earningsCtx = earningsCanvas.getContext('2d');
       new Chart(earningsCtx, {
          type: 'doughnut',
          data: {
              labels: ['Profits', 'Margins', 'Others', 'Lost'],
              datasets: [{
                  data: [40, 30, 20, 10],
                  backgroundColor: ['#f4ae01', '#3c80e8', '#00c896', '#ff5252'],
                  hoverOffset: 10,
                  borderWidth: 0
              }]
          },
          options: {
              cutout: '70%',
              plugins: { legend: { display: false } },
              layout: { padding: 0 }
          }
      });
       console.log("Earnings chart initialized.");
  } else {
      console.error("Canvas element with id 'earningsChart' not found for Chart.js initialization.");
  }


  // Total Profit & Lost
  const profitLossCanvas = document.getElementById('profitLossChart');
  if (profitLossCanvas) { 
      const profitLossCtx = profitLossCanvas.getContext('2d');
      new Chart(profitLossCtx, {
          type: 'bar',
          data: {
              labels: ['SUN', 'MON', 'TUE', 'WEN', 'THE', 'FRI', 'SAT'],
              datasets: [
                  { label: 'Profit', data: [110, 90, 130, 80, 100, 95, 140], backgroundColor: '#00c896', borderRadius: 6, barThickness: 6 },
                  { label: 'Loss', data: [70, 40, 90, 30, 90, 70, 60], backgroundColor: '#ff5252', borderRadius: 6, barThickness: 6 }
              ]
          },
          options: {
              responsive: true,
              plugins: {
                  legend: { display: false }
              },
              scales: {
                  x: {
                      stacked: false,
                      ticks: { font: { size: 11 } },
                      grid: { display: false }
                  },
                  y: {
                      beginAtZero: true,
                      grid: { drawBorder: false, color: '#f0f0f0' },
                      ticks: { font: { size: 1 }, stepSize: 50 }
                  }
              }
          }
      });
       console.log("Profit/Loss chart initialized.");
  } else {
       console.error("Canvas element with id 'profitLossChart' not found for Chart.js initialization.");
  }

   console.log("Chart.js initialization attempt finished."); 
}
