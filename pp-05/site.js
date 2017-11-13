$.noConflict();

document.getElementById('ringDoorbell').style.visibility = 'hidden';

(function ($){
  var ringDoorbell = new Audio('media/doorbell.mp3');
  document.getElementById('ringDoorbell').style.visibility = 'visible';
  document.getElementById('audio').style.visibility = 'hidden';
  $('#ringDoorbell').on('click', function() {
    ringDoorbell.play();
  });
})(jQuery);
