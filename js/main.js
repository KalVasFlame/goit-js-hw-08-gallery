import itemList from './gallery-items.js'

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__content > .lightbox__image');
const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');



const createGalleryItem = (items) => {
  return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a
    class="gallery__link"
    href='${original}'
  >
  <img
  class="gallery__image"
  src='${preview}'
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </li>`}).join(' ')
};
const openModal = e => { 
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  lightboxRef.classList.add('is-open');
  lightboxImageRef.src = `${e.target.dataset.source}`

};
const closeModal = () => { 
  lightboxRef.classList.remove('is-open')
  lightboxImageRef.src = undefined;
};



const createMarkup = createGalleryItem(itemList);


galleryRef.insertAdjacentHTML('beforeend', createMarkup);
closeModalBtnRef.addEventListener('click', closeModal)
galleryRef.addEventListener('click', openModal)

      // Модальное окно для полноразмерного изображения
      // Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс is-open
    //  = itemList.original

    
// Подмена значения атрибута src элемента img.lightbox__image.