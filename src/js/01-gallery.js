// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const items = [];
galleryItems.forEach((element) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = element.original;

  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.setAttribute("title", element.description);
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});