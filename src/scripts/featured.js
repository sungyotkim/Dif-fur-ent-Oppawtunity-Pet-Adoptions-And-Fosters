const container = document.querySelector('.featured-inner-container');
const petsUrl = '../../dist/data/petInfo.json';

function reqPetPhoto() {
    fetch(petsUrl)
        .then(res => res.json())
        .then(data => photoAdder(data))
        .catch(error => {
            console.log(error)
        }) 
}

function photoAdder(data) {
    let petsWithVideos = data.filter(pet => pet.videos.length > 0 && pet.photos.length > 1);
    let featuredPets = [];
    while (featuredPets.length < 5) {
        let sampleIdx = Math.floor(Math.random() * petsWithVideos.length);
        let sample = petsWithVideos[sampleIdx];
        featuredPets.push(sample);
        petsWithVideos.splice(sampleIdx, 1)
    }

    featuredPets.forEach(currentPet => {
        const card = document.createElement('div');
        card.setAttribute('class', 'featured-card');
        const img = document.createElement('img');
        img.src = `../../dist/data/pets/${currentPet.name.toLowerCase()}/photos/${currentPet.photos[1]}`;
        img.setAttribute('width', '50px')
        img.setAttribute('class', 'featured-img')
        const cardTitle = document.createElement('div');
        cardTitle.innerText = `${currentPet.name} the ${currentPet.characteristics[0]} ${currentPet.species === 'Canine' ? 'dog' : 'cat'}`
        cardTitle.setAttribute('class', 'featured-card-title');
        const cardName = document.createElement('div');
        const cardDescription = document.createElement('div');
        // cardName.innerText = `${currentPet.name}`;
        cardName.innerText = `${currentPet.name} the ${currentPet.characteristics[0]} ${currentPet.species === 'Canine' ? 'dog' : 'cat'}`
        cardName.setAttribute('class', 'featured-card-name');
        cardDescription.innerText = `${currentPet.bio} Click to see more!`;
        cardDescription.setAttribute('class', 'featured-card-bio');
        card.appendChild(img);
        card.appendChild(cardTitle);
        card.appendChild(cardName);
        card.appendChild(cardDescription);
        container.append(card)
    })
}

reqPetPhoto()