import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGaleryBoxMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup)

function createGaleryBoxMarkup() {
    return galleryItems.map(
      ({ original, preview, description } = item) =>
            `<li class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a> 
        </li>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

console.log(lightbox);