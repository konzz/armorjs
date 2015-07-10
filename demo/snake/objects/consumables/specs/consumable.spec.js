define(['../consumable','engine/engine', 'engine/mocks'], function(consumableFactory, engine, mocks){
  'use strict';

  describe('consumable', function(){

    var gameObject;
    beforeEach(function(){
      var level = engine.level('test_level');

      snake = engine.gameObject('snake');
      snake.addComponent('head', {position: {x: 0, y: 0}});

      level.addGameObject();
    });

    describe('when in the same position as the snake head', function(){
      it('will call eaten in the component', function(){
        var pie = engine.gameObject('pie');
        var consumable = consumableFactory();
        pie.addComponent('consumable', consumable);
      });
    });

  });

});
