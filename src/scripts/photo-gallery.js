const petsUrl = '../../dist/data/petInfo.json';
const mainContainer = document.querySelector('.main-photo-container');
const subContainer = document.querySelector('.sub-photo-container');

function reqPetInfo(profilePet) {
  fetch(petsUrl)
        .then(res => res.json())
        .then(data => {
          data.forEach(pet => {
            if (pet.name === profilePet) {
              populateMainPhoto(pet);
              populateSubPhotos(pet);
            }
          })
        })
        .catch(error => {
            console.log(error)
        }) 
}

reqPetInfo('Nara');

function populateMainPhoto(pet, num = 0) {
  const photo = document.createElement('img');
  photo.src = `../../dist/data/pets/${pet.name.toLowerCase()}/photos/${pet.photos[num]}`;
  mainContainer.appendChild(photo);
}

function populateSubPhotos(pet) {
  if (pet.firstPhoto) {
    const card = document.createElement('div');
    card.setAttribute('class', 'photo-card');
    const photo = document.createElement('img');
    photo.src = `../../dist/data/pets/${pet.name.toLowerCase()}/photos/${pet.firstPhoto}`;
    card.appendChild(photo);
    // const notice = documnet.createElement('h2');
    // notice.innerText = ''
    subContainer.appendChild(card);
  }

  const card = document.createElement('div');
  card.setAttribute('class', 'photo-card');
  const photo = document.createElement('img');
}