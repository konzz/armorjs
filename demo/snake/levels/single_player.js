'use strict';

define(['engine/engine', 'objects/snake/snake'], function(engine, snake){

  var level = engine.level('single_player');
  level.addGameObject(snake);

  return level;
});
