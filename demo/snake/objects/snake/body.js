define(['engine/engine', 'underscore'], function(engine, _){
  'use strict';
  return function(){

    var body = {

      links: [],
      color: "#25ACE3",

      update: function(){
        _(body.links).each(drawLink);
      },

      updatePosition: function(){
        body.links.reverse();

        _(body.links).each(function(link, index){
          var position = body.gameObject.position;
          if((index+1) === body.links.length){
            link.position.x = position.x;
            link.position.y = position.y;
            return;
          }

          link.position.x = body.links[index+1].position.x;
          link.position.y = body.links[index+1].position.y;
        });

        body.links.reverse();
      },

      addLink: function(){
        body.links.push({
          position: engine.v2.new(-10,-10)
        });
      }
    };

    function drawLink(link) {
      body.ctx.beginPath();
      body.ctx.rect(link.position.x, link.position.y, body.gameObject.width, body.gameObject.height);
      body.ctx.fillStyle = body.color;
      body.ctx.fill();
      body.ctx.closePath();
      body.ctx.stroke();
    }

    return body;
  };
});
