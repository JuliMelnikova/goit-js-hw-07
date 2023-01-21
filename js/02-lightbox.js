import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryEl = document.querySelector('.gallery');

const galleryImages = galleryItems.map(imgOptions => {
    return `
            <a class="gallery__item" href="${imgOptions.original}">
                <img
                    class="gallery__image"
                    src="${imgOptions.preview}"
                    alt="${imgOptions.description}"
                >
            </a>
    `;
}).join('');

galleryEl.innerHTML = galleryImages;


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionPosition: 'bottom', 
    captionDelay: 250, 
    // animationSpeed: 10,
    // fadeSpeed: 100
});