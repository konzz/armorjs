'use strict';

define(['engine/engine', './head', './body', './controls'],
function(engine, head, body, controls){
  return function(x, y){
    var snake = engine.gameObject('snake');
    snake.x = x;
    snake.y = y;

    snake.addComponent('head', head());
    snake.addComponent('body', body());
    snake.addComponent('controls', controls);

    return snake;
  };
});
