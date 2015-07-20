define(['engine/engine', 'underscore'], function(engine, _){
  'use strict';
  return function(){

    var canTurn = true;
    var lastMovement = 0;

    var head = {
      moveRate: 100,
      color: "#DB303C",
      alive: true,

      update: function(){
        if(!head.alive){
          return;
        }

        if(lastMovement + head.moveRate <= Date.now()){
          head.gameObject.components.body.updatePosition();
          head.move();
        }

        head.draw();
        head.checkBodyCollisions();
      },

      checkBodyCollisions: function(){
        var links = head.gameObject.components.body.links;
        _(links).each(function(link){
          var sameX = link.position.x === head.gameObject.position.x;
          var sameY = link.position.y === head.gameObject.position.y;
          if(sameX && sameY){
            head.die();
          }
        });
      },

      die: function(){
        head.alive = false;
      },

      turnRight: function(direction){
        if(!canTurn) {return;}
        var x = head.velocity.x;
        var y = head.velocity.y * - 1;
        head.velocity.x = y;
        head.velocity.y = x;
        canTurn = false;
      },

      turnLeft: function(){
        if(!canTurn) {return;}
        var x = head.velocity.x * - 1;
        var y = head.velocity.y;
        head.velocity.x = y;
        head.velocity.y = x;
        canTurn = false;
      },

      move: function(){
        if(!head.velocity){
          head.velocity = engine.v2.new(head.gameObject.width, 0);
        }

        head.gameObject.position.add(head.velocity);
        lastMovement =  Date.now();
        canTurn = true;
      },

      draw: function() {
        var position = head.gameObject.position;
        head.ctx.beginPath();
        head.ctx.rect(position.x, position.y, head.gameObject.width, head.gameObject.height);
        head.ctx.fillStyle = head.color;
        head.ctx.fill();
        head.ctx.closePath();
        head.ctx.stroke();
      }

    };

    return head;
  };
});
