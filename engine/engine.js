'use strict';

define(['./game', './level', './game_object', './time', './vector2'],
function(game, level, game_object, time, v2){
  return {
    game: game,
    level: level,
    game_object: game_object,
    time: time,
    v2: v2
  };
});
