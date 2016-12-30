var centennialBanner = null;

var background = $('meta[name=background]').attr('content');

if (background) {
  $.backstretch(background, {
    speed: 600, centeredX: false, centeredY: false
  });
}
