'use strict';


define(['./level'], function(level){
  return {
    game: function(canvas_id){

      return {
        levels: {},
        current_level: null,
        ctx: document.getElementById(canvas_id).getContext('2d'),

        level: function(name){
          var newLevel = level(name);
          newLevel.ctx = this.ctx;
          return this.levels[name] = newLevel;
        },

        play: function(level_name){
          if(this.current_level) {
            this.current_level.unactive();
          }
          this.levels[level_name].active();
          this.current_level = this.levels[level_name];
        }
      };
    },
  };
});