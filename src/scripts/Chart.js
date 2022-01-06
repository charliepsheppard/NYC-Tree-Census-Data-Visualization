

export default function (dataToChart) {
  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Manhattan', 'Brooklyn', 'Queens', 'Staten Island', 'Bronx'],
      datasets: [{
        label: '# of Trees',
        data: [dataToChart['Manhattan'][0].length, dataToChart['Brooklyn'][0].length, dataToChart['Queens'][0].length, dataToChart['Staten Island'][0].length, dataToChart['Bronx'][0].length],
        // data: [78, 200, 340, 80, 25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// let dataToChart;


//   if (dataToChart) {
    
//   }
// });