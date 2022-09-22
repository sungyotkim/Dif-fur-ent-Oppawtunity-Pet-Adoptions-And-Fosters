# Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Foster <img src="https://emoji.discadia.com/emojis/c6d92ad3-7d82-489a-aeda-09657c9a901a.gif" width="40">

![project-demo](https://github.com/sungyotkim/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/blob/main/github-assets/projectDemo.gif)

## [Link to live version](https://sungyotkim.github.io/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/) 

## Background - The Numbers and The Reasons:
Most people love animals, but animals may not be for everyone. While there are different ways one could obtain a pet of their own, adopting a pet is highly recommended as many animals are homeless and in need of a family. In fact, according to the ASPCA roughly **6.3 million** dogs and cats enter animal shelters in the US every year. Of those animals, about **4.1 million are adopted**. Sadly, roughly 900,000 shelter animals are euthanized due to a variety of reasons including declining health status and overpopulation of shelters.<br>
Although the rate of euthanization has [decreased considerably since 2011](https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender/pet-statistics#:~:text=Facts%20about%20U.S.%20Animal%20Shelters%3A&text=These%20are%20national%20estimates%3B%20the,and%203.2%20million%20are%20cats.) due to the increasing percentage of animal adoptions, [7-20% of those adopted pets](https://www.americanhumane.org/publication/keeping-pets-dogs-and-cats-in-homes-phase-ii-descriptive-study-of-post-adoption-retention-in-six-shelters-in-three-u-s-cities/) are unfortunately returned to the shelter. <br>
Example: an owner was interested in a calm, quiet dog and met Fido who was shy and quiet but friendly to the owner at the shelter. The owner felt they were a good match but after a few weeks at the new house, Fido started to feel comfortable and became more and more energetic and hyper. Unfortunately, the owner could not keep up with Fido's newfound energy. Side note: returning adopted animals back to the shelter **can happen and it is okay**. We want to be able to find the best home for these animals. But constant rehoming can be traumatic to both the adopter and the animal.

## Project Idea - A Potential Solution: <img src="https://emoji.discadia.com/emojis/ca01dfaa-46d8-4cd6-b7dd-4a32bedb92d1.gif" width="35">
In order to minimize the rate of adoption returns and to maximize the rates of adopting an animal the owner wishes to find, I wanted to create a webapp that encapsulates adoption, foster, and socialization information for a given pet. The objective is to capture the animal in a variety of environmental settings to better display realistic behavior for the user to see. By obtaining footage of the animal interacting with different volunteers during socialization or even during daily walks for dogs and of the animal in different foster environments, the user would be able to see how the dog behaves and interacts with other people and other animals that's more realistic to their real nature. <br>
Beyond visual information, an interactive review userface would be implemented to allow for visitors, volunteers, and fosterers to leave reviews describing their (hopefully positive) interactions with the pets to allow for a better up-to-date description of the animal. Potential adopters can then absorb this variety of data upfront and online before going and visiting the pet to filter the animals of interest with ease and comparing their in person interactions with the information on the animal's profile page to confirm whether or not they make a good pair. <br>
By allowing for a more unique online interaction with the animals, shelters would also experience a more efficient means of interacting with prospective adopters and ideally, face less rates of return. There will also be an option to request to foster these animals for people who are interested in fostering, but either unsure of adopting or only able to foster for a period of time. If possible, data from multiple shelters will be obtained thereby allowing users to see available animals from multiple shelters at one given place, saving them from the effort of navigating multiple websites to access such information.

## Technologies
- Vanilla JS
- HTML/CSS
- JQuery for sending forms with AJAX

## Development
**Filtering Search Results Snippet**
Simplifying the search algorithm implemented as much as possible, after fetching all pet data from the pet JSON file, the results displayed are filtered based on user input. Currently, the user is bale to filter by species, breed, and age. 

```javascript
function filterSpecies(pets, species) {
  if (species === 'Any' || species === 'Multiple') { return pets }

  let filtered = pets.filter(pet => {
    return pet.species === species
  })

  return filtered;
}

function filterBreed(pets, breed) {
  if (breed.length === 0) { return pets }

  let filtered = pets.filter(pet => {
    return breed.includes(pet.breed)
  })

  return filtered;
}

function filterAge(pets, ages) {
  if (ages.length === 0) { return pets } 

  let filtered = pets.filter(pet => {
    return ages.includes(pet.age);
  })

  return filtered;
}
```

Once the search results are displayed, users are able to filter the results further by choosing to view pets based on which shelters they are currently residing in. These shelters are organized in a chart via rows and by selecting a given row, the current filtered results are hidden/revealed appropriately. 

```javascript
row.addEventListener("click", () => {
      row.classList.toggle("checked");
      let rowsChecked = document.querySelectorAll(".shelter-row.checked");
      let cards = resultsContainer.querySelectorAll('.result-card');
      
      if (rowsChecked.length > 0) {
        let sheltersChecked = [];
        rowsChecked.forEach(row => {
          sheltersChecked.push(row.innerText)
        })
        
        cards.forEach(card => {
          if (!sheltersChecked.includes(card.lastChild.innerText)) {
            card.setAttribute('style', 'display: none;')
          } else {
            card.setAttribute('style', 'display: "";')
          }
        })
      } else {
        cards.forEach(card => {
          card.setAttribute('style', 'display: "";')
        })
      }
    })
```
## Instructions
- From the landing page, you may opt to see the about page for the project or choose to browse the project. Regardless of which option you choose, you will have the ability to access the other.
- The featured page includes 5 random interactive photos of the animals available on the site. You may click on any picture to view their profile page.
![featured-screen-shot](https://github.com/sungyotkim/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/blob/main/github-assets/featuredPageSample2.PNG)

- A search bar exists on every page minus the landing and the about page. You may filter the animals on the site using the dropdown items available. As this is a small scale project, only NYC animals/shelters have been included. You may leave the city input blank as it will default to NYC.
- From the search results page, you can continue to filter results by shelter or click on any pet to see their profile page. You may also click the speech bubble above the randomly generated featured video to see that animal's profile as well.
![search-results-screen-shot](https://github.com/sungyotkim/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/blob/main/github-assets/searchResultsSample.PNG)

- The profile page allows users to view the overview, all photos, and all videos (if any). Toggle the view you want!
![profile-page-screen-shot](https://github.com/sungyotkim/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/blob/main/github-assets/profileSample.PNG)
- For the photo gallery, simply click on the photo you wish to see and it will populate it on the larger view screen. The selected photo has a small border highlight.
- For the video gallery, simply click on the smaller videos on the right to render the video on the larger screeen. Its associated review/comment will be populated underneath the main video.
![photo-gallery-screen-shot](https://github.com/sungyotkim/Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Fosters/blob/main/github-assets/photoGallerySample.PNG)


## TODO's / Future Features
- Linking to a shelter's API to pull in data/images/videos of actual animals available for adoption/foster/visits.
- Allowing connection between html forms to shelters to enable requests to adopt/shelter/visit a given animal.
- Pulling live data from shelters to populate adoption goals with live numbers, rather than simulated numbers.
