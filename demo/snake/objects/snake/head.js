'use strict';

define(['engine/engine', 'jquery'], function(engine, $){

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

      position: engine.v2.new(25, 25),
      width: width,
      height: height,
      direction: 'right',
      moveRate: 100,

      update: function(){
        if(lastMovement + head.moveRate <= Date.now()){
          head.gameObject.components.body.updatePosition();
          
          if(head.gameObject.components.body.links.length < 50){
            var pos = engine.v2.new(25, 25);
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
    }

    function directionIndex(){
      return directions.indexOf(head.direction);
    }

    function move(){
      head.position.add(velocities[head.direction]);
      lastMovement =  Date.now();
      canTurn = true;
    }

    function draw() {
      head.ctx.beginPath();
      head.ctx.rect(head.position.x, head.position.y, head.width, head.height);
      head.ctx.fillStyle = "#25ACE3";
      head.ctx.fill();
      head.ctx.closePath();
      head.ctx.stroke();
    }

    return head;
  }
});
