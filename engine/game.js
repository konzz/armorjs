'use strict';


define(function(){
  return function(canvas_id){
    return {
      levels: {},
      current_level: null,
      ctx: document.getElementById(canvas_id).getContext('2d'),

      addLevel: function(level){
        level.ctx = this.ctx;
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