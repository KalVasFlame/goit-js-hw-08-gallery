import itemList from './gallery-items.js'

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__content > .lightbox__image');
const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');
const lightboxOverlayRef = document.querySelector('.js-lightbox > .lightbox__overlay');
// const bodyRef = document.querySelector('body');

const createGalleryItem = items => {
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
  lightboxImageRef.src = e.target.dataset.source

};
const closeModal = () => { 
  lightboxRef.classList.remove('is-open')
  lightboxImageRef.src = undefined;
};

// const escCloseModal = e => { 
//   if (e.keyCode !== 27) {
//   return
//   }
//   lightboxRef.classList.remove('is-open')
//   lightboxImageRef.src = undefined;
// }

const createMarkup = createGalleryItem(itemList);

// document.addEventListener('keypress', escCloseModal)
galleryRef.insertAdjacentHTML('beforeend', createMarkup);
galleryRef.addEventListener('click', openModal)
closeModalBtnRef.addEventListener('click', closeModal)
lightboxOverlayRef.addEventListener('click', closeModal)
