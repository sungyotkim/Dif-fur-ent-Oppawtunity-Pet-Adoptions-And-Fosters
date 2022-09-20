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

function populateMainPhoto(pet, num = 0) {
  mainContainer.innerHTML = '';

  const photo = document.createElement('img');
  photo.src = `../../dist/data/pets/${pet.name.toLowerCase()}/photos/${pet.photos[num]}`;
  mainContainer.appendChild(photo);
}

function populateSubPhotos(pet) {
  subContainer.innerHTML = '';

  pet.photos.forEach(photo => {
    const card = document.createElement('div');
    card.setAttribute('class', 'photo-card');
    const pic = document.createElement('img');
    pic.src = `../../dist/data/pets/${pet.name.toLowerCase()}/photos/${photo}`;
    card.appendChild(pic);
    subContainer.appendChild(card);
    card.addEventListener("click", () => {
      let index = pet.photos.indexOf(photo);
      populateMainPhoto(pet, index);
    })
  })
}

module.exports.reqPetInfo = reqPetInfo;
module.exports.populateMainPhoto = populateMainPhoto;
module.exports.populateSubPhotos = populateSubPhotos;