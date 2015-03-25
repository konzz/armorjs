'use strict';

define(['engine/engine', 'jquery'], function(engine, $){

  return function(){
    
    var width = 10;
    var height = 10;
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
      moveRate: 500,

      update: function(){
        if(lastMovement + head.moveRate <= Date.now()){
          move();
        }
        drawLink(head);
      },

      turnRight: function(direction){
        var currentDirectionIndex = directions.indexOf(head.direction);

        if(currentDirectionIndex === 3) currentDirectionIndex = -1;
        
        head.direction = directions[currentDirectionIndex + 1];
      },

      turnLeft: function(){
        var currentDirectionIndex = directions.indexOf(head.direction);

        if(currentDirectionIndex === 0) currentDirectionIndex = 4;
        
        head.direction = directions[currentDirectionIndex - 1];
      }
    }

    function move(){
      head.position.add(velocities[head.direction]);
      lastMovement =  Date.now();
    }

    function drawLink(link) {
      head.ctx.beginPath();
      head.ctx.rect(link.position.x, link.position.y, link.width, link.height);
      head.ctx.fillStyle = "#25ACE3";
      head.ctx.fill();
      head.ctx.closePath();
      head.ctx.stroke();
    }

    return head;
  }
});
