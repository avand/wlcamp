$.backstretch("/images/backgrounds/" + $('meta[name=path]').attr('content').replace('.html', '.jpg'), {
  speed: 600, centeredX: false, centeredY: false
});

$('.slideshow').cycle({ speed: 800, timeout: 6000 });

function slideUpAndFadeOut(element) {
  element.slideUp(150);
};

function slideDownAndFadeIn(element) {
  element.css('opacity', 0)
    .slideDown(500)
    .animate(
      { opacity: 1 },
      { queue: false, duration: 500 }
    );
}

$(document).ready(function(e) {
  header        = $('header');
  main          = $('#main');
  subnavigation = $('#subnavigation');

  $('.navigation a, .subnavigation a').click(function() {
    var href     = $(this).attr('href');
    var duration = 300;

    $('header, .subnavigation').animate({ opacity: 0 }, {
      duration: duration,
      queue: false
    });

    $('#main').animate({ opacity: 0 }, {
      duration: duration,
      queue: false,
      complete: function() { window.location = href }
    });

    return false;
  });

  $('.menu-item').mouseenter(function(e) {
    var menuName = $(this).data('name');
    slideDownAndFadeIn($("#" + menuName + ":hidden"));
    slideUpAndFadeOut($('.subnavigation[id!="' + menuName + '"]'));
  });

  $('#main').mouseover(function(e) {
    slideUpAndFadeOut($('.subnavigation:visible'));
  })
});
