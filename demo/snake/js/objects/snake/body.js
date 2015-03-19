'use strict';

define(function(){
    var body = {

      position: {x: 25, y: 25},

      update: function(){
        body.position.x++;
        draw();
      }
    }

    function draw() {
      body.ctx.beginPath();
      body.ctx.rect(body.position.x, body.position.y, 20, 10);
      body.ctx.fill();
      body.ctx.closePath();
    }

    return body;
});
