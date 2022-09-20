const petsUrl = '../../dist/data/petInfo.json';
const mainContainer = document.querySelector('.main-video-container');
const descriptionContainer = document.querySelector('.video-description-container');
const subContainer = document.querySelector('.sub-video-container');

function reqPetInfo(profilePet) {
  fetch(petsUrl)
        .then(res => res.json())
        .then(data => {
          data.forEach(pet => {
            if (pet.name === profilePet) {
              populateMainVideo(pet);
              populateReviews(pet);
              populateSubVideos(pet);
            }
          })
        })
        .catch(error => {
            console.log(error)
        }) 
}

reqPetInfo('Nara');

function populateMainVideo(pet, num = 0) {
  mainContainer.innerHTML = '';

  const video = document.createElement('video');
  video.setAttribute('autoplay', 'autoplay');
  video.setAttribute('controls', 'controls');
  video.src = `../../dist/data/pets/${pet.name.toLowerCase()}/videos/${pet.videos[num]}`
  mainContainer.appendChild(video);
}

function populateReviews(pet, num = 0) {
  descriptionContainer.innerHTML = '';

  const review = document.createElement('h3');
  review.innerText = pet.reviews[num];

  descriptionContainer.appendChild(review);
}

function populateSubVideos(pet) {

}
