
class TreeData {
  async getData(borough, species) {
    let data = await fetch(`https://data.cityofnewyork.us/resource/uvpi-gqnh.json?boroname=${borough}&spc_common=${species}`)
    if (data.ok) {
      data = await data.json();
      return data;
    } else {
      throw new Error('Invalid action');
    }
  }

  onClick() {
    // return this.getData();
    return this.getBoroughInfo();
    // return this.selectSpecies()
    // return this.getSpeciesInfo();
    // return this.getHealthInfo();
    // return this.getStatusInfo();
  }

  getBoroughInfo() {
    const BOROUGHS = ['Manhattan', 'Brooklyn', 'Staten Island', 'Queens', 'Bronx'];
    // let species = this.selectSpecies();
    // let speciesSelector = document.getElementById('organize-by-select')
    // speciesSelector.addEventListener('change', e => {
    //   console.log('I was clicked');
    //   return e.target.value;
    // })
    let boroughData = {}
    BOROUGHS.forEach(borough => {
      boroughData[borough] = []
    })

    for (let i = 0; i < BOROUGHS.length; i++) {
      this.getData(BOROUGHS[i], this.selectSpecies())
        .then(result => {boroughData[BOROUGHS[i]].push(result)})
    }

    return boroughData;
  }

  selectSpecies() {
    let selectedSpecies = document.getElementById('organize-by-select')
    return selectedSpecies.value;
  }

  getSpeciesInfo() {
    const SPECIES = ['London planetree', 'honeylocust', 'cherry', 'red maple', 'green ash', 'American elm', 'ginkgo', 'willow oak', 'sugar maple', 'mulberry'];
    let speciesData = {};
    SPECIES.forEach(tree => {
      speciesData[tree] = [];
    });

    for (let i = 0; i < SPECIES.length; i++) {
      this.getData(SPECIES[i])
        .then(result => {speciesData[SPECIES[i]].push(result)});
    }

    return speciesData;
  }

  getHealthInfo() {
    const HEALTH = ['Good', 'Fair', '(No Value)', 'Poor'];
    let healthData = {};
    HEALTH.forEach(condition => {
      healthData[condition] = [];
    });

    for (let i = 0; i < HEALTH.length; i++) {
      this.getData(HEALTH[i])
        .then(result => {healthData[HEALTH[i]].push(result)});
    }

    return healthData;
  }

  getStatusInfo() {
    const STATUS = ['Alive', 'Stump', 'Dead'];
    let statusData = {};
    STATUS.forEach(stat => {
      statusData[stat] = [];
    });

    for (let i = 0; i < STATUS.length; i++) {
      this.getData(STATUS[i])
        .then(result => {statusData[STATUS[i]].push(result)});
    }

    return statusData;
  }

  getSideWalkDamage() {
    const DAMAGED = ['NoDamage', 'Damage', '(No Value)'];
    let damagedData = {};
    DAMAGED.forEach(damage => {
      damagedData[damage] = [];
    });

    for (let i = 0; i < DAMAGED.length; i++) {
      this.getData(DAMAGED[i])
        .then(result => {damagedData[DAMAGED[i]].push(result)});
    }

    return damagedData;
  }
}

export default TreeData;

