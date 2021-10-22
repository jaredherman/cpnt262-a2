// Import animals module
import { animals } from "./animals.js";

// Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
let outputHTML = "";
// Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.
const gallery = document.querySelector(".gallery");

// Loop through `animals` array using `array.forEach()`.
animals.forEach(function (animalItem) {
  //  <img src="${animalItem.path}" alt="Animal Lorem Picsum Images: ${animalItem.title}" width="${animalItem.width}" height="${animalItem.height}">
  //     <figcaption>
  //       <h1>${animalItem.title}</h1>
  //       <p>${animalItem.description}</p>
  //       <p>by: ${animalItem.credit}</p>
  //       <p> <a href=${animalItem.creditURL}>Photographer:</a></p>
  //       <a href=${animalItem.url}>Learn More</a>
  //     </figcaption>
  //   </figure>`;

  outputHTML += `<figure class="card">
      <img src="${animalItem.path}" alt="Animal Lorem Picsum Images: ${animalItem.title}" width="${animalItem.width}" height="${animalItem.height}">
      <figcaption>
        <h1>${animalItem.title}</h1>
        <p>${animalItem.description}</p>
        <p>by: ${animalItem.credit}</p>
        <p> <a href=${animalItem.creditURL}>Photographer:</a></p>
        <a href=${animalItem.url}>Learn More</a>
      </figcaption>
    </figure>`;
});

// Using element.innHTML (or other DOM manipulation technique), add the list of figure cards in `outputHTML` to the `gallery` variable you created earlier.
gallery.innerHTML = outputHTML;
