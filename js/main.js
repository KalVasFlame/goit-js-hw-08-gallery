import itemList from './gallery-items.js'

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__content > .lightbox__image');
const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');
const lightboxOverlayRef = document.querySelector('.js-lightbox > .lightbox__overlay');
const bodyRef = document.querySelector('body');

let index = 0;  
let activeIndex;

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
  data-index="${index += 1}"
  alt="${description}"
  width = 480
  height = 240
  loading = "lazy"
  />
  </a>
  </li>`}).join(' ')
};
const onOpenModalBtnCLick = e => { 
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  lightboxRef.classList.add('is-open');
  lightboxImageRef.src = e.target.dataset.source;
  lightboxImageRef.alt = e.target.alt;
  lightboxRef.dataset.index = e.target.dataset.index
  activeIndex = e.target.dataset.index
};
const onCloseModalBtnClick = () => { 
  lightboxRef.classList.remove('is-open')
  lightboxImageRef.src = undefined;
};
const onEscKeydown = e => { 
  if (e.keyCode !== 27) {
  return
  }
  lightboxRef.classList.remove('is-open')
  lightboxImageRef.src = undefined;
}
const onLeftArrowBtnKeydown = e => {
  if (!lightboxRef.classList.contains('is-open')) {
    return
  }
  if (e.keyCode !== 37) { 
    return
  }
  if (activeIndex === 0) { 
    return
  }
  activeIndex -=1
  lightboxImageRef.src = itemList[activeIndex].original
  
}
const onRightArrowBtnKeydown = e => {
  if (!lightboxRef.classList.contains('is-open')) {
    return
  }
  if (e.keyCode !== 39) { 
    return
  }
  if (activeIndex === itemList.length - 1) { 
    return
  }
  activeIndex +=1
  lightboxImageRef.src = itemList[activeIndex].original
  
}

const createMarkup = createGalleryItem(itemList);

bodyRef.addEventListener('keydown', onEscKeydown)
bodyRef.addEventListener('keydown', onLeftArrowBtnKeydown)
bodyRef.addEventListener('keydown', onRightArrowBtnKeydown)

galleryRef.addEventListener('click', onOpenModalBtnCLick)
closeModalBtnRef.addEventListener('click', onCloseModalBtnClick)
lightboxOverlayRef.addEventListener('click', onCloseModalBtnClick)

galleryRef.insertAdjacentHTML('beforeend', createMarkup);