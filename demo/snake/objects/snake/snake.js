'use strict';

define(['engine/engine', './head', './body', './controls'],
function(engine, head, body, controls){
  return function(){
    var snake = engine.gameObject('snake');

    snake.addComponent('head', head());
    snake.addComponent('body', body());
    snake.addComponent('controls', controls);

    return snake;
  }
});
