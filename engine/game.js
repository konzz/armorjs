'use strict';


define(['engine/time'],function(time){
  return function(canvas_id){

    var canvas = document.getElementById(canvas_id);

    time.start();

    return {
      levels: {},
      current_level: null,
      canvas: canvas,

      addLevel: function(level){
        level.setCanvas(canvas);
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
