define(function(){
  'use strict';

  return function(){

    var snake;

    var apple = {

      init: function(){
        snake = consumable.gameObject.search('snake');
      },

      update: function(){
        var snakePos = snake.position;
        var applePos = apple.gameObject.position;
        if(snakePos.x === applePos.x && snakePos.y === applePos.y){
          apple.eaten();
        }
      },

      eaten: function(){

      }
    };

    return consumable;
  };
});
