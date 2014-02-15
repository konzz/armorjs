'use strict';

define(['framework/level'], function(_level){
  describe('level module', function(){

    var level;
    var game_object;

    beforeEach(function(){
      level = _level('test_level');
      game_object = { render: function(){} };
      spyOn(game_object, 'render');
    });

    it('should have a name', function(){
      expect(level.name).toBe('test_level');
    });

    it('should be able to store game_objects', function(){
      level.add_game_object(game_object);
      expect(level.game_objects[0]).toBe(game_object);
    });

    describe('when activating the level', function(){
      it('should call render on each game_object', function(){
        level.add_game_object(game_object);
        expect(game_object.render).not.toHaveBeenCalled();
        level.active();

        waitsFor(function() {
          return game_object.render.callCount > 1;
        }, 'Render should be called', 100);
        
        runs(function(){
          expect(game_object.render).toHaveBeenCalled();
        });

      });
    });

    describe('when desactivating the level', function(){
      it('should stop calling render on each game_object', function(){
        level.add_game_object(game_object);
        
        var call_count;
        var wait = false;
        level.active();

        waitsFor(function() {
          return game_object.render.callCount > 1;
        }, 'Render should be called', 100);
        
        runs(function(){
          level.unactive();
          call_count = game_object.render.callCount;
          
          setTimeout(function() {
            wait = true;
          }, 25);

        });

        waitsFor(function() {
          return wait;
        }, 'Wainting to see if there is no more calls', 100);

        runs(function(){
          expect(game_object.render.callCount).toBe(call_count);
        });

      });
    });

  });
});