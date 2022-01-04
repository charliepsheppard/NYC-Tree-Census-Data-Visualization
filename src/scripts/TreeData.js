
class TreeData {
  async getData() {
    // ORGANIZE BY
    const organize = document.getElementById('organize-by-select');
    const selectedOrganize = organize.value;
    let organizeToRequest = ''
    if (selectedOrganize === 'staten-island') {
      organizeToRequest = 'Staten Island';
    } else {
      let capitalized = selectedOrganize[0].toUpperCase() + selectedOrganize.slice(1);
      organizeToRequest = capitalized;
    }
    console.log(selectedOrganize);

    // GROUP BY
    const group = document.getElementById('group-by-select');
    const selectedGroupBy = group.value;
    let requestBase = '';
    let groupByToRequest = '';
    if (selectedGroupBy === 'species-name') {
      requestBase = '&spc_common='
      groupByToRequest = ''
    }
    await fetch(`https://data.cityofnewyork.us/resource/uvpi-gqnh.json?boroname=${organizeToRequest}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        // for (let i = 0; i < 10; i++) {
        //   if (data[i]) {
        //     let treeList = document.querySelector(".tree-list")
        //     treeList.appendChild(document.createElement('li')).innerHTML = `${data[i].address}`
        //   } else {
        //     continue;
        //   }
        // }
      })
      .catch(error => {
        console.error(error);
      });
    // let data = await response.json();
    // console.log('this is from getdata');
    // return data;
    // return response.then(data => console.log(data[0].boroname));
  }

  onClick() {
    return this.getData();
  }
}

// const buttonToClick = document.querySelector('#get-tree');
// buttonToClick.addEventListener('click', tree.onClick);
// const tree = document.getElementById('get-tree')

export default TreeData;

