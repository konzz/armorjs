define(['engine/engine', 'objects/snake/snake'],function(engine, snake){
  'use strict';
  var level = engine.level('single_player');
  level.addGameObject(snake(0, 0));

  return level;
});
