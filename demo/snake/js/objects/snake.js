'use strict';

define(['engine/engine'], function(engine){
  var snake = engine.game_object('snake');

  snake.add_component('body', {
    update: function(){
      this.ctx.rect(20,20,150,100);
      this.ctx.stroke();
    }
  });

  return snake;
});