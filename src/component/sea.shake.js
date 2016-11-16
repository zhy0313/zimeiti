/**
 * Created by xiaowtz on 16/8/3.
 */
define(function (require, exports, module) {

  var $ = require("jquery");

  /*摇一摇*/
  function shake(cb) {

    var SHAKE_THRESHOLD = 2500,
        //canShake        = true,
        lastTime        = 0,
        x               = 0,
        y               = 0,
        z               = 0,
        lastX           = 0,
        lastY           = 0,
        lastZ           = 0;


    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
      alert('您的设备不支持摇一摇功能');
      return;
    }


    function deviceMotionHandler(eventData) {
      var acceleration = eventData.accelerationIncludingGravity;
      var curTime = new Date().getTime();

      if ((curTime - lastTime) > 100) {
        var diffTime = curTime - lastTime;
        lastTime = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;

        //if (speed > SHAKE_THRESHOLD && canShake) {
        //  canShake = false;
        //  cb();
        //}

        if (speed > SHAKE_THRESHOLD) {
          cb();
        }
        lastX = x;
        lastY = y;
        lastZ = z;
      }
    }

    //return {
    //  stopShake: function () {
    //    canShake = false;
    //  },
    //  goShake: function () {
    //    canShake = true;
    //  }
    //}
  }

  module.exports = shake;

});