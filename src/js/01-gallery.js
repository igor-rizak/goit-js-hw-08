// Change code below this line

import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallerylink = document.querySelector('.gallery');
const markupGallery = galleryItemsMarkup(galleryItems);

gallerylink.insertAdjacentHTML("afterbegin", markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


function galleryItemsMarkup(items) {
  return items.map(({ preview, original, description } = items) => 
    `<li ><a class="gallery__item" 
    href="${original}">
    <img class="gallery__image"
    src="${preview}"
    alt="${description}" /></a></li>`
  ).join('');
};

console.log(lightbox);