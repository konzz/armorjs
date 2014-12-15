'use strict';


define(['engine/time'],function(time){
  return function(canvas_id){
    
    var canvas = document.getElementById(canvas_id);
    var ctx = canvas.getContext('2d');

    time.start();

    return {
      levels: {},
      current_level: null,
      ctx: ctx,

      addLevel: function(level){
        level.setCtx(ctx);
        this.levels[level.name] = level;
      },

      play: function(level_name){
        if(this.current_level) {
          this.current_level.stop();
        }
        this.levels[level_name].play();
        this.current_level = this.levels[level_name];
      }
    };
  };
});