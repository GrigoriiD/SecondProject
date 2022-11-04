
var video = document.querySelector("#video"),
   button = document.querySelector("#button");

button.addEventListener("click", function() {
video.play()
video.setAttribute("controls","controls");
}, false);

$(".presentation__none").click(function() {
    $(".presentation__none").addClass('video-play-btn--hide');
  })