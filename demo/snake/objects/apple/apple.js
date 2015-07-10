define(function(){
  'use strict';

  return function(){

    var snakeHead;

    var consumable = {

      init: function(){
        snakeHead = consumable.gameObject.search('snake').components.head;
      },

      update: function(){

      },

      eaten: function(){

      }
    };

    return consumable;
  };
});
