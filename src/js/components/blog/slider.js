import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const useBlogSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: '2.5',
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      321: {
        slidesPerView: '1',
        spaceBetween: 18,
        centeredSlides: true,
      },
      446: {
        slidesPerView: '1.2',
        spaceBetween: 18,
        centeredSlides: true,
      },
      577: {
        slidesPerView: '1.5',
        spaceBetween: 20,
        centeredSlides: true,
      },
      769: {
        slidesPerView: '2',
        spaceBetween: 18,
      },
      993: {
        spaceBetween: 30,
        slidesPerView: '2.5',
      },
    },
  });
};

// второй слайдер
export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: '3',
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      321: {
        slidesPerView: '1',
        spaceBetween: 18,
        centeredSlides: true,
      },
      446: {
        slidesPerView: '1.4',
        spaceBetween: 18,
        centeredSlides: true,
      },
      577: {
        slidesPerView: '1.7',
        spaceBetween: 20,
        centeredSlides: true,
      },
      769: {
        slidesPerView: '2',
        spaceBetween: 18,
      },
      993: {
        spaceBetween: 30,
        slidesPerView: '3',
      },
    },

    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },
  });
};
