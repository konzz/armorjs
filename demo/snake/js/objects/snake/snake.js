'use strict';

define(['engine/engine', './body'], function(engine, body){
  var snake = engine.game_object('snake');

  snake.add_component('body', body());

  return snake;
});
