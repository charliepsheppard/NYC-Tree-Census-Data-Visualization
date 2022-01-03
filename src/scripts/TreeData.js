
class TreeData {
  async getData() {
    await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json?spc_common=red maple&boroname=Brooklyn&zipcode=11249')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        for (let i = 0; i < 10; i++) {
          if (data[i]) {
            let treeList = document.querySelector(".tree-list")
            treeList.appendChild(document.createElement('li')).innerHTML = `${data[i].address}`
          } else {
            continue;
          }
        }
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

