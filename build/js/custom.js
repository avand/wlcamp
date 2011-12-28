$.backstretch("/images/backgrounds/" + $('meta[name=path]').attr('content').replace('.html', '.jpg'), {
  speed: 600, centeredX: false, centeredY: false
});

$('.slideshow').cycle({ speed: 800, timeout: 6000 });

function setMainOpacity(pageY) {
  var headerHeight    = header.height();
  var minimumOpacity  = 0.5;
  var transitionRange = 150;

  var opacity = ((pageY - headerHeight) / transitionRange) + minimumOpacity;

  if (pageY < headerHeight) {
    opacity = minimumOpacity;
  }

  main.css('opacity', opacity);
}

$(document).ready(function(e) {
  header        = $('header');
  main          = $('#main');
  subnavigation = $('#subnavigation');

  $('.navigation a, .subnavigation a').click(function() {
    var href = $(this).attr('href');
    $('#main').fadeOut(300, function() { window.location = href });
    return false;
  });

  $('.menu-item').mouseenter(function(e) {
    $('.subnavigation:visible').slideUp(200);
    $("#" + $(this).data('name')).slideDown();
  });

  $('.subnavigation').mouseleave(function(e) {
    $(this).slideUp(200);
  })

  // Fade out the content as the mouse moves towards the header
  // $(document).mousemove(function(e){
  //  setMainOpacity(e.pageY);
  // });
});
