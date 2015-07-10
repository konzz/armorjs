define(['engine/engine', 'jquery'], function(engine, $){
  'use strict';
  return function(){

    var width = 10;
    var height = 10;

    var canTurn = true;
    var lastMovement = Date.now();
    var directions = ['up', 'right', 'down', 'left'];

    var velocities = {
      up: engine.v2.new(0, -height),
      down: engine.v2.new(0, height),
      left: engine.v2.new(-width, 0),
      right: engine.v2.new(width, 0)
    };

    var head = {

      width: width,
      height: height,
      direction: 'right',
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
        if(canTurn){
          head.direction = directions[directionIndex() + 1] || directions[0];
          canTurn = false;
        }
      },

      turnLeft: function(){
        if(canTurn){
          head.direction = directions[directionIndex() - 1] || directions[3];
          canTurn = false;
        }
      }
    };

    function directionIndex(){
      return directions.indexOf(head.direction);
    }

    function move(){
      var position = head.gameObject.position;
      position.add(velocities[head.direction]);
      lastMovement =  Date.now();
      canTurn = true;
    }

    function draw() {
      var position = head.gameObject.position;
      head.ctx.beginPath();
      head.ctx.rect(position.x, position.y, head.width, head.height);
      head.ctx.fillStyle = "#DB303C";
      head.ctx.fill();
      head.ctx.closePath();
      head.ctx.stroke();
    }

    return head;
  };
});
