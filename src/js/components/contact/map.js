export const initMap = async () => {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  // Инициализация карты
  const map = new YMap(document.getElementById('map'), {
    zoomRange: { min: 2, max: 15 }, // Допустимые уровни масштабирования
    location: {
      center: [100, 0], // Центр карты
      zoom: 2, // Масштаб по умолчанию
    },
  });

  // Добавляем слой карты
  map.addChild(
    new YMapDefaultSchemeLayer({
      theme: 'dark',
    }),
  );
};

// ================================
