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
    const cardBioHolder = document.createElement('div');
    const name = document.createElement('h2');
    const bio = document.createElement('p');
    const cardShelter = document.createElement('div');
    const footer = document.createElement('div');
    
    card.setAttribute('class', 'result-card');

    cardImgHolder.setAttribute('class', 'result-card-img-holder');
    cardImg.setAttribute('class', 'result-card-img');
    footer.setAttribute('class', 'footer');

    cardBioHolder.setAttribute('class', 'result-card-bio');
    
    cardImg.src = `../../dist/data/pets/${pet.name.toLowerCase()}/photos/${pet.photos[0]}`;

    name.innerText = `${pet.name}`;
    bio.innerText = `${pet.bio}`;

    cardImgHolder.appendChild(cardImg);
    card.appendChild(cardImgHolder);
    cardBioHolder.appendChild(name);
    cardBioHolder.appendChild(bio);
    card.appendChild(cardBioHolder);
    
    cardShelter.setAttribute('class', 'result-card-shelter');
    cardShelter.setAttribute('style', 'display: none;');
    cardShelter.innerText = `${pet.shelter}`;
    card.appendChild(cardShelter);
    resultsContainer.append(card);
  })
}

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
      let petsWithVideos = [];
      data.forEach(pet => {
        if (pet.videos.length > 0) {
          petsWithVideos.push(pet);
        }
      })
      generateVideo(petsWithVideos);
    })
    .catch(err => {
      console.log(err)
    })
}

function generateVideo(pets) {
  let randomPet = pets[Math.floor(Math.random() * pets.length)];
  let randomVideo = randomPet.videos[Math.floor(Math.random() * randomPet.videos.length)]
  let videoContainer = document.querySelector("#random-video");
  videoContainer.src = `../../dist/data/pets/${randomPet.name.toLowerCase()}/videos/${randomVideo}`
  let videoEnd = randomVideo.slice(randomVideo.length - 3);
  videoContainer.setAttribute('type', `video/${videoEnd}`);
}

generatePetsWithVideo();

module.exports.filterSpecies = filterSpecies;
module.exports.filterBreed = filterBreed;
module.exports.filterAge = filterAge;
module.exports.reqPetInfo = reqPetInfo;
module.exports.cardMaker = cardMaker;