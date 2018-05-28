console.log('\'Allo \'Allo!');

const weathers = {
  'CLEAR': 'Clear',
  'RAIN': 'Rain',
  'CLOUDS': 'Clouds',
}

const weatherImg = {
  'CLEAR': './img/icons/clear-day.png',
  'RAIN': './img/icons/rainy-day.png',
  'CLOUDS': './img/icons/mostly-cloudy.png',
}

const weekDays = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}


$(function() {
  let today = new Date();
  let currentDay = weekDays[today.getDay()];
  
  $.get( "http://35.190.138.158:5002/predictions?city=asd&steps=2", function( data ) {
    console.log(data);
    putCurrentData(data.current, data.temp, currentDay);
    initAnimation();
  });
  

})

const putCurrentData = (currentWeather, currentTemp, currentDay) => {
  let wtherImg;
  let weather = currentWeather.toString();

  switch (weather) {
    case weathers.CLEAR:
      wtherImg = weatherImg.CLEAR
      break;
    case weathers.RAIN:
      wtherImg = weatherImg.RAIN
      break;
    case weathers.CLOUDS:
      wtherImg = weatherImg.CLOUDS
      break;
  }
  $('.js-main-panel-title').text(currentDay);
  $('.js-number').text(currentTemp);
  $('.js-main-panel-image').css("background-image" , `url(${wtherImg})`);
}

const initAnimation = () => {
  var baseTimeLine = anime.timeline();

  baseTimeLine
    .add({
      targets: '.js-main-panel .js-main-panel-title',
      translateY: 75,
      opacity: {
        value: 1,
        delay: 550,
        duration: 200
      },
      easing: 'easeInSine'
    })
    .add({
      targets: '.js-info-panel',
      translateX: {
        value: - $('.js-info-panel').width(),
      },
      opacity: {
        value: 1,
        delay: 300
      },
      offset: '0',
      easing: 'easeInSine'
    })
    
  var contentTimeLine = anime.timeline();
  contentTimeLine
    .add({
      targets: '.js-main-panel .js-main-panel-image',
      height: 175,
      width: 175,
      delay: '1400',
      easing: 'easeOutExpo'
    })
    .add({
      targets: '.js-main-panel-subtitle',
      translateY: 10,
      opacity: {
        value: 1,
      },
      offset: '1500',
      easing: 'easeInSine'
    })
    .add({
      targets: '.js-main-panel-tmp',
      translateX: {
        value: '120px',
        easing: 'easeInSine'
      },
      opacity: {
        value: '1',
        delay: 700,
        easing: 'easeOutBack'
      },
      offset: '1500',
    })
}