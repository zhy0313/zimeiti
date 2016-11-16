/**
 * Created by xiaowtz on 16/8/3.
 */
// load background music
(function initBackgroundMusic() {
  document.addEventListener("DOMContentLoaded", function () {
    var audio = document.createElement("audio");
    audio.setAttribute("autoplay", "autoplay");
    audio.setAttribute("loop", 'loop');
    audio.setAttribute("src", "../dist/mp3/music.mp3");

    var audioBox = document.createElement("div");
    audioBox.setAttribute("class", "bg-music");
    audioBox.insertBefore(audio, null);
    document.body.insertBefore(audioBox, document.body.childNodes[0]);

    audioBox.addEventListener("click", function () {
      if (audio.paused) {
        audioBox.className = "bg-music";
        audio.play();
      } else {
        audioBox.className = "bg-music pause";
        audio.pause();
      }
    }, false);
  }, false);

  // for wechat
  document.addEventListener("WeixinJSBridgeReady", function () {
    document.querySelector(".bg-music").play();
  }, false);
})();
