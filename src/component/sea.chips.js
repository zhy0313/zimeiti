define(function (require, exports, module) {

  var $ = require("jquery");

  /* jquery plugin 1: 	随机彩色碎片掉落 */
  $.fn.randomDrop = function (arr, options) {
    function r(min, max) {
      return Math.random() * (max - min ) + min;
    }

    function r_int(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var $self = $(this),
        opts  = $.extend({}, {count: 30, delay: 6, duration: 3, loop: "infinite"}, options),
        divs  = [],
        chips = ['chip-1', 'chip-2', 'chip-3', 'chip-4', 'chip-5', 'chip-6'];

    if (!Array.isArray(arr) || arr.length === 0) {
      arr = chips;
    }


    var lastLeft = 0,
        left;

    for (var i = opts.count - 1; i >= 0; i--) {
      //随机样式
      var $div = $("<div/>"),
          idx  = r_int(1, arr.length);
      $div.addClass("chip " + arr[idx - 1]);

      left = lastLeft < 50 ? r(50, 100) : r(0, 50);

      lastLeft = left;
      //随机定位
      $div.css({
        'left': left + '%',
        '-webkit-animation-name': 'r-drop' + r_int(1, 2),
        'animation-name': 'r-drop' + r_int(1, 2),

        '-webkit-animation-duration': opts.duration + 's',
        'animation-duration': opts.duration + 's',

        '-webkit-animation-timing-function': 'ease-in',
        'animation-timing-function': 'ease-in',

        '-webkit-animation-iteration-count': opts.loop,
        'animation-iteration-count': opts.loop,

        '-webkit-animation-delay': r(0, opts.delay) + 's',
        'animation-delay': r(0, opts.delay) + 's'

      });
      divs.push($div);
    }
    return $self.append(divs);
  };

});