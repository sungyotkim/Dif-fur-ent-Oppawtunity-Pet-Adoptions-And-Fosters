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
              if (pet.videos.length === 0) {
                populateNoVideos()
              } else {
                populateMainVideo(pet);
                populateReviews(pet);
                populateSubVideos(pet);
              }
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
  vid.setAttribute('class', 'main-video');
  vid.setAttribute('controls', 'controls');
  vid.src = `../../dist/data/pets/${pet.name.toLowerCase()}/videos/${pet.videos[num]}`
  mainContainer.appendChild(vid);
}

function populateReviews(pet, num = 0) {
  descriptionContainer.innerHTML = '';

  const title = document.createElement('h2');
  title.innerText = 'Uploader Comments:'
  const review = document.createElement('h3');
  review.innerText = pet.reviews[num];

  descriptionContainer.appendChild(title);
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

function populateNoVideos() {
  mainContainer.innerHTML = '';
  descriptionContainer.innerHTML = '';
  subContainer.innerHTML = '';
  let message = document.createElement('div');
  message.innerText = 'Sorry, I currently have no videos. If I caught your interest anyway, please adopt me! Otherwise, consider fostering me or visit me and upload socialization videos to help me get adopted! Thank you for visiting me, hope to see you soon!';
  message.setAttribute('class', 'vid-message');
  mainContainer.appendChild(message);
}

module.exports.reqPetInfo = reqPetInfo;
module.exports.populateMainVideo = populateMainVideo;
module.exports.populateReviews = populateReviews;
module.exports.populateSubVideos = populateSubVideos;