import Swiper from 'swiper';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 24,

    breakpoints: {
      321: {
        spaceBetween: 15,
      },
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: '3',
    loop: true,

    breakpoints: {
      321: {
        slidesPerView: '1.5',
        centeredSlides: true,
        spaceBetween: 21,
      },

      446: {
        slidesPerView: '2',
        centeredSlides: false,
        spaceBetween: 20,
      },

      577: {
        slidesPerView: '2',
        centeredSlides: true,
        spaceBetween: 28,
      },

      769: {
        slidesPerView: '2.5',
        centeredSlides: true,
        spaceBetween: 32,
      },

      801: {
        slidesPerView: '3',
        centeredSlides: true,
        spaceBetween: 32,
      },

      993: {
        slidesPerView: '3',
        centeredSlides: false,
        spaceBetween: 32,
      },
    },
  });
};
