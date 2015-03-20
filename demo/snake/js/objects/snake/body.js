'use strict';

define(['engine/engine'], function(engine){
    return function(){
      var link_size = 10;
      var head = {

        position: engine.v2.new(25, 25),
        velocity: engine.v2.new(link_size, 0),

        update: function(){
          head.position.add(head.velocity);
          draw();
        },

        links: [],
        add_boyd_link: function(){}
      }

      function body_link(x, y, duration){
        return {
          position: engine.v2.new(x, y),
          duration: duration
        }
      }

      function draw() {
        head.ctx.beginPath();
        head.ctx.rect(head.position.x, head.position.y, link_size, link_size);
        head.ctx.fill();
        head.ctx.closePath();
      }

      return head;
    }
});
