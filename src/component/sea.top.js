/**
 * Created by xiaowtz on 2017/4/19.
 */
define(function (require, exports, module) {

  var $ = require('jquery');

  var $top = $("<div class='go-top'></div>");
  $top.appendTo($("body"));

  function init() {
    $(document).ready(function () {

      // Show or Hide The Sticky Footer Button

      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $top.fadeIn(200);
        } else {
          $top.fadeOut(200);
        }
      });

      // Animate the scroll to top

      $top.click(function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 300);
      });

    });
  }

  module.exports = init;


});