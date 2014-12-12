'use strict';

define(['engine/level', 'engine/game_object', 'engine/time'], function(_level, _game_object, time){
  describe('level module', function(){

    var level;
    var level_update_method;

    beforeEach(function(){
      
      spyOn(time, 'onStep').and.callFake(function(callback){
        level_update_method = callback;
      });

      level = _level('test_level');
    });

    it('should have a name', function(){
      expect(level.name).toBe('test_level');
    });

    describe('when playing the level', function(){
      it('should call update on each game_object', function(){
        
        var gameObject = _game_object('game_object');
        level.addGameObject(gameObject);
        
        spyOn(gameObject, 'update');

        expect(gameObject.update).not.toHaveBeenCalled();
        
        level.play();
        level_update_method();

        expect(gameObject.update).toHaveBeenCalled();
      });
    });

    describe('when stoping the level', function(){
      it('should stop calling update on each game_object', function(){
        var gameObject = _game_object('game_object');
        level.addGameObject(gameObject);

        spyOn(gameObject, 'update');

        level.play();
        level_update_method();

        expect(gameObject.update.calls.count()).toBe(1);

        level.stop();
        level_update_method();

        expect(gameObject.update.calls.count()).toBe(1);

      });
    });

  });
});