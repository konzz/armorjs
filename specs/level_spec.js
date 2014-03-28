'use strict';

define(['level'], function(_level){
  describe('level module', function(){

    var level;

    beforeEach(function(){
      level = _level('test_level');
    });

    it('should have a name', function(){
      expect(level.name).toBe('test_level');
    });

    describe('object()', function(){
      it('should create and return new game object', function(){
        var player_object = level.object('player');
        expect(player_object.name).toBe('player');
      });

      it('should add it to the objects lists', function(){
        var player_object = level.object('player');
        expect(level.objects[0]).toBe(player_object);
      });
    });

    describe('when activating the level', function(){
      it('should call update on each game_object', function(){
        
        var game_object = level.object('game_object');
        spyOn(game_object, 'update');

        expect(game_object.update).not.toHaveBeenCalled();
        level.active();

        waitsFor(function() {
          return game_object.update.callCount > 1;
        }, 'update should be called', 100);
        
        runs(function(){
          expect(game_object.update).toHaveBeenCalled();
        });

      });
    });

    describe('when desactivating the level', function(){
      it('should stop calling update on each game_object', function(){
        var game_object = level.object('game_object');
        spyOn(game_object, 'update');
        
        var call_count;
        var wait = false;
        level.active();

        waitsFor(function() {
          return game_object.update.callCount > 1;
        }, 'update should be called', 100);
        
        runs(function(){
          level.unactive();
          call_count = game_object.update.callCount;
          
          setTimeout(function() {
            wait = true;
          }, 25);

        });

        waitsFor(function() {
          return wait;
        }, 'Wainting to see if there is no more calls', 100);

        runs(function(){
          expect(game_object.update.callCount).toBe(call_count);
        });

      });
    });

  });
});