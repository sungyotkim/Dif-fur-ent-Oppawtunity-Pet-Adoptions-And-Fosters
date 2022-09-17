const selectBtns = document.querySelectorAll(".dropdown-top")
const speciesItems = document.querySelectorAll(".item-species");
const breedItems = document.querySelectorAll(".item-breed");
const ageItems = document.querySelectorAll(".item-age");
const breedItemsList = document.querySelector(".breed-items-list");

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
        let btnTexts = document.querySelectorAll(".dropdown-btn-text");

        if(ageChecked && ageChecked.length === 1) {
            btnTexts[2].innerText = `${ageChecked[0].innerText.split(' ')[0]}`
        } else if (ageChecked && ageChecked.length > 1) {
            btnTexts[2].innerText = "Multiple"
        } else {
            btnTexts[2].innerText = "Any"
        }
    })
})