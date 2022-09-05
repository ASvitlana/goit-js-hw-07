import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryItemsEl(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryItemsEl(galleryItems) {
    return galleryItems.map(({ preview,  original}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="Image description"
                />
            </a>
        </div>
        `;
    })
    .join('');
}

// galleryContainer.addEventListener('click', (event) => {
//     event.preventDefault();
    
//     if(event.target.nodeName !== 'IMG') {
//         return;
//     };
    
//     const selectedImage = event.target.getAttribute('data-source');

//     const instance = basicLightbox.create(`
//         <img src="${selectedImage}" width = '800'>
//     `);

//     instance.show();


//     galleryContainer.addEventListener('keydown', event => {
// 		if (event.key === 'Escape') {
// 			instance.close();
// 		}
// 	})
// } );

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    
    if(event.target.nodeName !== 'IMG') {
        return;
    };
    
    const selectedImage = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`
        <img src="${selectedImage}" width = '800'>`, {
            onShow: () => {
                document.querySelector(".gallery");
                document.addEventListener('keydown', onEscape);
            },
            onClose: () => {
                document.querySelector(".gallery");
                document.removeEventListener("keyup", onEscape);
            }  
        }
    );

    function onEscape(event) {
		if (event.key === 'Escape') {
			instance.close();
		}
    }
    
    instance.show();
} ;

