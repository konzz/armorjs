define(['engine/engine', 'objects/snake/snake', 'objects/apple/apple'],
  function(engine, snake, appleComponent){
    'use strict';
    var level = engine.level('single_player');
    level.addGameObject(snake(100, 150));

    var apple = engine.gameObject('apple', {position: engine.v2.new(200, 200)});
    apple.addComponent('apple', appleComponent());
    level.addGameObject(apple);

    return level;
  });
