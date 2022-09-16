# Dif-fur-ent-Oppawtunity-Pet-Adoptions-And-Foster <img src="https://emoji.discadia.com/emojis/c6d92ad3-7d82-489a-aeda-09657c9a901a.gif" width="40">

## Background - The Numbers and The Reasons:
Most people love animals, but animals may not be for everyone. While there are different ways one could obtain a pet of their own, adopting a pet is highly recommended as many animals are homeless and in need of a family. In fact, according to the ASPCA roughly **6.3 million** dogs and cats enter animal shelters in the US every year. Of those animals, about **4.1 million are adopted**. Sadly, roughly 900,000 shelter animals are euthanized due to a variety of reasons including declining health status and overpopulation of shelters. It's important to note that the rate of euthanization has [decreased considerably since 2011](https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender/pet-statistics#:~:text=Facts%20about%20U.S.%20Animal%20Shelters%3A&text=These%20are%20national%20estimates%3B%20the,and%203.2%20million%20are%20cats.) which can be partially attribtued to increasing percentages of animals adopted and returned to their owners. <br>
Of the pets that are adopted, however, roughly [7-20% are returned to the shelter](https://www.americanhumane.org/publication/keeping-pets-dogs-and-cats-in-homes-phase-ii-descriptive-study-of-post-adoption-retention-in-six-shelters-in-three-u-s-cities/). These numbers can partially vary depending on the shelter definition of returns. While unsuccessful adoptions can't be avoided as non-perfect matches can occur, some contributing factors to returning pets after adoptions are unrealistic/wrong expectations and behavioral issues of the animal. <br>
For example, an owner was interested in a calm, quiet dog and met Fido who was shy and quiet but friendly to the owner at the shelter. The owner felt they were a good match but after a few weeks at the new house, Fido started to feel comfortable and became more and more energetic and hyper. Unfortunately, the owner could not keep up with Fido's newfound energy. Side note: returning adopted animals back to the shelter **can happen and it is okay**. We want to be able to find the best home for these animals. But constant rehoming can be traumatic to both the adopter and the animal.

## Project Idea - A Potential Solution: <img src="https://emoji.discadia.com/emojis/ca01dfaa-46d8-4cd6-b7dd-4a32bedb92d1.gif" width="35">
In order to minimize the rate of adoption returns and to maximize the rates of adopting an animal the owner wishes to find, I wanted to create a webapp that encapsulates adoption, foster, and socialization information for a given pet. The objective is to capture the animal in a variety of environmental settings to better display realistic behavior for the user to see. By obtaining footage of the animal interacting with different volunteers during socialization or even during daily walks for dogs and of the animal in different foster environments, the user would be able to see how the dog behaves and interacts with other people and other animals that's more realistic to their real nature. <br>
Beyond visual information, an interactive review userface would be implemented to allow for visitors, volunteers, and fosterers to leave reviews describing their (hopefully positive) interactions with the pets to allow for a better up-to-date description of the animal. Potential adopters can then absorb this variety of data upfront and online before going and visiting the pet to filter the animals of interest with ease and comparing their in person interactions with the information on the animal's profile page to confirm whether or not they make a good pair. <br>
By allowing for a more unique online interaction with the animals, shelters would also experience a more efficient means of interacting with prospective adopters and ideally, face less rates of return. There will also be an option to request to foster these animals for people who are interested in fostering, but either unsure of adopting or only able to foster for a period of time. If possible, data from multiple shelters will be obtained thereby allowing users to see available animals from multiple shelters at one given place, saving them from the effort of navigating multiple websites to access such information.

## Functionality & MVPs
In Dif-fur-ent Oppawtunity, users will be able to: <br>
- [ ] Search through animals available for adoption/fostering from different shelters
- [ ] Filter their search result by species, breed, gender, age, characteristics, and location
- [ ] View individual animals profiles to see relevant pictures, bio, and videos of the animal
- [ ] Request to foster the animal
- [ ] Request to adopt the animal
- [ ] See the shelter's requirements to foster/adopt the animal

In addition, this project will include:

- [x] A README explaining the project
- [ ] An about page detailing additional background information resulting to the creation of this project
- [ ] Credits to relevant sources

## Wireframes
##### Main Page: 
<img src="./github-assets/main-page-wireframe.JPG" width="600" alt="main-page-wireframe">

##### Animal Profile Page:
<img src="./github-assets/profile-page-wireframe.JPG" width="600" alt="profile-page-wireframe">

## Technologies, Libraries, APIs
- Dog API for dog image placeholders: https://dog.ceo/dog-api/
- Cat API for cat image placeholders: https://thecatapi.com/
- Express.js backend holding information of animals to pull from
- D3 library for rendering charts in the about page

## Implementation Timeline
- Friday Afternoon: Complete main display page set up
- Weekend: Research APIs, how to use express.js, possibly build out backend, finish set up
- Monday: Populate index page, set sorting ability
- Tuesday: Populate profile pages for animals
- Wednesday: Set up shelter pages, work on html/css
- Thursday Morning: Test functionality, debug kinks
