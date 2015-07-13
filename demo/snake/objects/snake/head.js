define(['engine/engine', 'jquery'], function(engine, $){
  'use strict';
  return function(){

    var canTurn = true;
    var lastMovement = 0;

    var head = {
      moveRate: 100,
      color: "#DB303C",

      update: function(){
        if(lastMovement + head.moveRate <= Date.now()){
          head.gameObject.components.body.updatePosition();
          move();
        }
        draw();
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
      }
    };

    function move(){
      if(!head.velocity){
        head.velocity = engine.v2.new(head.gameObject.width, 0);
      }

      head.gameObject.position.add(head.velocity);
      lastMovement =  Date.now();
      canTurn = true;
    }

    function draw() {
      var position = head.gameObject.position;
      head.ctx.beginPath();
      head.ctx.rect(position.x, position.y, head.gameObject.width, head.gameObject.height);
      head.ctx.fillStyle = head.color;
      head.ctx.fill();
      head.ctx.closePath();
      head.ctx.stroke();
    }

    return head;
  };
});
