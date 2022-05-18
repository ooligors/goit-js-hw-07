import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkUp(galleryItems))

function createGalleryMarkUp(galleryItems) {
    return galleryItems.map(({ preview
        , original
        , description
    }) => {
        return `<li><a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`}).join('');
}


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt"
});




