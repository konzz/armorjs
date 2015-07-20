define(['underscore', 'engine/engine'], function(_, engine){
  'use strict';

  return function(){

    var snake;

    var apple = {

      color: "#D1E751",

      init: function(){
        snake = apple.gameObject.search('snake')[0];
      },

      update: function(){
        checkEaten();
        draw();
      },

      checkEaten: function(){
        var sameX = apple.gameObject.position.x === snake.position.x;
        var sameY = apple.gameObject.position.y === snake.position.y;

        if(sameX && sameY){
          apple.eaten();
        }
      },

      eaten: function(){
        snake.components.body.addLink();
        apple.gameObject.position = randomPosition();
      }
    };

    function randomPosition(){
      var canvasWidth = 800;
      var canvasHeight = 600;

      var maxWidth = canvasWidth / apple.gameObject.width;
      var maxHeight = canvasHeight / apple.gameObject.height;

      var x = _.random(1, maxWidth) * apple.gameObject.width;
      var y = _.random(1, maxHeight) * apple.gameObject.height;
      return engine.v2.new(x, y);
    }

    function draw(){
      apple.ctx.beginPath();
      apple.ctx.rect(apple.gameObject.position.x, apple.gameObject.position.y, apple.gameObject.width, apple.gameObject.height);
      apple.ctx.fillStyle = apple.color;
      apple.ctx.fill();
      apple.ctx.closePath();
      apple.ctx.stroke();
    }

    return apple;
  };
});
