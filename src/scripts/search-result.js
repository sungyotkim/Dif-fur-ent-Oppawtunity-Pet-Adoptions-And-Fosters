const petsUrl = '../../dist/data/petInfo.json';
const resultsContainer = document.querySelector('.results-card-container');
const sheltersUrl = '../../dist/data/shelterInfo.json';
const shelterContainer = document.querySelector(".inner-shelter-chart-container");

function reqPetInfo() {
  fetch(petsUrl)
        .then(res => res.json())
        .then(data => cardMaker(data))
        .catch(error => {
            console.log(error)
        }) 
}

function cardMaker(pets) {
  resultsContainer.innerHTML = "";

  pets.forEach(pet => {
    const card = document.createElement('div');
    const cardImgHolder = document.createElement('div');
    const cardImg = document.createElement('img');
    const nameTag = document.createElement('div');
    const cardBio = document.createElement('div');
    const cardShelter = document.createElement('div');
    
    card.setAttribute('class', 'result-card');
    cardImgHolder.setAttribute('class', 'result-card-img-holder');
    cardImg.setAttribute('class', 'result-card-img');
    nameTag.setAttribute('class', 'result-card-name');
    cardBio.setAttribute('class', 'result-card-bio');
    
    cardImg.src = `../../dist/data/pets/${pet.name.toLowerCase()}/photos/${pet.photos[0]}`;
    nameTag.innerText = `${pet.name}`;
    cardBio.innerText = `${pet.bio}`;

    cardImgHolder.appendChild(cardImg);
    card.appendChild(cardImgHolder);
    resultsContainer.append(card);
    
    const cardBioHolder = document.createElement('div');
    cardBioHolder.setAttribute('class', 'result-card-bio-holder');
    cardBioHolder.appendChild(cardBio);
    // cardBioHolder.appendChild(drawCardAnimation());
    card.appendChild(cardBioHolder);
    card.appendChild(nameTag);

    cardShelter.setAttribute('class', 'result-card-shelter');
    cardShelter.setAttribute('style', 'display: none;');
    cardShelter.innerText = `${pet.shelter}`;
    card.appendChild(cardShelter);
  })
}

// function drawCardAnimation() {
//   const svg = document.createElement('svg');
//   svg.setAttribute('id', 'curve');
//   const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   path.setAttribute('id', 'p');
//   path.setAttribute('d', 'M0,200 Q80,100 400,200 V150 H0 V50');
//   path.setAttribute('transform', 'translate(0 300)')
//   const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
//   rect.setAttribute('id', 'dummyRect');
//   rect.setAttribute('x', '0');
//   rect.setAttribute('y', '0');
//   rect.setAttribute('height', '450');
//   rect.setAttribute('width', '400')
//   rect.setAttribute('fill', 'transparent');
//   //slide up
//   const animate1 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
//   animate1.setAttribute('xlink:href', "#p");
//   animate1.setAttribute('attributeName', 'd');
//   animate1.setAttribute('to', "M0,50 Q80,100 400,50 V150 H0 V50");
//   animate1.setAttribute('fill', 'freeze');
//   animate1.setAttribute('begin', 'dummyRect.mouseover');
//   animate1.setAttribute('end', 'dummyRect.mouseout');
//   animate1.setAttribute('dur', '0.1s');
//   animate1.setAttribute('id', 'bounce1');
//   //slide up and curve in
//   const animate2 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
//   animate2.setAttribute('xlink:href', "#p");
//   animate2.setAttribute('attributeName', 'd');
//   animate2.setAttribute('to', "M0,50 Q80,0 400,50 V150 H0 V50");
//   animate2.setAttribute('fill', 'freeze');
//   animate2.setAttribute('begin', 'bounce1.end');
//   animate2.setAttribute('end', 'dummyRect.mouseout');
//   animate2.setAttribute('dur', '0.15s');
//   animate2.setAttribute('id', 'bounce2');
//   //slide down and curve in
//   const animate3 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
//   animate3.setAttribute('xlink:href', "#p");
//   animate3.setAttribute('attributeName', 'd');
//   animate3.setAttribute('to', "M0,50 Q80,80 400,50 V150 H0 V50");
//   animate3.setAttribute('fill', 'freeze');
//   animate3.setAttribute('begin', 'bounce2.end');
//   animate3.setAttribute('end', 'dummyRect.mouseout');
//   animate3.setAttribute('dur', '0.15s');
//   animate3.setAttribute('id', 'bounce3');
//   //slide down and curve out
//   const animate4 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
//   animate4.setAttribute('xlink:href', "#p");
//   animate4.setAttribute('attributeName', 'd');
//   animate4.setAttribute('to', "M0,50 Q80,45 400,50 V150 H0 V50");
//   animate4.setAttribute('fill', 'freeze');
//   animate4.setAttribute('begin', 'bounce3.end');
//   animate4.setAttribute('end', 'dummyRect.mouseout');
//   animate4.setAttribute('dur', '0.1s');
//   animate4.setAttribute('id', 'bounce4');
//   //curve in
//   const animate5 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
//   animate5.setAttribute('xlink:href', "#p");
//   animate5.setAttribute('attributeName', 'd');
//   animate5.setAttribute('to', "M0,50 Q80,50 400,50 V150 H0 V50");
//   animate5.setAttribute('fill', 'freeze');
//   animate5.setAttribute('begin', 'bounce4.end');
//   animate5.setAttribute('end', 'dummyRect.mouseout');
//   animate5.setAttribute('dur', '0.05s');
//   animate5.setAttribute('id', 'bounce5');
//   const animate6 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
//   animate6.setAttribute('xlink:href', "#p");
//   animate6.setAttribute('attributeName', 'd');
//   animate6.setAttribute('to', "M0,200 Q80,100 400,200 V150 H0 V50");
//   animate6.setAttribute('fill', 'freeze');
//   animate6.setAttribute('begin', 'dummyRect.mouseout');
//   animate6.setAttribute('dur', '0.15s');
//   animate6.setAttribute('id', 'bounceOut');
  
