// Импортируем стили библиотеки
import 'intl-tel-input/build/css/intlTelInput.css';
// импортирует библиотеку вместе с utils (хуйня какая то, в которой доп функции)
import intlTelInput from 'intl-tel-input/intlTelInputWithUtils';

// Функция для инициализации поля телефона
export const phoneInput = () => {
  // находим все нужны элементы, инпут телефона, кнопка валидации, сообщение об ошибке, а также массив из самих ошибок
  const input = document.querySelector('#phone');
  const form = document.querySelector('form'); // Находим саму форму
  const errorMsg = document.querySelector('#error-msg'); // Span для ошибок
  const errorMap = ['Invalid number', 'Invalid country code', 'Too short', 'Too long', 'Invalid number'];

  // Инициализация intlTelInput для инпута
  const iti = intlTelInput(input, {
    utilsScript: 'path/to/utils.js', // Путь к utils.js
    nationalMode: false,
    // чекать айпишник и автоматом выводить нужную страну для номера (не разобрался еще)
    geoIpLookup: function (callback) {
      fetch('https://ipinfo.io/json') // Используем сторонний сервис для определения страны
        .then((resp) => resp.json())
        .then((resp) => {
          const countryCode = resp && resp.country ? resp.country : 'ru';
          callback(countryCode);
        })
        .catch(() => {
          callback('ru'); // По умолчанию, если запрос не удался
        });
    },
    // параметр, чтобы международный номер автоматом добавлялся к началу номера
    separateDialCode: true,
    initialCountry: 'auto',
    strictMode: true,
  });

  // Функция для сброса сообщений об ошибках
  const resetMsg = () => {
    input.classList.remove('error');
    errorMsg.innerHTML = '';
    errorMsg.classList.add('hide');
  };

  // Обработчик для отправки формы
  form.addEventListener('submit', (e) => {
    resetMsg(); // Сбрасываем предыдущие ошибки

    // короче тут value - это текст введенный в строку по типу input, textarea итд, а trim() - это метод строки, который удаляет пробелы до и после написанного текста

    // input.value.trim() - "Если значение поля ввода (после удаления пробелов в начале и в конце) не пустое, то..."
    // !input.value.trim() - "Если значение поля ввода (после удаления пробелов в начале и в конце) пустое, то..." -----------------------

    // проверяем, если в поле с номером возвращается пустое поле(true) или если номер не(!) валидный, то прекращает стандартное поведение формы, а именно форма никуда не отправляется

    if (!input.value.trim() || !iti.isValidNumber()) {
      e.preventDefault(); // Останавливаем отправку формы, если есть ошибки
      const errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode] || 'Invalid number';
      errorMsg.classList.remove('hide');
    }
  });

  // Сброс ошибок при изменении значения в инпуте
  input.addEventListener('change', reset);
  input.addEventListener('keyup', reset);
};
