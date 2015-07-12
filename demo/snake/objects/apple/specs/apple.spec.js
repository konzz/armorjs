define(['../consumable','engine/engine', 'engine/mocks'], function(consumableFactory, engine, mocks){
  'use strict';

  describe('apple', function(){

    var gameObject;
    beforeEach(function(){
      var level = engine.level('test_level');

      snake = engine.gameObject('snake');
      snake.addComponent('head', {position: {x: 0, y: 0}});

      level.addGameObject();
    });

    describe('when in the same position as the snake head', function(){
      it('will call eaten in the component', function(){
        var apple = engine.gameObject('apple');
        var consumable = consumableFactory();
        apple.addComponent('consumable', consumable);
      });
    });

  });

});
