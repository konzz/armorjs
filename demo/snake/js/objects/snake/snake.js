'use strict';

define(['engine/engine', './body'], function(engine, body){
  var snake = engine.game_object('snake');

  snake.addComponent('body', body());

  return snake;
});
