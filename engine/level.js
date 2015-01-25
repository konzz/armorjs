'use strict';

define(['underscore', 'engine/time'], function(_, time){
  return function(name){
    var level = {
      name: name,
      objects: [],

      play: function(){
        this.active = true;
      },

      stop: function(){
        this.active = false;
      },

      addGameObject: function(object){
        level.objects.push(object);
      },

      setCanvas: function(canvas){
        level.canvas = canvas;
        level.ctx = canvas.getContext('2d');
        _(level.objects).each(function(object){
          object.setCtx(level.ctx);
        });
      },

      active: false
    };

    time.onStep(function(){
      if(!level.active) {
        return;
      }

      level.ctx.clearRect(0,0,level.canvas.width,level.canvas.height);
      _(level.objects).each(function(object){
        object.update();
      });
    });

    return level;
  };
});
