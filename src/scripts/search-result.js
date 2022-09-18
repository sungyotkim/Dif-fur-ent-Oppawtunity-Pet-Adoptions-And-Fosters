const petsUrl = '../../dist/data/petInfo.json';
const resultsContainer = document.querySelector('.results-card-container');

function reqPetInfo() {
  fetch(petsUrl)
        .then(res => res.json())
        .then(data => cardMaker(data))
        .catch(error => {
            console.log(error)
        }) 
}

function cardMaker(pets) {

  pets.forEach(pet => {
    const card = document.createElement('div');
    const cardImg = document.createElement('img');
    const nameTag = document.createElement('div');
    const cardBio = document.createElement('div');
    
    card.setAttribute('class', 'result-card');
    cardImg.setAttribute('class', 'result-card-img');
    nameTag.setAttribute('class', 'result-card-name');
    cardBio.setAttribute('class', 'result-card-bio');
    
    cardImg.src = `../../dist/data/pets/${pet.name.toLowerCase()}/photos/${pet.photos[0]}`;
    nameTag.innerText = `${pet.name}`;
    cardBio.innerText = `${pet.bio}`;

    card.appendChild(cardImg);
    card.appendChild(nameTag);
    card.appendChild(cardBio);
    resultsContainer.append(card)
    console.log(pet)
  })
}

// reqPetInfo();