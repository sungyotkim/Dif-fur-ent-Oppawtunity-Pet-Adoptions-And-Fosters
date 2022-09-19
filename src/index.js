document.addEventListener("DOMContentLoaded", e => {
  const btn = document.querySelector("#btn")
  const petsUrl = '../dist/data/petInfo.json'
  const container = document.querySelector('.container-center')

  const dropdown = require('./scripts/dropdown');
  const featured = require('./scripts/featured');
  const searchResult = require('./scripts/search-result');


  // btn.addEventListener('click', reqData);
  
  // function reqData() {
  //   fetch(petsUrl)
  //     .then(res => res.json())
  //     .then(data => adder(data))
  //     .catch((error) => {
  //       console.error(error);
  //     })
  // }

  // function adder(data) {
  //   console.log(data);
  //   console.log(petsUrl)
  //   const ul = document.createElement('ul');
  //   container.append(ul);
  //   data.forEach(ele => {
  //     const li = document.createElement('li');
  //     li.textContent = `${ele.name}`;
  //     const pic = document.createElement('img');
  //     pic.src = `../dist/data/pets/${ele.name.toLowerCase()}/photos/${ele.photos[0]}`
  //     li.appendChild(pic)
  //     ul.append(li);
  //   })
  // }
});
