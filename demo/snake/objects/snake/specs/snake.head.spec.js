'use strict';

define(['../snake', 'engine/engine', 'engine/mocks'], function(snake, engine, mocks){
  describe('snake head', function(){

    var snakeHead;
    var timeSpy;
    beforeEach(function(){
      timeSpy = spyOn(Date, 'now').and.returnValue(0);
      snakeHead = snake().components.head;
      snakeHead.ctx = mocks.ctx;
    })

    describe('update', function(){
      it('should draw the head of the snake', function(){
        spyOn(mocks.ctx, 'rect');
        snakeHead.update();

        expect(mocks.ctx.rect)
        .toHaveBeenCalledWith(
          snakeHead.position.x,
          snakeHead.position.y,
          snakeHead.width,
          snakeHead.height
        );
      });

      it('should move the head if enought time has past since last movement', function(){
        snakeHead.moveRate = 100;
        expect(snakeHead.direction).toBe('right');
        expect(snakeHead.position.x).toBe(25);

        timeSpy.and.returnValue(100);
        snakeHead.update();
        expect(snakeHead.position.x).toBe(35);

        timeSpy.and.returnValue(199);
        snakeHead.update();
        expect(snakeHead.position.x).toBe(35);

        timeSpy.and.returnValue(200);
        snakeHead.update();
        expect(snakeHead.position.x).toBe(45);
      });
    });

    describe('turning', function(){
      describe('turnLeft()', function(){
        it('should change the snake head direction to the left', function(){
          expect(snakeHead.direction).toBe('right');
          snakeHead.turnLeft();
          expect(snakeHead.direction).toBe('up');
        });
      });

      describe('turnRight()', function(){
        it('should change the snake head direction to the left', function(){
          expect(snakeHead.direction).toBe('right');
          snakeHead.turnRight();
          expect(snakeHead.direction).toBe('down');
        });
      });

      it('cant turn twice before a movement', function(){
        snakeHead.moveRate = 0;

        expect(snakeHead.direction).toBe('right');
        snakeHead.turnLeft();
        expect(snakeHead.direction).toBe('up');
        snakeHead.turnLeft();
        expect(snakeHead.direction).toBe('up');
        snakeHead.turnRight();
        expect(snakeHead.direction).toBe('up');

        snakeHead.update();

        snakeHead.turnLeft();
        expect(snakeHead.direction).toBe('left');
      });
    })
  });
});
