'use strict';

define(['underscore'], function(_){
  return function(name){
    var rendering = false;
    var rendering_speed = 20;
    
    var level = {
      name: name,
      game_objects: [],
      
      add_game_object: function(game_object){
        this.game_objects.push(game_object);
      },

      active: function(){
        if(!rendering){
          rendering = window.setInterval(render_game_objects, rendering_speed);
        }
      },

      unactive: function(){
        window.clearInterval(rendering);
        rendering = false;
      }
    };


    function render_game_objects(){
      if(!rendering) {
        return;
      }

      _(level.game_objects).each(function(game_object){
        game_object.render();
      });
    }

    return level;
  };
});