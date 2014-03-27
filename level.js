'use strict';

define(['underscore'], function(_){
  return function(name){
    var active = false;
    var update_speed = 20;
    
    var level = {
      name: name,
      game_objects: [],
      
      add_game_object: function(game_object){
        this.game_objects.push(game_object);
      },

      active: function(){
        if(!active){
          active = window.setInterval(update_game_objects, update_speed);
        }
      },

      unactive: function(){
        window.clearInterval(active);
        active = false;
      }
    };


    function update_game_objects(){
      if(!active) {
        return;
      }

      _(level.game_objects).each(function(game_object){
        game_object.update();
      });
    }

    return level;
  };
});