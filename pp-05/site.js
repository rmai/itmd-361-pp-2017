  //function ringDoorbell() {
    //var doorbell = new Audio('media/doorbell.mp3');
    //doorbell.play();
  //}
$.noConflict();

    document.getElementById('ringDoorbell').style.visibility = 'hidden';
  (function ($){
    document.getElementById('ringDoorbell').style.visibility = 'visible';

    var ringDoorbell = new Audio('media/doorbell.mp3');
    document.getElementById('audio').style.visibility = 'hidden';
    $('#ringDoorbell').on('click', function() {
      ringDoorbell.play();
    });
  })(jQuery);
