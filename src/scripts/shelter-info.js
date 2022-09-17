const fs = require('fs');

let shelters = [
  {
    name: "Bideawee",
    location: "410 E 38th St, New York, NY 10016",
    zipcode: 10016,
    website: "https://www.bideawee.org/"
  },
  {
    name: "Animal Haven",
    location: "200 Centre St, New York, NY 10013",
    zipcode: 10013,
    website: "https://animalhaven.org/"
  },
  {
    name: "ASPCA Adoption Center",
    location: "424 E 92nd St, New York, NY 10128",
    zipcode: 10128,
    website: "https://www.aspca.org/adopt-pet"
  },
  {
    name: "The Humane Society of New York",
    location: "306 E 59th St, New York, NY 10022",
    zipcode: 10022,
    website: "http://www.humanesocietyny.org/adoptions/"
  },
  {
    name: "Bobbi & the Strays",
    location: "80-36 Cooper Ave, Glendale, NY 11385",
    zipcode: 11385,
    website: "https://bobbiandthestrays.org/"
  }
]

const data = JSON.stringify(shelters, null, 4);

fs.writeFile('shelterInfo.json', data, (err) => {
  if (err) {
    throw err;
  }

  console.log("JSON shelter data is saved.");
});