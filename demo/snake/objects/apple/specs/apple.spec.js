define(['../apple','engine/engine', 'engine/mocks'], function(appleComponent, engine, mocks){
  'use strict';

  describe('apple', function(){

    var appleObject;
    var level;
    beforeEach(function(){
      level = engine.level('test_level');

      var snake = engine.gameObject('snake', {position: {x: 0, y: 0}});
      appleObject = engine.gameObject('apple', {position: {x: 0, y: 0}});

      level.addGameObject(snake);
      level.addGameObject(appleObject);
      level.play();
    });

    describe('when in the same position as the snake head', function(){
      it('will call eaten in the component', function(){

        var apple = appleComponent();
        spyOn(apple, 'eaten');
        appleObject.addComponent('consumable', apple);
        apple.init();
        apple.checkEaten();
        expect(apple.eaten).toHaveBeenCalled();
      });
    });

  });

});
