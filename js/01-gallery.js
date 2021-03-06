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
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}" >
        <img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}">
        </a> 
        </div>       
        `
    }).join('');
}

let modalInstanse;

// const galleryItem = document.querySelector(".gallery__item");

galleryEl.addEventListener("click", cb);
function cb(e) {
    e.preventDefault();
    console.log(e.target);
    const dataOrigin = e.target.dataset.source;
    console.log(dataOrigin);

    if (dataOrigin === undefined) { return };

    modalInstanse = basicLightbox.create(`
		<img width="1400" height="900" src="${dataOrigin}">
	`);
    modalInstanse.show();

    document.addEventListener('keydown', onEscPress);

}

debugger;

const onEscPress = function (event) {
    const key = event.key; // const {key} = event; in ES6+
    if (key === "Escape") {
        modalInstanse.close();
        document.removeEventListener('keydown', onEscPress);
    }
};








