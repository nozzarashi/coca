export const useAccordion = () => {
  const accordionItems = document.querySelectorAll('.footer__item');

  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Находим текущий контент аккордеона
      const accordionCurrentContent = item.querySelector('.footer__sublist');

      // Находим все контенты аккордеона
      const accordionAllContents = document.querySelectorAll('.footer__sublist');

      // Закрываем все контенты аккордеона
      accordionAllContents.forEach((content) => {
        if (content !== accordionCurrentContent) {
          content.classList.remove('footer__sublist--opened');
          content.style.maxHeight = '';
        }
      });

      // Переключаем состояние текущего контента
      if (accordionCurrentContent.classList.contains('footer__sublist--opened')) {
        accordionCurrentContent.classList.remove('footer__sublist--opened');
        accordionCurrentContent.style.maxHeight = '';
      } else {
        accordionCurrentContent.classList.add('footer__sublist--opened');
        accordionCurrentContent.style.maxHeight = accordionCurrentContent.scrollHeight + 'px';
      }
    });
  });
};
