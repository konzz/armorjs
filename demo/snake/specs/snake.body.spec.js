'use strict';

define(['objects/snake/body', 'engine/engine', 'engine/mocks'], function(body, engine, mocks){
  describe('snake body', function(){

    var snake_body;
    beforeEach(function(){
      snake_body = body();
      snake_body.ctx = mocks.ctx;
    })
    
    describe('update', function(){
      it('should add the velocity to the position', function(){
        expect(snake_body.position.x).toBe(25);
        expect(snake_body.velocity.x).toBe(10);
        
        snake_body.update();

        expect(snake_body.position.x).toBe(35);
      })
    });

  });
});
