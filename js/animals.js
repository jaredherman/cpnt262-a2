// Array of objects
// For each image object, store the following information:
// id - Unique identifier (number);
// title - Image heading (string);
// description - Image description (string: 10-25 words);
// width - Image width in pixels (number);
// height - Image height in pixels (number);
// pathURL - a local path to your image file(string);
// linkURL - 3rd party web page that the image links to (string; example: wikipedia entry relating to the image);
// credit - The photo credit for the image such as a person, company or website (string).
// creditURL - A link to the original photo, photographer's home page, license details, etc (string).
export const animals = [
  {
    id: 1,
    title: "Cute Puppy",
    description:
      "A puppy is a juvenile dog. Some puppies can weigh 1–1.5 kg (1-3 lb), while larger ones can weigh up to 7–11 kg (15-23 lb). All healthy puppies grow quickly after birth. A puppy's coat color may change as the puppy grows older",
    credit: "David Clarke",
    url: "https://unsplash.com/photos/sVtcRzphxbk",
    width: "350",
    height: "210",
    path: "./images/1-puppy.jpg",
    creditURL: "https://unsplash.com/@mancity17",
  },
  {
    id: 2,
    title: "Big Bear",
    description:
      " Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans.",
    credit: "mana5280",
    url: "https://unsplash.com/photos/rGPDLlMNFF4",
    width: "350",
    height: "233",
    path: "./images/2-Bear.jpg",
    creditURL: "https://unsplash.com/@mana5280",
  },
  {
    id: 3,
    title: "Dark Moose",
    description:
      "The moose (in North America) or elk (in Eurasia) (Alces alces) is a member of the New World deer subfamily  ",

    credit: "Shivam Kumar",
    url: "https://unsplash.com/photos/MVIqwQvkwG4",
    width: "350",
    height: "233",
    path: "./images/3-moose.jpg",
    creditURL: "https://unsplash.com/@krishnadigitalcolorphotostudio",
  },
  {
    id: 4,
    title: "Wild Coyote",
    description:
      " The coyote (Canis latrans) is a species of canine native to North America. It is smaller than its close relative, the wolf",

    credit: "Philipp Pliz",
    url: "https://unsplash.com/photos/QZ2EQuPpQJs",
    width: "350",
    height: "233",
    path: "./images/4-coyote.jpg",
    creditURL: "https://unsplash.com/@buchstabenhausen",
  },
  {
    id: 5,
    title: "Bengal Tiger",
    description:
      " The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera",

    credit: "Hans-Jurgen Mager",
    url: "https://unsplash.com/photos/Fbdr6gXJBVY",
    width: "263",
    height: "350",
    path: "./images/5-tiger.jpg",
    creditURL: "https://unsplash.com/@hansjurgen007",
  },
  {
    id: 6,
    title: "Siberian Husky",
    description:
      " A husky is a sled dog used in the polar regions. One can differentiate huskies from other dog types by their fast pulling-style.",

    credit: "Ugur Arpaci",
    url: "https://unsplash.com/photos/wOvSiqf9pZM",
    width: "350",
    height: "197",
    path: "./images/6-huskey.jpg",
    creditURL: "https://unsplash.com/@ugurarpaci",
  },
  {
    id: 7,
    title: "Wild Wolf",
    description:
      " The wolf (Canis lupus[a]), also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America.",

    credit: "Josh Felise",
    url: "https://unsplash.com/photos/mblYxasm0nk",
    width: "350",
    height: "222",
    path: "./images/7-wolf.jpg",
    creditURL: "https://unsplash.com/@jfelise",
  },
  {
    id: 8,
    title: "African Monkey",
    description:
      " Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians",

    credit: "Bob Brewer",
    url: "https://unsplash.com/photos/daC7ji1EMHM",
    width: "350",
    height: "233",
    path: "./images/8-monkey.jpg",
    creditURL: "https://unsplash.com/@brewbottle",
  },
  {
    id: 9,
    title: "Young Elk",
    description:
      " The elk (Cervus canadensis) is a large antlered mammal within the deer family.",

    credit: "rebecca johnston",
    url: "https://unsplash.com/photos/nuRYwOJryyk",
    width: "350",
    height: "233",
    path: "./images/9-elk.jpg",
    creditURL: "https://unsplash.com/@rebecca_jane",
  },
  {
    id: 10,
    title: "Cute Bulldog",
    description:
      " The Bulldog, also known as the English Bulldog or British Bulldog, is a medium-sized dog breed. It is a muscular, hefty dog with a wrinkled face ",

    credit: "Yamon Figurs",
    url: "https://unsplash.com/photos/2zlxFmByClI",
    width: "350",
    height: "233",
    path: "./images/10-bulldog.jpg",
    creditURL: "https://unsplash.com/@yamonf16",
  },
  {
    id: 11,
    title: "Hawk Bird",
    description:
      "The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others ",

    credit: "Delaney Van",
    url: "https://unsplash.com/photos/7rEvtDHWrF4",
    width: "350",
    height: "233",
    path: "./images/11-bird.jpg",
    creditURL: "https://unsplash.com/@delaneyvan",
  },
  {
    id: 12,
    title: "Small Pug",
    description:
      " The pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face and curled tail.",

    credit: "Matthew Henry",
    url: "https://unsplash.com/photos/U5rMrSI7Pn4",
    width: "350",
    height: "233",
    path: "./images/12-pug.jpg",
    creditURL: "https://unsplash.com/@matthewhenry",
  },
  {
    id: 13,
    title: "Big Cat",
    description:
      "The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family ",

    credit: "Samuel Scrimshaw",
    url: "https://unsplash.com/photos/sseiVD2XsOk",
    width: "350",
    height: "233",
    path: "./images/13-cat.jpg",
    creditURL: "https://unsplash.com/@samscrim",
  },
  {
    id: 14,
    title: "Giant Walrus",
    description:
      " The walrus (Odobenus rosmarus) is a large flippered marine mammal with a discontinuous distribution ",

    credit: "Jay Ruzesky",
    url: "https://unsplash.com/photos/h13Y8vyIXNU",
    width: "350",
    height: "250",
    path: "./images/14-walrus.jpg",
    creditURL: "https://unsplash.com/@wolsenburg",
  },
];
