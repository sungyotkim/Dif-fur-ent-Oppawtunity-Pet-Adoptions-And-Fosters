const overview = require('./profile-overview');
const videoGallery = require('./video-gallery');
const photoGallery = require('./photo-gallery');
const profileDisplay = document.querySelector('.profile-display');
const profileOverview = document.querySelector('.profile-overview-container');

function renderProfile(pet) {
  overview.reqPetInfo(pet.name);
  videoGallery.reqPetInfo(pet.name);
  photoGallery.reqPetInfo(pet.name);
  profileDisplay.classList.toggle('hidden');
  profileOverview.classList.toggle('hidden');
}

module.exports.renderProfile = renderProfile;