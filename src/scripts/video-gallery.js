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

function populateMainVideo(pet, num = 0) {
  mainContainer.innerHTML = '';

  const vid = document.createElement('video');
  vid.setAttribute('autoplay', 'autoplay');
  vid.setAttribute('controls', 'controls');
  vid.src = `../../dist/data/pets/${pet.name.toLowerCase()}/videos/${pet.videos[num]}`
  mainContainer.appendChild(vid);
}

function populateReviews(pet, num = 0) {
  descriptionContainer.innerHTML = '';

  const review = document.createElement('h3');
  review.innerText = pet.reviews[num];

  descriptionContainer.appendChild(review);
}

function populateSubVideos(pet) {
  subContainer.innerHTML = '';

  pet.videos.forEach(video => {
    const card = document.createElement('div');
    card.setAttribute('class', 'video-card');
    const vid = document.createElement('video');
    vid.muted = true;
    vid.setAttribute('onmouseover', 'this.play()');
    vid.setAttribute('onmouseout', 'this.pause();this.currentTime=0;')
    vid.src = `../../dist/data/pets/${pet.name.toLowerCase()}/videos/${video}`;
    card.appendChild(vid);
    subContainer.appendChild(card);

    card.addEventListener("click", () => {
      let index = pet.videos.indexOf(video);
      populateMainVideo(pet, index);
      populateReviews(pet, index);
    })
  })
}

module.exports.reqPetInfo = reqPetInfo;
module.exports.populateMainVideo = populateMainVideo;
module.exports.populateReviews = populateReviews;
module.exports.populateSubVideos = populateSubVideos