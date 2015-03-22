'use strict';

define(['engine/engine', 'levels/single_player'], function(engine, single_player){

  var game = engine.game('viewport');
  game.addLevel(single_player);

  game.play('single_player');
});
