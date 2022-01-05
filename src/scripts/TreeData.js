
class TreeData {
  async getData(name) {
    let data = await fetch(`https://data.cityofnewyork.us/resource/uvpi-gqnh.json?boroname=${name}`)
    if (data.ok) {
      data = await data.json();
      return data;
    } else {
      throw new Error('Invalid action');
    }
  }

  onClick() {
    // return this.getData('');
    return this.getBoroughInfo();
    // return this.getSpeciesInfo();
  }

  getBoroughInfo() {
    const BOROUGHS = ['Manhattan', 'Brooklyn', 'Staten Island', 'Queens', 'Bronx'];
    let boroughData = {}
    BOROUGHS.forEach(borough => {
      boroughData[borough] = []
    })

    for (let i = 0; i < BOROUGHS.length; i++) {
      this.getData(BOROUGHS[i])
        .then(result => {boroughData[BOROUGHS[i]].push(result)})
        .then(() => console.log(boroughData));
    }
  }

  getSpeciesInfo() {
    const SPECIES = ['London planetree', 'honeylocust', 'cherry', 'red maple', 'green ash', 'American elm', 'ginkgo', 'willow oak', 'sugar maple', 'mulberry'];
    let speciesData = {};
    SPECIES.forEach(tree => {
      speciesData[tree] = [];
    })

    for (let i = 0; i < SPECIES.length; i++) {
      this.getData(SPECIES[i])
        .then(result => {speciesData[SPECIES[i]].push(result)})
        .then(() => console.log(speciesData));
    }
  }
}

// const buttonToClick = document.querySelector('#get-tree');
// buttonToClick.addEventListener('click', tree.onClick);
// const tree = document.getElementById('get-tree')

export default TreeData;

