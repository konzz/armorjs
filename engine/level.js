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

      setCtx: function(ctx){
        this.ctx = ctx;
        _(level.objects).each(function(object){
          object.setCtx(ctx);
        });
      },

      active: false
    };

    time.onStep(function(){
      if(!level.active) {
        return;
      }

      _(level.objects).each(function(object){
        object.update();
      });
    });

    return level;
  };
});