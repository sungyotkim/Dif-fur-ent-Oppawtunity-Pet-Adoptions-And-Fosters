const selectBtns = document.querySelectorAll(".dropdown-top")
const speciesItems = document.querySelectorAll(".item-species");
const breedItems = document.querySelectorAll(".item-breed");
const ageItems = document.querySelectorAll(".item-age");
const btn = document.querySelector(".search-button");
const featuredContainer = document.querySelector(".featured-container");
const resultsContainer = document.querySelector(".container-results");
const btnTexts = document.querySelectorAll(".dropdown-btn-text");
const profileDisplay = document.querySelector('.profile-display');
const profileOverview = document.querySelector('.profile-overview-container');
const profileVideo = document.querySelector('.video-gallery-container');
const profilePhoto = document.querySelector('.photo-gallery-container');

//toggles for all dropdowns
selectBtns.forEach(selectBtn => {
    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    })
})

//selections for species dropdown and appropriate fill in
speciesItems.forEach(speciesItem => {
    speciesItem.addEventListener("click", () => {
        speciesItem.classList.toggle("checked")
        let speciesChecked = document.querySelectorAll(".item-species.checked");
    
        if(speciesChecked && speciesChecked.length === 1) {
            btnTexts[0].innerText = `${speciesChecked[0].innerText}`;
            let hideList = speciesChecked[0].innerText === 'Canine' ?
            document.querySelectorAll('.Feline') :
            document.querySelectorAll('.Canine');
            hideList.forEach(li => {
                if (li.classList.contains("checked")) {
                    li.classList.toggle("checked");
                    let breedChecked = document.querySelectorAll(".item-breed.checked");
                    if(breedChecked && breedChecked.length === 1) {
                        btnTexts[1].innerText = `${breedChecked[0].innerText}`;
                    } else if (breedChecked && breedChecked.length > 1) {
                        btnTexts[1].innerText = "Multiple"
                    } else {
                        btnTexts[1].innerText = "Any"
                    }
                }
                li.setAttribute("style", "display: none")
            })
            addSearchPicture(speciesChecked[0].innerText)
        } else if (speciesChecked && speciesChecked.length > 1) {
            btnTexts[0].innerText = "Multiple";
            let showList1 = document.querySelectorAll(`.Canine`);
            let showList2 = document.querySelectorAll(`.Feline`);
            showList1.forEach(li => {
                li.removeAttribute("style")
            })
            showList2.forEach(li => {
                li.removeAttribute("style")
            })
            addSearchPicture('catdogcatdog');
        } else {
            btnTexts[0].innerText = "Any";
            let showList1 = document.querySelectorAll(`.Canine`);
            let showList2 = document.querySelectorAll(`.Feline`);
            showList1.forEach(li => {
                li.removeAttribute("style")
            })
            showList2.forEach(li => {
                li.removeAttribute("style")
            })
            addSearchPicture();
        }
    })
})

//selections for breed dropdown and appropriate fill in
breedItems.forEach(breedItem => {
    breedItem.addEventListener("click", () => {
        breedItem.classList.toggle("checked")
        let breedChecked = document.querySelectorAll(".item-breed.checked");

        if(breedChecked && breedChecked.length === 1) {
            let felines = ['American Short Hair', 'Domestic Medium Hair', 'Domestic Short Hair', 'Exotic Short Hair']
            if (felines.includes(breedChecked[0].innerText)) {
                let letters = breedChecked[0].innerText.split(' ').map(word => {
                    return word[0]
                }).join("")
                btnTexts[1].innerText = `${letters}`;
            } else {
                btnTexts[1].innerText = `${breedChecked[0].innerText}`;
            }
        } else if (breedChecked && breedChecked.length > 1) {
            btnTexts[1].innerText = "Multiple"
        } else {
            btnTexts[1].innerText = "Any"
        }
    })
})

//selections for age dropdown and appropriate fill in
ageItems.forEach(ageItem => {
    ageItem.addEventListener("click", () => {
        ageItem.classList.toggle("checked")
        let ageChecked = document.querySelectorAll(".item-age.checked");

        if(ageChecked && ageChecked.length === 1) {
            btnTexts[2].innerText = `${ageChecked[0].innerText.split(' ')[0]}`
        } else if (ageChecked && ageChecked.length > 1) {
            btnTexts[2].innerText = "Multiple"
        } else {
            btnTexts[2].innerText = "Any"
        }
    })
})

function addSearchPicture(name="catdog") {
    if (btn.childNodes.length > 2) {
        btn.removeChild(btn.lastChild)
    }
    const div = document.createElement('div');
    const pic = document.createElement('img');
    pic.src = `../../dist/assets/${name}.png`;
    pic.setAttribute('height', "80rem");
    pic.setAttribute('class', 'search-current-photo');
    div.appendChild(pic);
    div.setAttribute('class', 'search-photo')
    btn.append(div)
}

addSearchPicture();

btn.addEventListener("click", () => {
    if (!featuredContainer.classList.contains('hidden')) {
        featuredContainer.classList.toggle('hidden')
    }

    if (!profileDisplay.classList.contains('hidden')) {
        profileDisplay.classList.toggle('hidden');
    }

    if (!profilePhoto.classList.contains("hidden")) {
        profilePhoto.classList.toggle("hidden");
    }
    if (!profileOverview.classList.contains("hidden")) {
        profileOverview.classList.toggle("hidden");
    }
    if (!profileVideo.classList.contains("hidden")) {
        profileVideo.classList.toggle("hidden")
    }

    if (resultsContainer.classList.contains('hidden')) {
        resultsContainer.classList.toggle('hidden')
    }

    selectBtns.forEach(selectBtn => {
        if (selectBtn.classList.contains("open")) {
            selectBtn.classList.toggle("open");
        }
    })
})