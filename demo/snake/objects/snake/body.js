define(['engine/engine', 'underscore'], function(engine, _){
  'use strict';
  return function(){

    var body = {

      links: [],

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

      addLink: function(v2){
        this.links.push({
          position: v2
        });
      }
    };

    function drawLink(link) {
      body.ctx.beginPath();
      body.ctx.rect(link.position.x, link.position.y, body.gameObject.width, body.gameObject.height);
      body.ctx.fillStyle = "#25ACE3";
      body.ctx.fill();
      body.ctx.closePath();
      body.ctx.stroke();
    }

    return body;
  };
});
