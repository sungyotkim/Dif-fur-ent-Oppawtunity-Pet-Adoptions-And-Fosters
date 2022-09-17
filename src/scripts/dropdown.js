const selectBtns = document.querySelectorAll(".dropdown-top")
const items = document.querySelectorAll(".item");
const speciesItems = document.querySelectorAll(".item-species");
const breedItems = document.querySelectorAll(".item-breed");
const ageItems = document.querySelectorAll(".item-age");

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
        let btnTexts = document.querySelectorAll(".dropdown-btn-text");
    
        if(speciesChecked && speciesChecked.length === 1) {
            btnTexts[0].innerText = `${speciesChecked[0].innerText}`
        } else if (speciesChecked && speciesChecked.length > 1) {
            btnTexts[0].innerText = "Multiple"
        } else {
            btnTexts[0].innerText = "Any"
        }
    })
})

//selections for breed dropdown and appropriate fill in
breedItems.forEach(breedItem => {
    breedItem.addEventListener("click", () => {
        breedItem.classList.toggle("checked")
        let breedChecked = document.querySelectorAll(".item-breed.checked");
        let btnTexts = document.querySelectorAll(".dropdown-btn-text");

        if(breedChecked && breedChecked.length === 1) {
            btnTexts[1].innerText = `${breedChecked[0].innerText}`
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
        let btnTexts = document.querySelectorAll(".dropdown-btn-text");

        if(ageChecked && ageChecked.length === 1) {
            btnTexts[2].innerText = `${ageChecked[0].innerText}`
        } else if (ageChecked && ageChecked.length > 1) {
            btnTexts[2].innerText = "Multiple"
        } else {
            btnTexts[2].innerText = "Any"
        }
    })
})