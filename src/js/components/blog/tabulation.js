export const useTabulation = () => {
  const items = document.querySelectorAll('.tab-controls__item');
  const contents = document.querySelectorAll('.tab-content');

  // перебираем коллекцию items и вешаем на каждый из них событие клика
  for (let item of items) {
    item.addEventListener('click', function () {
      // перебираем все контенты на странице и всем добавляем класс 'is-hidden' для того, чтобы перед открытием какого то контента, все остальные закрывались
      for (let otherContent of contents) {
        otherContent.classList.add('is-hidden');
      }

      // тоже самое делаем и с айтемами, удаляем все классы '--active', чтобы потом при клике выбранный айтем стал активным(ну и применились к нему стили, которые я заранее сделал в scss)

      for (let otherItem of items) {
        otherItem.classList.remove('tab-controls__item--active');
      }

      // находим текущий контент НОВЫМ для меня способом, наш текущий контент = конкатенация строк, а именно # для поиска контента по айди и значению dataset.tab, который будет передавать значение нажатого айтема. И поскольку айдишник контента и дата-атрибуты айтемов одинаковые, то легко можно их таким образом связать.

      const currentContent = document.querySelector('#' + item.dataset.tab);
      currentContent.classList.remove('is-hidden');
      item.classList.add('tab-controls__item--active');
    });
  }
};
