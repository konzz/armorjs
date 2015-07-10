define(['./game', './level', './gameObject', './time', './vector2'],
function(game, level, gameObject, time, v2){
  'use strict';
  return {
    game: game,
    level: level,
    gameObject: gameObject,
    time: time,
    v2: v2
  };
});
