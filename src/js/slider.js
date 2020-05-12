import Swiper from 'swiper';

const slider = new Swiper('.swiper-container', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 80,


  breakpoints: {
    // when window width is >= 640px
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


export default slider;
