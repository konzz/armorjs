'use strict';

define(['engine/engine','underscore', 'jquery'], function(engine, _, $){
  describe('game', function(){
    var game, canvas;
    
    beforeEach(function(){
      canvas = $('<canvas id="game_canvas"></canvas>')[0];
      $(document.body).append(canvas);
      game = engine.game('game_canvas');
    });

    afterEach(function(){
      $(canvas).remove();
    });

    describe('game', function(){
      it('should get the canvas and store it', function(){
        expect(game.canvas).toBe(canvas);
      });

      describe('play', function(){
        it('should activate that level', function(){
          var level = engine.level('loading_screen');
          game.addLevel(level);
          spyOn(level, 'play');
          
          game.play('loading_screen');

          expect(level.play).toHaveBeenCalled();
        });

        it('should stop the current level', function(){
          var loading_screen = engine.level('loading_screen');
          var first_map = engine.level('first_map');

          game.addLevel(loading_screen);
          game.addLevel(first_map);
          
          spyOn(loading_screen, 'stop');
          
          game.play('loading_screen');
          game.play('first_map');

          expect(loading_screen.stop).toHaveBeenCalled();
        });

        describe('addLevel()', function(){

          it('adds it to the level list of the game', function(){
            var level = engine.level('test');
            game.addLevel(level);
            expect(level).toBe(game.levels['test']);
          });

          it('adds the canvas to the level', function(){
            var level = engine.level('test');
            game.addLevel(level);
            expect(level.canvas).toBe(game.canvas);
          });
        });
      });
    });
  });
});