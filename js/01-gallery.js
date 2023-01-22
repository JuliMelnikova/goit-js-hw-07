import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryImages = galleryItems.map(imgOptions => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href="${imgOptions.original}">
                <img
                    class="gallery__image"
                    src="${imgOptions.preview}"
                    data-source="large-image.jpg"
                    alt="${imgOptions.description}"
                >
            </a>
        </div>
    `;
}).join('');

galleryEl.innerHTML = galleryImages;

galleryEl.addEventListener('click', (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(
        `<img src="${event.target.src}">
    `,
    
    {
        onShow: (instance) => {
            document.addEventListener("keydown", onCloseModal);
        },
        onClose: (instance) => {
            document.removeEventListener("keydown", onCloseModal);
        },
        }
    );
    instance.show();

    function onCloseModal(e) {
        console.log('ESCAPE', e);
        if (e.code === 'Escape') {
        instance.close();
        }
    }
    }
);
    
/*
// 	 * Prevents the lightbox from closing when clicking its background.
// 	 */
// closable: true,
// /*
//  * One or more space separated classes to be added to the basicLightbox element.
//  */
// className: '',
// /*
//  * Function that gets executed before the lightbox will be shown.
//  * Returning false will prevent the lightbox from showing.
//  */
// onShow: (instance) => {},
// /*
//  * Function that gets executed before the lightbox closes.
//  * Returning false will prevent the lightbox from closing.
//  */
// onClose: (instance) => {}
// }