import itemList from './gallery-items.js'
import { 
  onOpenModalBtnCLick,
  onCloseModalBtnClick,
  onEscKeydown, 
  onLeftArrowBtnKeydown,
  onRightArrowBtnKeydown,
  
} from './handlers.js'

const galleryRef = document.querySelector('.js-gallery');

const closeModalBtnRef = document.querySelector('button[data-action="close-lightbox"]');
const lightboxOverlayRef = document.querySelector('.js-lightbox > .lightbox__overlay');
const bodyRef = document.querySelector('body');




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
  width = 480
  height = 240
  loading = "lazy"
  />
  </a>
  </li>`}).join(' ')
};



const createMarkup = createGalleryItem(itemList);
galleryRef.insertAdjacentHTML('beforeend', createMarkup);

bodyRef.addEventListener('keydown', onEscKeydown)
bodyRef.addEventListener('keydown', onLeftArrowBtnKeydown)
bodyRef.addEventListener('keydown', onRightArrowBtnKeydown)

galleryRef.addEventListener('click', onOpenModalBtnCLick)
closeModalBtnRef.addEventListener('click', onCloseModalBtnClick)
lightboxOverlayRef.addEventListener('click', onCloseModalBtnClick)
