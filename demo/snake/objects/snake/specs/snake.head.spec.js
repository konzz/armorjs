define(['../snake', 'engine/engine', 'engine/mocks'], function(snake, engine, mocks){
  'use strict';
  describe('snake head', function(){

    var head;
    var timeSpy;
    var snakeObject;
    beforeEach(function(){
      snakeObject = snake(25,10);
      timeSpy = spyOn(Date, 'now').and.returnValue(0);
      head = snakeObject.components.head;
      head.ctx = mocks.ctx;
    });

    describe('update', function(){
      it('should draw the head of the snake', function(){
        spyOn(mocks.ctx, 'rect');
        head.update();

        expect(mocks.ctx.rect)
        .toHaveBeenCalledWith(
          snakeObject.position.x,
          snakeObject.position.y,
          snakeObject.width,
          snakeObject.height
        );
      });

      it('should move the head if enought time has past since last movement', function(){
        head.moveRate = 100;
        expect(snakeObject.position.x).toBe(25);

        timeSpy.and.returnValue(100);
        head.update();
        expect(snakeObject.position.x).toBe(35);

        timeSpy.and.returnValue(199);
        head.update();
        expect(snakeObject.position.x).toBe(35);

        timeSpy.and.returnValue(200);
        head.update();
        expect(snakeObject.position.x).toBe(45);
      });

      it('should check for body colisions', function(){
        spyOn(head, 'checkBodyCollisions');
        head.update();
        expect(head.checkBodyCollisions).toHaveBeenCalled();
      });
    });

    describe('checkBodyCollisions()', function(){
      describe('when the head hits the body', function(){
        it('should call die()', function(){
          var position = engine.v2.new(10, 10);
          snakeObject.components.body.addLink();
          spyOn(head, 'die');

          snakeObject.position = position;
          snakeObject.components.body.links[0].position = position;

          head.checkBodyCollisions();

          expect(head.die).toHaveBeenCalled();
        });
      });

      describe('when the head does not collide with the body', function(){
        it('should not call die()', function(){
          snakeObject.components.body.addLink();
          snakeObject.position.x = 100;
          spyOn(head, 'die');

          head.checkBodyCollisions();

          expect(head.die).not.toHaveBeenCalled();
        });
      });
    });

    describe('die()', function(){
      it('stops the snake', function(){
        spyOn(snakeObject.components.body, 'updatePosition');
        spyOn(head, 'move');
        head.moveRate = 0;
        head.die();
        head.update();

        expect(head.move).not.toHaveBeenCalled();
        expect(snakeObject.components.body.updatePosition).not.toHaveBeenCalled();
      });
    });

    describe('turning', function(){
      describe('turnLeft()', function(){
        it('should change the snake head direction to the left', function(){
          head.velocity = engine.v2.new(10, 0);
          head.turnLeft();
          expect(head.velocity.x).toBe(0);
          expect(head.velocity.y).toBe(-10);
        });
      });

      describe('turnRight()', function(){
        it('should change the snake head direction to the left', function(){
          head.velocity = engine.v2.new(10, 0);
          head.turnRight();
          expect(head.velocity.x).toBe(0);
          expect(head.velocity.y).toBe(10);
        });
      });
    });
  });
});
