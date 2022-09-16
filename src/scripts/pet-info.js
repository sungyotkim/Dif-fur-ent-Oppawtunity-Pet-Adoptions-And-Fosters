const fs = require('fs');

let pets = [
  {
    name: "Bella",
    age: "4Y",
    gender: "F",
    species: "Canine",
    breed: "Dachshund",
    mix: true,
    mini: false, 
    colors: ["Brown", "Black"],
    shelter: "Animal Haven",
    photos: ["photo_1_bella.jpg", "photo_2_bella.jpg"],
    firstPhoto: "",
    videos: ["video_1_bella.mp4", "video_2_bella.mp4"],
    status: "Available for adoption",
    bio: "Rescued from Pennsylvania, Bella is a sweetheart who loves to play and loves to be a lap dog",
    characteristics: ["calm", "friendly", "treat motivated"],
    reviews: ["Enjoys being petted!", "Smart, obedient dog who works hard and loves treats"]
  },
  {
    name: "Buster",
    age: "8M",
    gender: "M",
    species: "Canine",
    breed: "Dachshund",
    mix: true,
    mini: true,
    colors: ["Brown", "Black"],
    shelter: "ASPCA Adoption Center",
    photos: ["photo_1_buster.jpg", "photo_2_buster.jpg"],
    firstPhoto: "photo_0_buster.jpg",
    videos: [],
    status: "Currently being fostered",
    bio: "Adorable young puppy whose energy and confidence grows day by day with experience. Shy at first but will warm up to people given time.",
    characteristics: ["shy", "friendly"],
    reviews: []
  },
  {
    name: "Coby",
    age: "2Y",
    gender: "M",
    species: "Canine",
    breed: "Schnauzer",
    mix: false,
    mini: true,
    colors: ["Gray", "White"],
    shelter: "Bideawee",
    photos: ["photo_1_coby.jpg", "photo_2_coby.jpg"],
    firstPhoto: "photo_0_coby.jpg",
    videos: ["video_1_coby.mov", "video_2_coby.mov"],
    status: "Available for adoption",
    bio: "Coby, Cober, Coberdog, Coobs, is a dog of many nicknames obtained from a variety of fosters and volunteers. He's very outgoing and friendly towards people.",
    characteristics: ["outgoing", "energetic", "dog-friendly", "curious"],
    reviews: ["Curious boy who loves to sniff and explore his surroundings on walks. May eat foreign items off the floor, beware!", "Loves to play and can be very vocal during play. Very friendly! Would play again."]
  },
  {
    name: "Frankie",
    age: "1Y",
    gender: "F",
    species: "Canine",
    breed: "Bolognese",
    mix: true,
    mini: false,
    colors: ["White"],
    shelter: "The Humane Society of New York",
    photos: ["photo_1_frankie.JPG", "photo_2_frankie.HEIC", "photo_3_frankie.JPG", "photo_4_frankie.JPG"],
    firstPhoto: "",
    videos: ["video_1_frankie.MP4", "video_2_frankie.MP4"],
    status: "Available for adoption",
    bio: "Frankie is a friendly dog who loves being around people and other dogs! If you're looking for a friendly, outgoing dog and can handle youthful energy, she's a great match!",
    characteristics: ["outgoing", "energetic", "dog-friendly"],
    reviews: ["She's been here for less than a day and is already super excited and full of energy. Very happy dog who's a great match for anyone who isn't looking for a quiet, relaxed dog.", "An absolutely different dog following her surgery, she did not enjoy it very well and is a bit out of it. She was back to her energetic self the next day, however. Just be aware she may be different after a visit to the vet!"]
  },
  {
    name: "Gia",
    age: "2Y",
    gender: "F",
    species: "Feline",
    breed: "American Short Hair",
    mix: false,
    mini: false,
    colors: ["Black"],
    shelter: "Animal Haven",
    photos: ["photo_1_gia.jpg", "photo_2_gia.jpg"],
    firstPhoto: "photo_0_gia.jpg",
    videos: ["video_1_gia.mp4", "video_2_gia.mp4", "video_3_gia.mp4"],
    status: "Available for adoption",
    bio: "Gia is very shy, but very loving. She's not used to strangers and tends to hide away from them. When she's around people she's familiar with, however, she is very loving and wants attention sometimes and is playful at times.",
    characteristics: ["shy", "independent", "needs time to warm up", "dog-tolerant", "not-cat-friendly"],
    reviews: ["When she chooses to come to you, she really loves pets. She's not always in the mood, however!", "Absolutely obsessed with keeping herself clean!", "Her means of play may not be for everyone... Cat proof your important items before taking her in!"]
  },
  {
    name: "Jjimbbang",
    age: "3Y",
    gender: "M",
    species: "Canine",
    breed: "Shitzu",
    mix: false,
    mini: false,
    colors: ["White", "Beige"],
    shelter: "ASPCA Adoption Center",
    photos: ["photo_1_jjimbbang.jpg"],
    firstPhoto: "photo_0_jjimbbang.jpg",
    videos: ["video_1_jjimbbang.mp4", "video_2_jjimbbang.mp4"],
    status: "Currently being fostered",
    bio: "Jjimbang is super food and toy motivated. He will literally melt to the floor for belly rubs and growls when he's happy or excited.",
    characteristics: ["energetic", "vocal", "big eater"],
    reviews: ["As much as he loves to walk, there are times he would choose to ride instead.", "Happy boy whose behavior is sometimes unexplanable."]
  },
  {
    name: "Lena",
    age: "1Y",
    gender: "F",
    species: "Feline",
    breed: "Domestic Medium Hair",
    mix: false,
    mini: false,
    colors: ["Dilute Calico"],
    shelter: "Bideawee",
    photos: ["photo_1_lena.jpg", "photo_2_lena.jpg", "photo_3_lena.jpg", "photo_4_lena.jpg", "photo_5_lena.jpg", "photo_6_lena.jpg", "photo_7_lena.jpg"],
    firstPhoto: "photo_0_lena.jpg",
    videos: ["video_1_lena.mp4", "video_2_lena.mp4"],
    status: "Available for adoption",
    bio: "Lena is a shy-at-first cat who really loves to interact with people she likes. She loves attention and can be jealous of other companions receiving more love than her. She's very vocal and loves to eat and cares a lot about her appearance so you may see her groom herself often.",
    characteristics: ["vocal", "shy", "friendly", "dog-tolerant", "not-cat-friendly", "treat motivated", "big eater"],
    reviews: ["Matches the cat stereotype, loves boxes!", "She'll tolerate the brushing up until the point where she decides to attack the brush instead. Watch your hands!"]
  },
  {
    name: "Mochi",
    age: "6Y",
    gender: "F",
    species: "Feline",
    breed: "Exotic Short Hair",
    mix: false,
    mini: false,
    colors: ["Calico"],
    shelter: "The Humane Society of New York",
    photos: ["photo_1_mochi.JPG", "photo_2_mochi.jpg"],
    firstPhoto: "photo_0_mochi.JPG",
    videos: ["video_1_mochi.MOV", "video_2_mochi.MOV", "video_3_mochi.MOV"],
    status: "Currently being fostered",
    bio: "Mochi is a super chill, relaxed cat who really loves her pets. Great match for anyone looking for a low-energy companion!",
    characteristics: ["calm", "friendly", "cat-friendly", "not-dog-friendly"],
    reviews: ["Win her over with pets under her chin!", "Not the biggest fan of costumes, but still adorable!", "Loves to lazy around and unwind."]
  },
  {
    name: "Nara",
    age: "9Y",
    gender: "F",
    species: "Canine",
    breed: "Shitzu",
    mix: true,
    mini: false,
    colors: ["White", "Beige"],
    shelter: "Animal Haven",
    photos: ["photo_1_nara.jpeg", "photo_2_nara.jpeg", "photo_3_nara.jpg"],
    firstPhoto: "photo_0_nara.jpg",
    videos: ["video_1_nara.mp4", "video_2_nara.mp4"],
    status: "Available for adoption",
    bio: "Nara is a treat motivated friendly dog who loves people! She loves going on walks and loves to play, though she isn't great at fetch.",
    characteristics: ["vocal", "friendly", "dog-tolerant", "cat-tolerant", "treat motivated"],
    reviews: ["Really happy to see you when you come home and is quick to bring a toy over to play! She doesn't always come back with her toy, however.", "Loves her plushies but gets distracted by others easily!"]
  },
  {
    name: "Olaf",
    age: "8Y",
    gender: "M",
    species: "Feline",
    breed: "American Short Hair",
    mix: false,
    mini: false,
    colors: ["White"],
    shelter: "ASPCA Adoption Center",
    photos: ["photo_1_olaf.jpg", "photo_2_olaf.jpg", "photo_3_olaf.jpg"],
    firstPhoto: "",
    videos: ["video_1_olaf.mp4", "video_2_olaf.mp4"],
    status: "Available for adoption",
    bio: "Olaf loves people and loves to play and cuddle. Needs a lot of attention, however, and does not like other animals!",
    characteristics: ["friendly", "not-dog-friendly", "not-cat-friendly", "big eater"],
    reviews: ["He enjoys pets and loves to be carried", "Loves to be lazy and be pet all day"]
  },
  {
    name: "Politoed",
    age: "2Y",
    gender: "M",
    species: "Feline",
    breed: "Domestic Short Hair",
    mix: false,
    mini: false,
    colors: ["Tabby"],
    shelter: "Bideawee",
    photos: ["photo_1_politoed.jpg", "photo_2_politoed.jpg", "photo_3_politoed.jpg", "photo_4_politoed.jpg", "photo_5_politoed.jpg", "photo_6_politoed.jpg"],
    firstPhoto: "",
    videos: [],
    status: "Currently being fostered",
    bio: "Politoed is a polydactyl whose big paws are eye catching for some. He's very shy and likes to hide but will come and lay next to you once he feels comfortable. Very treat motivated.",
    characteristics: ["not-dog-friendly", "shy", "cat-tolerant", "treat motivated"],
    reviews: []
  },
  {
    name: "Remy",
    age: "9Y",
    gender: "M",
    species: "Canine",
    breed: "Shetland Sheepdog",
    mix: false,
    mini: false,
    colors: ["White", "Brown"],
    shelter: "The Humane Society of New York",
    photos: ["photo_1_remy.jpg", "photo_2_remy.jpg"],
    firstPhoto: "photo_0_remy.jpg",
    videos: ["video_1_remy.jpg", "video_2_remy.jpg", "video_3_remy.jpg", "video_4_remy.jpg"],
    status: "Currently being fostered",
    bio: "Remy is a friendly dog who is absolutely infuated and distracted by food. He loves to eat and play with great internal herding instinct. He may not be the brightest but he is obedient and is very treat motivated.",
    characteristics: ["friendly", "energetic", "treat motivated", "dog-friendly", "big eater", "treat motivated"],
    reviews: ["Loves to play fetch and won't stop until he gets the ball!", "He gets absolutely silly during play.", "His eyes are always on the food, even when next to the person he loves the most in the room.", "Does not care much for privacy and wants to be next to you"]
  },
  {
    name: "Triplets",
    age: "2M",
    gender: "F",
    species: "Feline",
    breed: "Domestic Short Hair",
    mix: false,
    mini: false,
    colors: ["Tabby"],
    shelter: "Animal Haven",
    photos: ["photo_1_triplets.jpg", "photo_2_triplets.jpg", "photo_3_triplets.jpg", "photo_4_triplets.jpg"],
    firstPhoto: "",
    videos: [],
    status: "Currently sick",
    bio: "These three cats have come to the shelter together and must leave together! They're bonded siblings who are shy and require each other for support. Scared but curious little kittens who need a lot of socializing and interaction!",
    characteristics: ["shy", "curious", "needs time to warm up", "bonded pairs"],
    reviews: []
  },
  {
    name: "Nova",
    age: "3Y",
    gender: "F",
    species: "Canine",
    breed: "Shiba Inu",
    mix: false,
    mini: false,
    colors: ["Black", "Beige", "White"],
    shelter: "Bobbi & the Strays",
    photos: ["photo_1_nova.jpg", "photo_2_nova.jpg", "photo_3_nova.jpg", "photo_4_nova.jpg", "photo_5_nova.jpg"],
    firstPhoto: "photo_0_nova.jpg",
    videos: [],
    status: "Currently sick",
    bio: "Nova is a shy at first dog who will bark at strangers but given time will warm up to people and ask for pets.",
    characteristics: ["shy", "vocal", "needs time to warm up", "not-dog-friendly", "not-cat-friendly"],
    reviews: []
  },
  {
    name: "Addison",
    age: "2Y",
    gender: "M",
    species: "Canine",
    breed: "Pitbull",
    mix: true,
    mini: false,
    colors: ["Black"],
    shelter: "Bobbi & the Strays",
    photos: ["photo_1_addison", "photo_2_addison", "photo_3_addison", "photo_4_addison", "photo_5_addison"],
    firstPhoto: "",
    videos: [],
    status: "Available for adoption",
    bio: "Addison is a confident, friendly dog who loves to go out on walks to release energy and enjoys treats. Will rest often at home.",
    characteristics: ["friendly", "dog-friendly", "not-cat-friendly", "energetic", "treat motivated"],
    reviews: []
  }
];

const data = JSON.stringify(pets, null, 4);

fs.writeFile('pet-info.json', data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON pet data is saved.")
})