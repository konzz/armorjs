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

    describe('setCanvas', function(){

      it('should store the canvas and set the context to all the game objects', function(){
        var bullet = engine.game_object('bullet');
        level.addGameObject(bullet);
        var canvas = $('<canvas id="game_canvas"></canvas>')[0];
        level.setCanvas(canvas);
        expect(level.canvas).toBe(canvas);
        expect(bullet.ctx).toBe(canvas.getContext('2d'));
      });
    });

    describe('when playing the level', function(){
      var canvas;

      beforeEach(function(){
        canvas = $('<canvas id="game_canvas"></canvas>')[0];
        level.setCanvas(canvas);
      });

      it('should call update on each game_object', function(){

        var gameObject = engine.game_object('game_object');
        level.addGameObject(gameObject);

        spyOn(gameObject, 'update');

        expect(gameObject.update).not.toHaveBeenCalled();

        level.play();
        level_update_method();

        expect(gameObject.update).toHaveBeenCalled();
      });

      it('should clear the canvas on each step', function(){


        var ctx = canvas.getContext('2d');
        spyOn(ctx, 'clearRect');

        level.play();
        level_update_method();

        expect(ctx.clearRect).toHaveBeenCalledWith(0,0,canvas.width,canvas.height);
      });

    });

    describe('when stoping the level', function(){
      it('should stop calling update on each game_object', function(){
        var canvas = $('<canvas id="game_canvas"></canvas>')[0];
        level.setCanvas(canvas);

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
