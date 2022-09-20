const container = document.querySelector('.featured-inner-container');
const featuredContainer = document.querySelector(".featured-container");
const petsUrl = '../../dist/data/petInfo.json';
const profile = require('./profile');


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
        const card = document.createElement('a');
        // card.setAttribute('href', '')
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

        card.addEventListener("click", () => {
            featuredContainer.classList.toggle('hidden');
            profile.renderProfile(currentPet);
        })
    })
}

reqPetPhoto()

function timer() {
    let countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

    let x = setInterval(function() {
        let timeNow = new Date().getTime();

        let timeDistance = countDownDate - timeNow;

        let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

        let goalTimer = document.getElementById("goal-timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (timeDistance < 0 ) {
            clearInterval(x);
            goalTimer.innerHTML = 'Finished!'
        }
    }, 1000);
}

timer();

//fake incrementer to simulate adoptions
function goalIncrementer() {
    let goal = document.getElementById("adopted-numbers");

    setInterval(() => {
        let current = goal.innerText;
        current = current.split(",").join("");
        let next = parseInt(current) + 1;
        goal.innerText = next.toLocaleString("en-US");
    }, 10000);
}

goalIncrementer();