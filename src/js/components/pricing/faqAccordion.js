export const useFaqAccordion = () => {
  const accordionItems = document.querySelectorAll('[data-accordion="button"]');

  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      const openedAccordionItem = item.classList.contains('faq__item--opened');

      document.querySelectorAll('.faq__item').forEach((item) => {
        item.classList.remove('faq__item--opened');
      });

      if (!openedAccordionItem) {
        item.classList.add('faq__item--opened');
      }
    });
  });
};
