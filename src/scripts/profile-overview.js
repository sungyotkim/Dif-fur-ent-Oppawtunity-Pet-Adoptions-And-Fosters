const profilePhoto = document.querySelector('#profile-photo');
const nameTag = document.querySelector('#profile-name-tag');
const profileName = document.querySelector('#profile-name');
const profileAge = document.querySelector('#profile-age');
const profileBreed = document.querySelector('#profile-breed');
const profileColor = document.querySelector('#profile-color');
const profileChars = document.querySelector('#profile-chars');
const profileBio = document.querySelector('#profile-bio');
const shelterName = document.querySelector('#shelter-name');
const shelterLocation = document.querySelector('#shelter-location');
const shelterWebsite = document.querySelector('#shelter-website');
const petsUrl = '../../dist/data/petInfo.json';
const sheltersUrl = '../../dist/data/shelterInfo.json';
const availability = document.querySelector('#availability');

function reqPetInfo(profilePet) {
  fetch(petsUrl)
        .then(res => res.json())
        .then(data => {
          data.forEach(pet => {
            if (pet.name === profilePet) {
              populateProfile(pet);
            }
          })
        })
        .catch(error => {
            console.log(error)
        }) 
}

function populateProfile(pet) {
  profilePhoto.src = `../../dist/data/pets/${pet.name.toLowerCase()}/photos/${pet.photos[0]}`;

  if (pet.species === 'Canine') {
    nameTag.src = `../../dist/assets/dogbone_350x80.png`;
  } else {
    nameTag.src = `../../dist/assets/fishtag_350x80.png`;
    nameTag.setAttribute('class', 'fish');
  }

  profileName.innerText = `${pet.name}`;
  profileAge.innerText = `${pet.age}`;
  profileBreed.innerText = `${pet.breed}`;
  let colorStr = '';
  for (let i = 0; i < pet.colors.length; i++) {
    if (i !== 0) { colorStr += ', ' }
    colorStr += pet.colors[i];
  }
  profileColor.innerText = colorStr;

  availability.innerText = `${pet.status}`;

  let characteristics = '';
  for (let i = 0; i < pet.characteristics.length; i++) {
    if (i !== 0) { characteristics += ', ' }
    characteristics += pet.characteristics[i];
  }
  profileChars.innerText = characteristics;

  profileBio.innerText = pet.bio;

  shelterName.innerText = pet.shelter;
  fetchShelterInfo(pet.shelter);
}

function fetchShelterInfo(name) {
  fetch(sheltersUrl)
    .then(res => res.json())
    .then(data => {
      data.forEach(shelter => {
        if (shelter.name === name) {
          addShelterInfo(shelter);
        }
      })
    })
    .catch(err => {
      console.log(err);
    })
}

function addShelterInfo(shelter) {
  shelterLocation.innerText = shelter.location;
  shelterWebsite.href = shelter.website;
  shelterWebsite.setAttribute('target', '_blank');
  shelterWebsite.innerText = 'Link to website!'
}

module.exports.reqPetInfo = reqPetInfo;
module.exports.populateProfile = populateProfile;
module.exports.fetchShelterInfo = fetchShelterInfo;
module.exports.addShelterInfo = addShelterInfo;