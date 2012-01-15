$.backstretch($('meta[name=background]').attr('content'), {
  speed: 600, centeredX: false, centeredY: false
});

$('.slideshow').cycle({ speed: 800, timeout: 6000 });

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
});

function slideDownSubnavigation(element) {
  $("#centennial").stop().animate({ opacity: 0.0 }, { queue: false });

  element.stop().css('z-index', '1000').show().animate({
    height: element.data('height')
  }, {
    queue: false,
    duration: 1000,
    easing: 'easeOutBounce',
    complete: function() {
      $("#centennial").stop().animate({ opacity: 0.0 }, { queue: false });
    }
  })
};

function slideUpSubnavigation(element) {
  element.stop().css('z-index', '999').animate({
    height: 0
  }, {
    queue: false,
    duration: 1000,
    easing: 'easeOutSine',
    complete: function() {
      $(this).hide();
      $("#centennial").animate({ opacity: 1.0 }, { queue: false });
    }
  })

}

function adjustMenuPadding(current, currentPadding, prevPaddingRight, nextPaddingLeft) {
  var previous = current.next('.menu-item');
  var next     = current.prev('.menu-item');

  if (previous.size() > 0) {
    current.css('padding-left', currentPadding);
    previous.css('padding-right', prevPaddingRight);
  }

  if (next.size() > 0) {
    current.css('padding-right', currentPadding);
    next.css('padding-left', nextPaddingLeft);
  }
}

function increaseMenuItemPadding(element) {
  adjustMenuPadding(element, '50px', '0', '0')
};

function decreaseMenuItemPadding(element) {
  adjustMenuPadding(element, '25px', '25px', '25px')
};

$(document).ready(function(){
  $('.subnavigation').each(function() {
    $(this).data('height', $(this).height());
    $(this).css('height', 0);
  });

  $('.menu-item').mouseover(function() {
    increaseMenuItemPadding($(this));
    slideDownSubnavigation($('#' + $(this).data('name')));
  }).mouseout(function() {
    decreaseMenuItemPadding($(this));
    slideUpSubnavigation($('#' + $(this).data('name')));
  })

  $('.subnavigation').mouseover(function() {
    increaseMenuItemPadding($('.menu-item[data-name="' + $(this).attr('id') + '"]'));
    slideDownSubnavigation($(this));
  }).mouseout(function() {
    decreaseMenuItemPadding($('.menu-item[data-name="' + $(this).attr('id') + '"]'));
    slideUpSubnavigation($(this));
  })
});
