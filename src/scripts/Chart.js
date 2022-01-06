

export default function (dataToChart) {
  const canvas = document.getElementById('myChart')
  const ctx = canvas.getContext('2d');
  let chartStatus = Chart.getChart('myChart');
  if (chartStatus !== undefined) {
    chartStatus.destroy();
  }
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Manhattan', 'Brooklyn', 'Queens', 'Staten Island', 'Bronx'],
      datasets: [{
        label: 'Trees',
        data: [dataToChart['Manhattan'][0].length, dataToChart['Brooklyn'][0].length, dataToChart['Queens'][0].length, dataToChart['Staten Island'][0].length, dataToChart['Bronx'][0].length],
        backgroundColor: [
          'rgba(260, 206, 70, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(54, 162, 250, 0.6)',
          'rgba(75, 200, 196, 0.6)',
        ],
        borderColor: [
          'rgba(260, 206, 70, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 250, 1)',
          'rgba(75, 200, 196, 1)',
        ],
        borderWidth: 2
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