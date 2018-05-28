console.log('\'Allo \'Allo!');

$(function() {

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
        value: - $('.js-info-panel').outerWidth(),
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

})

