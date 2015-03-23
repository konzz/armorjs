'use strict';

define(['engine/engine', './head', './controls'], function(engine, head, controls){
  var snake = engine.gameObject('snake');

  snake.addComponent('head', head());
  snake.addComponent('controls', controls);

  return snake;
});
