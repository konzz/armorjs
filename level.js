'use strict';

define(['underscore', 'object'], function(_, object){
  return function(name){
    var active = false;
    var update_speed = 20;
    
    var level = {
      name: name,
      objects: [],
      
      object: function(name){
        var new_object = object(name);
        this.objects.push(new_object);
        return new_object;
      },

      active: function(){
        if(!active){
          active = window.setInterval(update_objects, update_speed);
        }
      },

      unactive: function(){
        window.clearInterval(active);
        active = false;
      }
    };


    function update_objects(){
      if(!active) {
        return;
      }

      _(level.objects).each(function(object){
        object.update();
      });
    }

    return level;
  };
});