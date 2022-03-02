import TreeData from './scripts/TreeData';
const Chart = require('./scripts/Chart');

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const tree = new TreeData();
  document.getElementById('organize-by-select').addEventListener('change', tree.onClick.bind(tree));
});

// const checkCanvasStatus = () => {
//   let chartElement = document.getElementById('myChart')

//   if (chartElement.innerHTML !== '') {
//     console.log('nothing is in here')
//   } 

//   console.log()
// }

// window.addEventListener('change', function() {
//   let chartElement = document.getElementById('myChart')
//   console.log(chartElement)
//   if (chartElement.innerHTML !== '') {
//     console.log('we have a chart');
//   }

//   console.log('no chart');
// })