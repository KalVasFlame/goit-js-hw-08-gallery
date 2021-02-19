const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__content > .lightbox__image');

export const onOpenModalBtnCLick = e => { 
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  lightboxRef.classList.add('is-open');
  lightboxImageRef.src = e.target.dataset.source;
  lightboxImageRef.alt = e.target.alt;
  
};
export const onCloseModalBtnClick = () => { 
  lightboxRef.classList.remove('is-open')
  lightboxImageRef.src = undefined;
};
export const onEscKeydown = e => { 
  if (e.keyCode !== 27) {
  return
  }
  lightboxRef.classList.remove('is-open')
  lightboxImageRef.src = undefined;
}
export const onLeftArrowBtnKeydown = e => {
  if (!lightboxRef.classList.contains('is-open')) {
    return
  }
  if (e.keyCode !== 37) { 
    return
  }
  if (activeIndex === 0) { 
    return
  }
  activeIndex = Number(activeIndex) -1 ;
  lightboxImageRef.src = itemList[activeIndex].original
  
}
export const onRightArrowBtnKeydown = e => {
  if (!lightboxRef.classList.contains('is-open')) {
    return
  }
  if (e.keyCode !== 39) { 
    return
  }
  if (activeIndex === itemList.length - 1) { 
    return
  }
  activeIndex = Number(activeIndex) +1
  lightboxImageRef.src = itemList[activeIndex].original
  lightboxImageRef.alt = itemList[activeIndex].description
  
}
