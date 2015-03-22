'use strict';

define(['engine/engine'], function(engine){

  return function(){
    
    var linkSize = 10;
    var lastMovement = Date.now();
    
    var velocities = {
      up: engine.v2.new(0, -linkSize),
      down: engine.v2.new(0, linkSize),
      left: engine.v2.new(-linkSize, 0),
      right: engine.v2.new(linkSize, 0)
    };

    var head = {

      position: engine.v2.new(25, 25),
      size: linkSize,
      direction: 'right',
      moveRate: 500,

      update: function(){
        if(lastMovement + head.moveRate <= Date.now()){
          move();
        }
        drawLink(head);
      },

      links: [],

      addLink: function(){}
    }

    function move(){
      head.position.add(velocities[head.direction]);
      lastMovement =  Date.now();
    }

    function bodyLink(x, y, duration){
      return {
        position: engine.v2.new(x, y),
        duration: duration,
        size: linkSize
      }
    }

    function drawLink(link) {
      head.ctx.beginPath();
      head.ctx.rect(link.position.x, link.position.y, link.size, link.size);
      head.ctx.fill();
      head.ctx.closePath();
    }

    return head;
  }
});
