define(['../snake', 'engine/engine', 'engine/mocks'], function(snake, engine, mocks){
  'use strict';
  describe('snake head', function(){

    var snakeHead;
    var timeSpy;
    var snakeObject;
    beforeEach(function(){
      snakeObject = snake(25,10);
      timeSpy = spyOn(Date, 'now').and.returnValue(0);
      snakeHead = snakeObject.components.head;
      snakeHead.ctx = mocks.ctx;
    });

    describe('update', function(){
      it('should draw the head of the snake', function(){
        spyOn(mocks.ctx, 'rect');
        snakeHead.update();

        expect(mocks.ctx.rect)
        .toHaveBeenCalledWith(
          snakeObject.position.x,
          snakeObject.position.y,
          snakeObject.width,
          snakeObject.height
        );
      });

      it('should move the head if enought time has past since last movement', function(){
        snakeHead.moveRate = 100;
        expect(snakeObject.position.x).toBe(25);

        timeSpy.and.returnValue(100);
        snakeHead.update();
        expect(snakeObject.position.x).toBe(35);

        timeSpy.and.returnValue(199);
        snakeHead.update();
        expect(snakeObject.position.x).toBe(35);

        timeSpy.and.returnValue(200);
        snakeHead.update();
        expect(snakeObject.position.x).toBe(45);
      });
    });

    describe('turning', function(){
      describe('turnLeft()', function(){
        it('should change the snake head direction to the left', function(){
          snakeHead.velocity = engine.v2.new(10, 0);
          snakeHead.turnLeft();
          expect(snakeHead.velocity.x).toBe(0);
          expect(snakeHead.velocity.y).toBe(-10);
        });
      });

      describe('turnRight()', function(){
        it('should change the snake head direction to the left', function(){
          snakeHead.velocity = engine.v2.new(10, 0);
          snakeHead.turnRight();
          expect(snakeHead.velocity.x).toBe(0);
          expect(snakeHead.velocity.y).toBe(10);
        });
      });
    });
  });
});
