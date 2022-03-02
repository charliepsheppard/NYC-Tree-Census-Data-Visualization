import TreeData from './scripts/TreeData';
import { getDataOnClick } from './scripts/TreeData';
const Chart = require('./scripts/Chart');

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  document.getElementById('organize-by-select').addEventListener('change', getDataOnClick);
});