$.noConflict();

(function ($){
  var ringDoorbell = new Audio('media/doorbell.mp3');
  // The page loads with js play bar will disapper
  document.getElementById('audio').style.visibility = 'hidden';
  $('#ringDoorbell').on('click', function() {
    ringDoorbell.play();
  });
})(jQuery);
