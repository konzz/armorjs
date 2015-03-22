'use strict';

define(['engine/engine', './body'], function(engine, body){
  var snake = engine.gameObject('snake');

  snake.addComponent('body', body());

  return snake;
});
