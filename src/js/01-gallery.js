import SimpleLightbox from 'simplelightbox';
import { galleryItems } from '../gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');



const markupGallery = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

galleryList.insertAdjacentHTML("afterbegin", markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(lightbox)