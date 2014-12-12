'use strict';

define(['engine/engine', 'underscore', 'jquery'], function(engine, _, $){
  describe('engine', function(){
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
      it('should define the ctx that is the 2d context of the canvas', function(){
        var element_ctx = canvas.getContext('2d');
        expect(game.ctx).toBe(element_ctx);
      });

      describe('play', function(){
        it('should activate that level', function(){
          var level = game.level('loading_screen');
          spyOn(level, 'play');
          
          game.play('loading_screen');

          expect(level.play).toHaveBeenCalled();
        });

        it('should stop the current level', function(){
          var loading_screen = game.level('loading_screen');
          spyOn(loading_screen, 'stop');

          game.level('first_map');
          
          game.play('loading_screen');
          game.play('first_map');

          expect(loading_screen.stop).toHaveBeenCalled();
        });

        describe('level()', function(){
          it('it returns a new level', function(){
            var level = game.level('intro');
            expect(level.name).toBe('intro');
          });

          it('adds it to the level list of the game', function(){
            var level = game.level('intro');
            expect(level).toBe(game.levels['intro']);
          });

          it('adds the canvas context to the level', function(){
            var level = game.level('intro');
            expect(level.ctx).toBe(game.ctx);
          });
        });
      });
    });
  });
});