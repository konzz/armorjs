'use strict';

define(['engine/engine'], function(engine){
    var link_size = 5;
    var body = {

      position: engine.v2.new(25, 25),
      velocity: engine.v2.new(5, 0),

      update: function(){
        body.position.add(body.velocity);
        draw();
      }
    }

    function draw() {
      body.ctx.beginPath();
      body.ctx.rect(body.position.x, body.position.y, link_size, link_size);
      body.ctx.fill();
      body.ctx.closePath();
    }

    return body;
});
