define(['engine/engine', 'jquery'], function(engine, $){
  'use strict';
  return function(){

    var canTurn = true;
    var lastMovement = Date.now();

    var head = {
      moveRate: 100,

      update: function(){
        if(lastMovement + head.moveRate <= Date.now()){
          head.gameObject.components.body.updatePosition();

          if(head.gameObject.components.body.links.length < 10){
            var pos = engine.v2.new(0, 0);
            head.gameObject.components.body.addLink(pos);
          }

          move();
        }
        draw();
      },

      turnRight: function(direction){
        var x = head.velocity.x;
        var y = head.velocity.y * - 1;
        head.velocity.x = y;
        head.velocity.y = x;
      },

      turnLeft: function(){
        var x = head.velocity.x * - 1;
        var y = head.velocity.y;
        head.velocity.x = y;
        head.velocity.y = x;
      }
    };

    function directionIndex(){
      return directions.indexOf(head.direction);
    }

    function move(){
      if(!head.velocity){
        head.velocity = engine.v2.new(head.gameObject.width, 0);
      }

      var position = head.gameObject.position;
      position.add(head.velocity);
      lastMovement =  Date.now();
      canTurn = true;
    }

    function draw() {
      var position = head.gameObject.position;
      head.ctx.beginPath();
      head.ctx.rect(position.x, position.y, head.gameObject.width, head.gameObject.height);
      head.ctx.fillStyle = "#DB303C";
      head.ctx.fill();
      head.ctx.closePath();
      head.ctx.stroke();
    }

    return head;
  };
});
