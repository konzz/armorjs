define(['engine/engine', 'objects/snake/snake', 'objects/apple/apple', 'objects/fps/fps'],
  function(engine, snake, appleComponent, fpsComponent){
    'use strict';
    var level = engine.level('single_player');
    level.addGameObject(snake(100, 150));

    var apple = engine.gameObject('apple', {position: engine.v2.new(200, 200)});
    apple.addComponent('apple', appleComponent());
    level.addGameObject(apple);

    var fps = engine.gameObject('fps', {position: engine.v2.new(0, 10)});
    fps.addComponent('fps', fpsComponent());
    level.addGameObject(fps);

    return level;
  });
