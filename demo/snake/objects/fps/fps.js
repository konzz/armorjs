define(['engine/engine', 'underscore'], function(engine, _){
  'use strict';
  return function(){
    var lastDraw;
    var framesCount;
    var rate;
    var oneSecond = 1000;

    var fps = {

      init: function(){
        lastDraw = Date.now();
        framesCount = 0;
        rate = 0;
      },

      update: function(){
        framesCount++;
        var now = Date.now();
        if(lastDraw + oneSecond <= now){
            lastDraw = now;
            rate = framesCount;
            framesCount = 0;
        }

        fps.draw(rate);
      },

      draw: function(rate){
        fps.ctx.fillText(rate + " fps", fps.gameObject.position.x, fps.gameObject.position.y);
      }
    };

    return fps;
  };
});
