
import createChart from './Chart'

const getData = async (borough, species) => {
  let data = await fetch(`https://data.cityofnewyork.us/resource/uvpi-gqnh.json?boroname=${borough}&spc_common=${species}`)
  if (data.ok) {
    data = await data.json();
    return data;
  } else {
    console.log('no data!')
    throw new Error('Invalid action');
  }
}

export const getDataOnClick = () => {
  displayLoader();
  // setTimeout(() => {
    getBoroughInfo().then(result => {
      createChart(result)
      hideLoader();
    });
  // }, 5000);
}

const getBoroughInfo = async () => {
  const BOROUGHS = ['Manhattan', 'Brooklyn', 'Staten Island', 'Queens', 'Bronx'];
  let boroughData = {}
  BOROUGHS.forEach(borough => {
    boroughData[borough] = []
  })

  const getBoroughData = async () => {
    for (let i = 0; i < BOROUGHS.length; i++) {
      const res = await getData(BOROUGHS[i], selectSpecies())
      boroughData[BOROUGHS[i]].push(res)
    }
  }

  await getBoroughData();

  return boroughData;
}

const selectSpecies = () => {
  let selectedSpecies = document.getElementById('organize-by-select')
  return selectedSpecies.value;
}


let loader = document.querySelector('.loader');

const displayLoader = () => {
  // loader.classList.add('display')
  console.log(loader);
  loader.style.display = 'block';

  // setTimeout(() => {
  //   loader.classList.remove('display');
  // });
}

const hideLoader = () => {
  // loader.classList.remove('display')
  // let loader = document.querySelector('.loader');
  loader.style.display = 'none';
}
