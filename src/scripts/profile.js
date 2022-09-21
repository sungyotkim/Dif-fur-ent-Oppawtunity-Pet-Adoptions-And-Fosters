const overview = require('./profile-overview');
const videoGallery = require('./video-gallery');
const photoGallery = require('./photo-gallery');
const profileDisplay = document.querySelector('.profile-display');
const profileOverview = document.querySelector('.profile-overview-container');
const overviewBtn = document.querySelector('.overview-btn');

function renderProfile(pet) {
  overview.reqPetInfo(pet.name);
  videoGallery.reqPetInfo(pet.name);
  photoGallery.reqPetInfo(pet.name);

  if (profileDisplay.classList.contains("hidden")) {
    profileDisplay.classList.toggle('hidden');
  }

  if (profileOverview.classList.contains("hidden")) {
    profileOverview.classList.toggle('hidden');
  }

  let activeWidth = overviewBtn.clientWidth;
  let selector = document.querySelector('.selector');
  selector.style.left = `${overviewBtn.offsetLeft}px`;
  selector.style.width = `${activeWidth}px`;
}

module.exports.renderProfile = renderProfile;