const overview = require('./profile-overview');
const videoGallery = require('./video-gallery');
const photoGallery = require('./photo-gallery');
const profileDisplay = document.querySelector('.profile-display');
const profileOverview = document.querySelector('.profile-overview-container');
const overviewBtn = document.querySelector('.overview-btn');
const formPopupBtn = document.querySelector('.adopt-me-container');
const formPopup = document.querySelector('.form-popup');
const formCloseBtn = document.querySelector('.close-button');
const formSubmitBtn = document.querySelector('.submit-btn');
const returnToSearchBtn = document.querySelector('.return-to-search');
const resultsContainer = document.querySelector('.container-results');
const requestFormTitle = document.querySelector('.request-form-title');
const requestShelterName = document.querySelector('.request-shelter-name');
const photoGalleryContainer = document.querySelector('.photo-gallery-container');
const videoGalleryContainer = document.querySelector('.video-gallery-container');

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

  profileBtnAnimation(overviewBtn);
  requestFormTitle.innerHTML = `${pet.name}`;
  requestShelterName.innerHTML = `${pet.shelter}`;
}

function profileBtnAnimation(btn) {
  let prevActiveBtn = document.querySelector('.active');
  if (!prevActiveBtn !== btn ) {
    prevActiveBtn.classList.toggle('active');
  }

  btn.classList.toggle('active');
  let activeWidth = btn.clientWidth;
  let selector = document.querySelector('.selector');
  selector.style.left = `${btn.offsetLeft}px`;
  selector.style.width = `${activeWidth}px`;
};

formPopupBtn.addEventListener("click", () => {
  formPopup.classList.toggle('hidden');
})

formCloseBtn.addEventListener("click", () => {
  formPopup.classList.toggle('hidden')
})

formSubmitBtn.addEventListener("click", () => {
  formPopup.classList.toggle('hidden')
})

returnToSearchBtn.addEventListener("click", () => {
  profileDisplay.classList.toggle('hidden');
  resultsContainer.classList.toggle('hidden');

  if (!profileOverview.classList.contains('hidden')) {
    profileOverview.classList.toggle('hidden')
  }

  if (!photoGalleryContainer.classList.contains('hidden')) {
    photoGalleryContainer.classList.toggle('hidden')
  }

  if (!videoGalleryContainer.classList.contains('hidden')) {
    videoGalleryContainer.classList.toggle('hidden')
  }
})

module.exports.renderProfile = renderProfile;