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

galleryEl.addEventListener("click", cb);
function cb(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(e.currentTarget);
    const dataOrigin = e.target.dataset.source;
    console.log(dataOrigin);
    modalInstanse = basicLightbox.create(`
		<img width="1400" height="900" src="${dataOrigin}">
	`);
    modalInstanse.show()

}


document.addEventListener('keydown', function (event) {
    const key = event.key; // const {key} = event; in ES6+
    if (key === "Escape" && modalInstanse.visible()) {
        modalInstanse.close();
    }
});




