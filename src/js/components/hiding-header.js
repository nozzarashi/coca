export const useHidingHeader = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScrollPosition = 0;
    const scrollThreshold = 100; // минимальное расстояние для смены состояния

    const headerScroll = () => {
      const currentScroll = window.scrollY;

      // прозрачность шапки при верхнем крайнем положении

      if (currentScroll === 0) {
        header.classList.add('header--transparent');
      } else {
        header.classList.remove('header--transparent');
      }

      // ==============================
      // при помощи свойства window.scrollY мы можем отслеживать вертикальное смещение и получать при скролле значение, которое будет равно позиции, на которой мы сейчас находимся на сайте

      // чтобы понять, происходит ли сейчас прокрутка вниз или вверх, достаточно сравнить значение, которое мы получаем от window.scrollY, с прошлым значением. Если оно больше, то мы сейчас листаем вниз(т.к значение увеличивается по мере прокрутки страницы вниз) если меньше, то пользователь скроллит вверх. И вдобавок регулируем минимальное расстояние, которое польщователь должен проскролить, чтобы менять состояние шапки.

      // и конечно не забываем обновлять прошлое значение, чтобы понимать, где мы находились ранее и с каким значением сравнивать в данный момент.
      // ==============================

      // скролл вниз

      if (currentScroll > lastScrollPosition && currentScroll > scrollThreshold) {
        header.classList.remove('header--show');

        // скролл вверх
      } else if (currentScroll < lastScrollPosition) {
        header.classList.add('header--show');
      }

      lastScrollPosition = currentScroll;
    };

    window.addEventListener('scroll', headerScroll);
  });
};
