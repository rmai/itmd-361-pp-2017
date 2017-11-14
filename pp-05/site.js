$(document).ready(function(){

  $("#audio").remove();

  function ringDoorbell() {
    var audio = new Audio('media/doorbell.mp3');
    audio.play();
  }

  $("#doorbell").on("click", function() {
    ringDoorbell();
  });

});
