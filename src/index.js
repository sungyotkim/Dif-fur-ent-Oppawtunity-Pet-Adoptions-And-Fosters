document.addEventListener("DOMContentLoaded", e => {
  const petsUrl = './dist/data/petInfo.json'
  const searchResult = require('./scripts/search-result');
  const searchBtn = document.querySelector(".search-button");
  const overviewBtn = document.querySelector('.overview-btn');
  const photoGalleryBtn = document.querySelector('.photo-gallery-btn');
  const videoGalleryBtn = document.querySelector('.video-gallery-btn');
  const speechBubble = document.querySelector('.speech-bubble');
  const profile = require('./scripts/profile');
  const resultsContainer = document.querySelector(".container-results");
  const landingBrowseBtn = document.querySelector(".landing-browse-btn");
  const mainContainer = document.querySelector('.container');
  const landing = document.querySelector('.landing');
  const home = document.querySelector('#home-button');
  const featuredContainer = document.querySelector(".featured-container");
  const searchResultsContainer = document.querySelector(".container-results");
  const profileDisplayContainer = document.querySelector(".profile-display");
  const firstText = document.querySelector("#first");
  const secondText = document.querySelector('#second');
  let infoIcon = document.querySelector('.info-icon');
  const mainAboutBtn = document.querySelector('.main-about-btn');
  const underNavContainer = document.querySelector('.under-nav');
  const aboutContainer = document.querySelector('.about-container');
  const landingAboutBtn = document.querySelector('.landing-about-btn');
  
  //variables not used but need to render
  const container = document.querySelector('.container-center')
  const dropdown = require('./scripts/dropdown');
  const featured = require('./scripts/featured');

  searchBtn.addEventListener("click", () => {
    const btnTexts = document.querySelectorAll(".dropdown-btn-text");

    let species = btnTexts[0].innerText;
    function getPets(url) {
      return fetch(url)
        .then(response => {
          return response.json().then(data => {
            return data;
          })
          .catch(err => {
            console.log(err)
          })
        })
    }

    function getFilteredPets() {
      let breeds = [];
      let breedChecked = document.querySelectorAll(".item-breed.checked");
      let ages = [];
      document.querySelectorAll(".item-age.checked").forEach(age => ages.push(age.innerText.split(' ')[0]))
      let ageRange = [];
      
      function ageRangeFinder() {
        let youngAges = ['1M', '2M', '3M', '4M', '5M', '6M', '7M', '8M', '9M', '10M', '11M'];
        let teenAges = ['1Y', '2Y'];
        let adultAges = ['3Y', '4Y', '5Y', '6Y', '7Y'];
        let seniorAges = ['8Y', '9Y', '10Y', '11Y', '12Y', '13Y', '14Y', '15Y', '16Y', '17Y', '18Y', '19Y', '20Y', '21Y', '22Y', '23Y', '24Y', '25Y'];
        let ageArr = [youngAges, teenAges, adultAges, seniorAges];
        let categories = ['Young', 'Teen', 'Adult', 'Senior'];

        for (let i = 0; i < categories.length; i++) {
          if (ages.includes(categories[i])) {
            ageRange.push(ageArr[i])
          }
        }
      }
      
      getPets(petsUrl).then(pets => {
        breedChecked.forEach(breedItem => {
              breeds.push(breedItem.innerText);
        })
        
        ageRangeFinder();

        let filtered = searchResult.filterSpecies(pets, species);
        filtered = searchResult.filterBreed(filtered, breeds);
        filtered = searchResult.filterAge(filtered, ageRange.flat());
        searchResult.cardMaker(filtered);
      })

    };

    getFilteredPets();
  })

  const overviewContainer = document.querySelector('.profile-overview-container');
  const photoGalleryContainer = document.querySelector('.photo-gallery-container');
  const videoGalleryContainer = document.querySelector('.video-gallery-container');
  overviewBtn.addEventListener("click", () => {
    if (overviewContainer.classList.contains("hidden")) {
      overviewContainer.classList.toggle("hidden");
    }
    if (!photoGalleryContainer.classList.contains("hidden")) {
      photoGalleryContainer.classList.toggle("hidden");
    }
    if (!videoGalleryContainer.classList.contains("hidden")) {
      videoGalleryContainer.classList.toggle("hidden")
    }
    profileBtnAnimation(overviewBtn)
  })

  photoGalleryBtn.addEventListener("click", () => {
    if (photoGalleryContainer.classList.contains("hidden")) {
      photoGalleryContainer.classList.toggle("hidden");
    }
    if (!overviewContainer.classList.contains("hidden")) {
      overviewContainer.classList.toggle("hidden");
    }
    if (!videoGalleryContainer.classList.contains("hidden")) {
      videoGalleryContainer.classList.toggle("hidden")
    }
    profileBtnAnimation(photoGalleryBtn)
  })

  videoGalleryBtn.addEventListener("click", () => {
    if (videoGalleryContainer.classList.contains("hidden")) {
      videoGalleryContainer.classList.toggle("hidden");
    }
    if (!overviewContainer.classList.contains("hidden")) {
      overviewContainer.classList.toggle("hidden");
    }
    if (!photoGalleryContainer.classList.contains("hidden")) {
      photoGalleryContainer.classList.toggle("hidden");
    }
    profileBtnAnimation(videoGalleryBtn)
  })

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

  speechBubble.addEventListener("click", () => {
    let petName = document.querySelector('#pet-info');
    let petInfo = {name: petName.innerText};
    resultsContainer.classList.toggle('hidden');
    profile.renderProfile(petInfo);
  })

  speechBubble.style.backgroundImage='url(./dist/assets/speech-img.png)'

  landingBrowseBtn.addEventListener("click", () => {
    if (mainContainer.classList.contains('hidden')) {
      mainContainer.classList.toggle('hidden');
    }
    if (!landing.classList.contains('hidden')) {
      landing.classList.toggle('hidden')
    }
  })

  landingAboutBtn.addEventListener("click", () => {
    if (!landing.classList.contains('hidden')) {
      landing.classList.toggle('hidden')
    }

    if (mainContainer.classList.contains('hidden')) {
      mainContainer.classList.toggle('hidden');
    }

    if (aboutContainer.classList.contains('hidden')) {
      aboutContainer.classList.toggle('hidden');
    }

    displayAboutPageAnimations()
  })

  home.addEventListener("click", () => {
    if (mainContainer.classList.contains('hidden')) {
      mainContainer.classList.toggle('hidden');
    }

    if (featuredContainer.classList.contains("hidden")) {
      featuredContainer.classList.toggle("hidden")
    }

    if (underNavContainer.classList.contains("hidden")) {
      underNavContainer.classList.toggle("hidden")
    }

    if (!landing.classList.contains('hidden')) {
      landing.classList.toggle('hidden')
    }

    if (!overviewContainer.classList.contains("hidden")) {
      overviewContainer.classList.toggle("hidden");
    }

    if (!photoGalleryContainer.classList.contains("hidden")) {
      photoGalleryContainer.classList.toggle("hidden");
    }

    if (!videoGalleryContainer.classList.contains("hidden")) {
      videoGalleryContainer.classList.toggle("hidden")
    }

    if (!searchResultsContainer.classList.contains("hidden")) {
      searchResultsContainer.classList.toggle("hidden")
    }

    if (!profileDisplayContainer.classList.contains("hidden")) {
      profileDisplayContainer.classList.toggle("hidden")
    }

    if (!aboutContainer.classList.contains("hidden")) {
      aboutContainer.classList.toggle("hidden")
    }
  })

  function displayAboutPageAnimations() {
    if (!infoIcon.classList.contains('hidden')) {
      infoIcon.classList.toggle('hidden')
    }

    firstText.innerText = '';
    secondText.innerText = '';
    textCreator();

    let firstPhrase = 'About 6.3 million dogs and cats enter animal shelters in the US every year...';
    let secondPhrase = 'But only about 4.1 million dogs and cats are adopted annually.';
    let firstLength = firstPhrase.length;
    let secondLength = secondPhrase.length;
    
    function textCreator() {
      let text;
      let forwards = true;
      let offset = 0;
      let skipCount = 0;
      let texter = setInterval(() => {

        if (forwards) {
          if (offset >= firstLength) {
            skipCount++;
          }
        } 

        text = firstPhrase.substr(0, offset);
        if (skipCount === 0) {
          if (forwards) {
            offset++;
          } 
        }
        firstText.innerText = text;

        if (text.length === firstLength) {
          clearInterval(texter);
          textCreator2();
        }
      }, 50);
    }

    function textCreator2() {
      let text;
      let forwards = true;
      let offset = 0;
      let skipCount = 0;
      let texter = setInterval(() => {
        if (forwards) {
          if (offset >= secondLength) {
            skipCount++;
          }
        } 

        text = secondPhrase.substr(0, offset);
        if (skipCount === 0) {
          if (forwards) {
            offset++;
          } 
        }
        secondText.innerText = text;

        if (text.length === secondLength) {
          clearInterval(texter);
          if (infoIcon.classList.contains('hidden')) {
            infoIcon.classList.toggle('hidden')
          }
        }
      }, 50);
    }

  }

  mainAboutBtn.addEventListener("click", () => {
    if (!featuredContainer.classList.contains("hidden")) {
      featuredContainer.classList.toggle("hidden")
    }

    if (!landing.classList.contains('hidden')) {
      landing.classList.toggle('hidden')
    }

    if (!overviewContainer.classList.contains("hidden")) {
      overviewContainer.classList.toggle("hidden");
    }

    if (!photoGalleryContainer.classList.contains("hidden")) {
      photoGalleryContainer.classList.toggle("hidden");
    }

    if (!videoGalleryContainer.classList.contains("hidden")) {
      videoGalleryContainer.classList.toggle("hidden")
    }

    if (!searchResultsContainer.classList.contains("hidden")) {
      searchResultsContainer.classList.toggle("hidden")
    }

    if (!profileDisplayContainer.classList.contains("hidden")) {
      profileDisplayContainer.classList.toggle("hidden")
    }

    if (!underNavContainer.classList.contains("hidden")) {
      underNavContainer.classList.toggle("hidden")
    }

    if (aboutContainer.classList.contains("hidden")) {
      aboutContainer.classList.toggle("hidden")
    }

    displayAboutPageAnimations()
  })
});
