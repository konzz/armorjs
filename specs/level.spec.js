'use strict';

define(['engine/engine'], function(engine){
  describe('level module', function(){

    var level;
    var level_update_method;

    beforeEach(function(){
      
      spyOn(engine.time, 'onStep').and.callFake(function(callback){
        level_update_method = callback;
      });

      level = engine.level('test_level');
    });

    it('should have a name', function(){
      expect(level.name).toBe('test_level');
    });
    
    describe('addGameObject', function(){
      it('should add the game to the list', function(){
        var bullet = engine.game_object('bullet');
        level.addGameObject(bullet);
        expect(level.objects[0]).toBe(bullet);
      });
    });
    
    describe('setCtx', function(){
    
      it('should store the ctx and set it to all the game objects', function(){
        var bullet = engine.game_object('bullet');
        level.addGameObject(bullet);
        var ctx = {};
        level.setCtx(ctx);
        expect(level.ctx).toBe(ctx);
        expect(bullet.ctx).toBe(ctx);
      });
    });

    describe('when playing the level', function(){
      it('should call update on each game_object', function(){
        
        var gameObject = engine.game_object('game_object');
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
        var gameObject = engine.game_object('game_object');
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