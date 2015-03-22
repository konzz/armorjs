'use strict';

define(['objects/snake/body', 'engine/engine', 'engine/mocks'], function(body, engine, mocks){
  describe('snake body', function(){

    var snakeBody;
    var timeSpy;
    beforeEach(function(){
      timeSpy = spyOn(Date, 'now').and.returnValue(0);
      snakeBody = body();
      snakeBody.ctx = mocks.ctx;
    })

    describe('update', function(){
      it('should draw the head of the snake', function(){
        spyOn(mocks.ctx, 'rect');
        snakeBody.update();

        expect(mocks.ctx.rect)
        .toHaveBeenCalledWith(
          snakeBody.position.x,
          snakeBody.position.y,
          snakeBody.size,
          snakeBody.size
        );
      });

      it('should move the head if enought time has past since last movement', function(){
        snakeBody.moveRate = 100;
        expect(snakeBody.direction).toBe('right');
        expect(snakeBody.position.x).toBe(25);

        timeSpy.and.returnValue(100);
        snakeBody.update();
        expect(snakeBody.position.x).toBe(35);

        timeSpy.and.returnValue(199);
        snakeBody.update();
        expect(snakeBody.position.x).toBe(35);

        timeSpy.and.returnValue(200);
        snakeBody.update();
        expect(snakeBody.position.x).toBe(45);
      });
    });

  });
});
