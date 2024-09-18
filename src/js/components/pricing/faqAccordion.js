export const useFaqAccordion = () => {
  const accordionItems = document.querySelectorAll('[data-accordion="button"]');

  // перебираем коллекцию элементов аккордеона. хочется отметить, а точнее напомнить самому себе в очередной раз, что все, что мы делаем после того, как навесим слушатель событий на айтем, т.е на нажатый нами элемент, мы делаем конректно с этим элементом. Если я хочу как в этом примере, удалить все классы айтемам, то я должен заново пройтись по ним и удалить все классы, потому что если заново не проходиться, то получится так, что я буду удалять только класс у текущего элемента(item).

  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      // названия классов уверен можно было придумать гораздо лучше, еще и currentAccordionItem, который скорее всего тут даже не нужен, но ладно, у меня уже нервов не хватит копаться в этом

      const currentAccordionItem = item.closest('.faq__item');
      const openedAccordionItem = currentAccordionItem.classList.contains('faq__item--opened');
      const openedAccordionContent = currentAccordionItem.querySelector('[data-accordion="content"]');

      // как уже говорил выше, обязательно надо найти всех родителей аккордеона и заново пройтись по ним, удаляя их классы
      // и уже далее ищем теперь каждый контент аккордеона, т.е параллельно мы каждому (accordion) удаляем класс, а также его контенту задаем maxHeight = ''. таким образом перебираем коллекцию аккордеонов и укаждого удаляем класс, а также контенту устанавливаем maxHeight = ''.

      document.querySelectorAll('.faq__item').forEach((accordion) => {
        accordion.classList.remove('faq__item--opened');
        const contents = accordion.querySelector('[data-accordion="content"]');
        if (contents) {
          contents.style.maxHeight = '';
        }
      });

      // ну и тут осталось условие, если наш текущий аккордеон не содердит класс --opened, тогда добавляем. Но нам не надо создавать ветвление, например esle -> и удаляем этот класс, посколько мы заранее уже сделали так, что при каждом клике на аккордеон, мы будем закрывать вообще все аккордеоны.

      if (!openedAccordionItem) {
        item.classList.add('faq__item--opened');
      }

      if (!openedAccordionItem) {
        openedAccordionContent.style.maxHeight = openedAccordionContent.scrollHeight + 'px';
      }
    });
  });
};
