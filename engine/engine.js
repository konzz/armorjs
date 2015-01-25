'use strict';

define(['engine/game', 'engine/level', 'engine/game_object', 'engine/time'],
function(game, level, game_object, time, canvas){
  return {
    game: game,
    level: level,
    game_object: game_object,
    time: time
  };
});
