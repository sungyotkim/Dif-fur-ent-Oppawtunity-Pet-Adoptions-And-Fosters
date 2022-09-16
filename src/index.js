document.addEventListener("DOMContentLoaded", e => {
  const btn = document.querySelector("#btn")
  const petsUrl = '../dist/data/shelterInfo.json'


  console.log("Test!")

  btn.addEventListener('click', reqData);
  
  function reqData() {
    fetch(petsUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      })
  }
});
