
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("azsMap", {
            center: [43.16869655294048,45.55503237995295],
            zoom: 17
        });

        var myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point", // тип геометрии - точка
              // coordinates: [43.16869655294048,45.55503237995295] // координаты точки
          }
        });
        
        var myPlacemark = new ymaps.Placemark([43.16869655294048,45.55503237995295], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'favicon.jpeg',
          iconImageSize: [40, 42],
          iconImageOffset: [-3, -42]
        });
      
        myMap.geoObjects.add(myGeoObject); 
        myMap.geoObjects.add(myPlacemark);
    }