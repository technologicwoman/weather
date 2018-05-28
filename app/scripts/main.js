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

const weatherMessage = {
  'Clear': 'should enjoy your day outdoors!',
  'Rain': 'If you go out, you should take an umbrella or stay in home',
  'Clouds': 'should wear a coat to keep warm'
}

const predictions = {
  3: {},
  6: {},
  9: {}
}


$(function() {
  let today = new Date();
  let currentDay = weekDays[today.getDay()];
  
  $.get( 'http://35.190.138.158:5002/predictions?city=asd&steps=3', function( data ) {
    storeData(data.predictions);
    putCurrentData(data.current, data.temp, currentDay);
    initAnimation();
  });
  
  $('.js-submit').on('click', showPrediction);

  $('.js-close-modal').on('click', () => {
    $('.js-prediction-modal').removeClass('is-active');
    location.reload();
  });

})

const showPrediction = () => {
  let step = $('.js-step-select').val();
  let name = $('.js-name').val();
  let predictionData = predictions[step];

  let max = {
    value: 0
  }

  for(let property in predictionData) {
    if (predictionData[property] > max.value){
      max = {
        value: predictionData[property],
        weather: property
      }
    }
  }

  let weatherImg = chooseWeatherImg(max.weather);
  let propability = max.value.toFixed(2);
  let message = `${name} ${weatherMessage[max.weather]}, the weather would be ${max.weather} with a probability of ${propability}`;
  $('.js-prediction-title').text(`Prediction to ${step} hours`);
  $('.js-prediction-image').css('background-image' , `url(${weatherImg})`);
  $('.js-prediction-description').text(message);
  $('.js-prediction-modal').addClass('is-active');
  predictionAnimation();
}

const storeData = (predictionsArray) => {
  predictions[3] = predictionsArray[0];
  predictions[6] = predictionsArray[1];
  predictions[9] = predictionsArray[2];
}

const chooseWeatherImg = (weather) => {
  let wtherImg;
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
  return wtherImg;
}

const putCurrentData = (currentWeather, currentTemp, currentDay) => {
  let weather = currentWeather.toString();
  let wtherImg = chooseWeatherImg(weather);

  $('.js-main-panel-title').text(currentDay);
  $('.js-number').text(currentTemp);
  $('.js-main-panel-image').css('background-image' , `url(${wtherImg})`);
}

const predictionAnimation = () => {
  var contentTimeLine = anime.timeline();
    contentTimeLine
    .add({
      targets: '.js-prediction-title',
      translateY: 75,
      opacity: {
        value: 1,
        delay: 550,
        duration: 200
      },
      easing: 'easeInSine'
    })
    .add({
      targets: '.js-main-panel .js-prediction-image',
      height: 175,
      width: 175,
      delay: 500,
      easing: 'easeOutExpo'
    })
    .add({
      targets: '.js-prediction-subtitle',
      translateY: 10,
      opacity: {
        value: 1,
      },
      offset: '1100',
      easing: 'easeInSine'
    })
    .add({
      targets: '.js-prediction-description',
      translateX: {
        value: '120px',
        easing: 'easeInSine',
        delay: 700,
      },
      opacity: {
        value: '1',
        delay: 1400,
        easing: 'easeOutBack'
      },
      offset: '800',
    })
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