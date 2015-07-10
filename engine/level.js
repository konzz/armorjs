'use strict';

define(['underscore', 'engine/time'], function(_, time){
  return function(name){
    var level = {
      name: name,
      objects: [],

      play: function(){
        this.active = true;
        initializeGameObjects();
      },

      stop: function(){
        this.active = false;
      },

      addGameObject: function(object){
        object.search = search;
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

    function search(name){
      return _(level.objects).where({name: name});
    }

    function initializeGameObjects(){
      _(level.objects).each(function(object){
        object.init();
      });
    }

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
