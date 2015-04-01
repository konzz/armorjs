'use strict';

define(['../snake', 'engine/engine', 'engine/mocks'],
function(snakeFactory, engine, mocks){
  describe('snake body', function(){

    var snakeBody;
    var snake;
    beforeEach(function(){
      snake = snakeFactory();
      snakeBody = snake.components.body;
      snakeBody.ctx = mocks.ctx;
    })

    describe('addLink', function(){
      it('should add a link to the body with the head position', function(){
        expect(snakeBody.links.length).toBe(0);
        snakeBody.addLink(engine.v2.new(10, 10));
        expect(snakeBody.links.length).toBe(1);
        expect(snakeBody.links[0].position.x).toBe(10);
        expect(snakeBody.links[0].position.y).toBe(10);
      });
    });

    describe('update', function(){
      it('should draw every link', function(){
        spyOn(mocks.ctx, 'rect');

        snakeBody.addLink(engine.v2.new(20,30));
        snakeBody.addLink(engine.v2.new(30,30));
        snakeBody.update();

        expect(mocks.ctx.rect)
        .toHaveBeenCalledWith(
          snakeBody.links[0].position.x,
          snakeBody.links[0].position.y,
          snakeBody.linksWidth,
          snakeBody.linksHeight
        );

        expect(mocks.ctx.rect)
        .toHaveBeenCalledWith(
          snakeBody.links[1].position.x,
          snakeBody.links[1].position.y,
          snakeBody.linksWidth,
          snakeBody.linksHeight
        );
      });
    });

    describe('updatePosition()', function(){
      it('should move the first link to the head position', function(){
        snake.components.head.position = engine.v2.new(10, 10)
        snakeBody.addLink(engine.v2.new(0,10));
        snakeBody.updatePosition();
        expect(snakeBody.links[0].position.x).toBe(snake.components.head.position.x);
        expect(snakeBody.links[0].position.y).toBe(snake.components.head.position.y);
      });

      it('should move the others links to the previous link position', function(){
        snake.components.head.position = engine.v2.new(20, 10)
        snakeBody.addLink(engine.v2.new(10,10));
        snakeBody.addLink(engine.v2.new(0,10));
        
        snakeBody.updatePosition();
        
        expect(snakeBody.links[1].position.x).toBe(10);
        expect(snakeBody.links[1].position.y).toBe(10);
      });
    });
  });
});
