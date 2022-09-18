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
        cardTitle.innerText = `${currentPet.characteristics[0]} ${currentPet.species === 'Canine' ? 'Dog' : 'Cat'}`
        cardTitle.setAttribute('class', 'featured-card-title');
        card.appendChild(img);
        card.appendChild(cardTitle);
        container.append(card)
    })
}

reqPetPhoto()