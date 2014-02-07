var centennialBanner = null;

$.backstretch($('meta[name=background]').attr('content'), {
  speed: 600, centeredX: false, centeredY: false
});

function showSubnavigation(element) {
  element.css('height', element.data('height')).show();
  centennialBanner.hide();
};

function hideSubnavigation(element) {
  element.hide();
  centennialBanner.show();
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
  adjustMenuPadding(element, '40px', '0', '0')
};

function decreaseMenuItemPadding(element) {
  adjustMenuPadding(element, '20px', '20px', '20px')
};

$(document).ready(function() {
  centennialBanner = $("#centennial");

  $('.subnavigation').each(function() {
    $(this).data('height', $(this).height());
    $(this).css('height', 0);
  });

  $('.menu-item').mouseover(function() {
    increaseMenuItemPadding($(this));
    showSubnavigation($('#' + $(this).data('name')));
  }).mouseout(function() {
    decreaseMenuItemPadding($(this));
    hideSubnavigation($('#' + $(this).data('name')));
  })

  $('.subnavigation').mouseover(function() {
    increaseMenuItemPadding($('.menu-item[data-name="' + $(this).attr('id') + '"]'));
    showSubnavigation($(this));
  }).mouseout(function() {
    decreaseMenuItemPadding($('.menu-item[data-name="' + $(this).attr('id') + '"]'));
    hideSubnavigation($(this));
  })
});