//   svg.appendChild(path);
//   svg.appendChild(rect);
//   svg.appendChild(animate1);
//   svg.appendChild(animate2);
//   svg.appendChild(animate3);
//   svg.appendChild(animate4);
//   svg.appendChild(animate5);
//   svg.appendChild(animate6);

//   return svg
// }
reqPetInfo();

function filterSpecies(pets, species) {
  if (species === 'Any' || species === 'Multiple') { return pets }

  let filtered = pets.filter(pet => {
    return pet.species === species
  })

  return filtered;
}

function filterBreed(pets, breed) {
  if (breed.length === 0) { return pets }

  let filtered = pets.filter(pet => {
    return breed.includes(pet.breed)
  })

  return filtered;
}

function filterAge(pets, ages) {
  if (ages.length === 0) { return pets } 

  let filtered = pets.filter(pet => {
    return ages.includes(pet.age);
  })

  return filtered;
}


function reqShelterInfo() {
  fetch(sheltersUrl)
  .then(res => res.json())
    .then(data => shelterChartMaker(data))
    .catch(error => {
      console.log(error)
    }) 
  }

  let sheltersChecked = [];
  
function shelterChartMaker(shelters) {
  shelters.forEach(shelter => {
    const row = document.createElement('div');
    const logoContainer = document.createElement('div');
    const nameTag = document.createElement('div');
    const logo = document.createElement('img');
    
    row.setAttribute('class', 'shelter-row');
    logoContainer.setAttribute('class', 'shelter-logo-container');
    nameTag.setAttribute('class', 'shelter-name-container');
    logo.setAttribute('class', 'shelter-logo-img');
    
    logo.src = `../../dist/data/assets/${shelter.name}.svg`;
    nameTag.innerText = `${shelter.name}`;
    logoContainer.appendChild(logo);
    row.appendChild(logoContainer);
    row.appendChild(nameTag);
    shelterContainer.appendChild(row);
    
    row.addEventListener("click", () => {
      row.classList.toggle("checked");
      let rowsChecked = document.querySelectorAll(".shelter-row.checked");
      let cards = resultsContainer.querySelectorAll('.result-card');
      
      if (rowsChecked.length > 0) {
        let sheltersChecked = [];
        rowsChecked.forEach(row => {
          sheltersChecked.push(row.innerText)
        })
        
        cards.forEach(card => {
          if (!sheltersChecked.includes(card.lastChild.innerText)) {
            card.setAttribute('style', 'display: none;')
          } else {
            card.setAttribute('style', 'display: "";')
          }
        })
      } else {
        cards.forEach(card => {
          card.setAttribute('style', 'display: "";')
        })
      }
    })
  })
}

reqShelterInfo();

//collect all pets info first
function generatePetsWithVideo() {
  fetch(petsUrl)
    .then(res => res.json())
    .then(data => {

    })
    .catch(err => {
      console.log(err)
    })
}

function generateVideo(pets) {
  
}


module.exports.filterSpecies = filterSpecies;
module.exports.filterBreed = filterBreed;
module.exports.filterAge = filterAge;
module.exports.reqPetInfo = reqPetInfo;
module.exports.cardMaker = cardMaker;
