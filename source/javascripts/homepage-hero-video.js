var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('promo-video', {
    videoId: 'bw0tM7kj4fs',
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  $(function() {
    $('#promo-video-modal').on('shown.bs.modal', function (e) {
      player.playVideo();
    }).on('hidden.bs.modal', function (e) {
      player.stopVideo();
    });
  })
}
