import TreeData from './scripts/TreeData';

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

const tree = new TreeData();
// console.log(tree.getData());

// const buttonToClick = document.querySelector('#get-tree');
// buttonToClick.addEventListener('click', tree.onClick);
// if (buttonToClick) {
//   console.log('this is the button: ', buttonToClick);
//   buttonToClick.addEventListener("click", console.log('I was clicked'));
//   console.log('I was clicked')
// }

document.getElementById('get-tree').addEventListener("click", () => {
  return tree.onClick();
});