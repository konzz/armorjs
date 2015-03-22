'use strict';

define(['underscore'], function(_){
  return function(name){

    var game_object = {

      name: name,

      components: {},

      position: {x: 0, y:0},

      addComponent: function(key, component) {
        component.object = this;
        this.components[key] = component;
      },

      setCtx: function(ctx){
        this.ctx = ctx;
        _(this.components).each(function(component){
          component.ctx = ctx;
        });
      },

      init: function(){
        _(this.components).each(function(component){
          if(component.init){
            component.init();
          }
        });
      },

      update: function(){
        _(this.components).each(function(component){
          if(component.update){
            component.update();
          }
        });
      }
    };

    return game_object;
  };
});
