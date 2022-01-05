
class TreeData {
  async getData(name) {
    const SPECIES = ['London planetree', 'honeylocust', 'cherry', 'red maple', 'green ash', 'American elm', 'ginkgo', 'willow oak', 'sugar maple', 'mulberry'];
    let data = await fetch(`https://data.cityofnewyork.us/resource/uvpi-gqnh.json?boroname=${name}`)
    if (data.ok) {
      data = await data.json();
      return data;
    } else {
      throw new Error('Incorrect');
    }
  }

  onClick() {
    // return this.getData('Manhattan');
    return this.getBoroughInfo();
  }

  getBoroughInfo() {
    const BOROUGHS = ['Manhattan', 'Brooklyn', 'Staten Island', 'Queens', 'Bronx'];
    let boroughData = {
      manhattan: [],
      brooklyn: [],
      statenIsland: [],
      queens: [],
      bronx: []
    }

    for (let i = 0; i < BOROUGHS.length; i++) {
      if (BOROUGHS[i] === 'Manhattan') {
        this.getData(BOROUGHS[i])
          .then(result => { boroughData['manhattan'].push(result)})
          .then(() => console.log(boroughData));
      } else if (BOROUGHS[i] === 'Brooklyn') {
        this.getData(BOROUGHS[i])
          .then(result => { boroughData['brooklyn'].push(result) });
      } else if (BOROUGHS[i] === 'Staten Island') {
        this.getData(BOROUGHS[i])
          .then(result => { boroughData['statenIsland'].push(result) });
      } else if (BOROUGHS[i] === 'Queens') {
        this.getData(BOROUGHS[i])
          .then(result => { boroughData['queens'].push(result) });
      } else {
        this.getData(BOROUGHS[i])
          .then(result => { boroughData['bronx'].push(result) });
      }
    }
  }
}

// const buttonToClick = document.querySelector('#get-tree');
// buttonToClick.addEventListener('click', tree.onClick);
// const tree = document.getElementById('get-tree')

export default TreeData;

