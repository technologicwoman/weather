console.log('\'Allo \'Allo!');

$(function() {

  var baseTimeLine = anime.timeline();

  baseTimeLine
    .add({
      targets: '.js-main-panel .js-main-panel-title',
      translateY: 75,
      duration: 3000,
    })
    .add({
      targets: '.js-main-panel .js-main-panel-title',
      opacity: 1,
      offset: '-=2700'
    })
    .add({
      targets: '.js-info-panel',
      translateX: {
        value: - $('.js-info-panel').width(),
        duration: 3000
      },
      opacity: {
        value: 1,
        duration: 2500,
        delay: 300
      },
      offset: '0'
    })
  /*var cssSelector = anime({
    targets: '.js-main-panel .js-main-panel-title',
    translateY: 25,
    duration: 3000,
    opacity: 1
  });  */
})

