export const initMap = async () => {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

  // Инициализация карты
  const map = new YMap(document.getElementById('map'), {
    zoomRange: { min: 1, max: 15 }, // Допустимые уровни масштабирования
    location: {
      center: [100, 0], // Центр карты
      zoom: 1, // Масштаб по умолчанию
    },
  });

  // Добавляем стандартный слой схемы карты
  map.addChild(
    new YMapDefaultSchemeLayer({
      customization: [
        // Делаем прозрачными все геометрии водных объектов.
        {
          tags: {
            all: ['water'],
          },
          elements: 'geometry',
          stylers: [
            {
              opacity: 0,
            },
          ],
        },

        {
          tags: {
            any: ['landscape'],
          },
          elements: 'geometry',
          stylers: [
            {
              color: '#9ca2af',
            },
          ],
        },
        {
          tags: {
            any: ['country', 'admin', 'region', 'locality', 'landscape', 'land', 'landcover', 'water'],
          },
          elements: 'label',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
      ],
    }),
  );

  // Добавляем слой объектов
  map.addChild(new YMapDefaultFeaturesLayer());

  // Подключение модуля меток
  const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

  // Создание метки
  const myPlacemark = new YMapDefaultMarker({
    coordinates: [135.5, -25.5],
    color: '#1463FF',
    title: 'Yogja, INA',
    subtitle: '100 Smith Street Collingwood VIC 3066 AU',
    // Добавляем HTML код как содержимое маркера
  });

  // Добавление метки на карту
  map.addChild(myPlacemark);
};
