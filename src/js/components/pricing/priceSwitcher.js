export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-plan="switcher"]');

  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const priceText = document.querySelectorAll('[data-price="text"]');

  // создаем объект и помещаем туда обычную цену и скидочную, а далее в теле стрелочной функции используем эти данные.
  const priceList = {
    main: {
      default: '$1640',
      withDiscount: '$1400',
    },

    enterprise: {
      default: '$2520',
      withDiscount: '$2100',
    },
  };

  // создаем стрелочные функции с обычной ценой и скидочной и просто вызываем ее в условии
  const priceDiscount = () => {
    popularPrice.textContent = priceList.main.withDiscount;
    enterprisePrice.textContent = priceList.enterprise.withDiscount;
  };

  const defaultPrice = () => {
    popularPrice.textContent = priceList.main.default;
    enterprisePrice.textContent = priceList.enterprise.default;
  };

  defaultPrice();

  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      priceDiscount();

      priceText.forEach((item) => {
        item.textContent = '/yr';
      });
    } else {
      defaultPrice();
      priceText.forEach((item) => {
        item.textContent = '/mo';
      });
    }
  });
};
