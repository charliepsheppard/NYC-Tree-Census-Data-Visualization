import TreeData from './scripts/TreeData';
const Chart = require('./scripts/Chart');

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const tree = new TreeData();
  document.getElementById('organize-by-select').addEventListener('change', tree.onClick.bind(tree));
});