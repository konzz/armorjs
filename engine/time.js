'use strict';

define(['underscore'], function(_){

  var callbacks = [];
  var lastFrame;

  var time = {
    startTime: undefined,
    deltaTime: undefined,

    onStep: function(callback){
      callbacks.push(callback);
    },

    start: function(){
      window.requestAnimationFrame(step);
    }
  };

  function step(timestamp){
    if(time.startTime === undefined){
      time.startTime = timestamp;
    }

    if(lastFrame === undefined){
      lastFrame = timestamp;
    }

    time.deltaTime = (timestamp - lastFrame) / 1000;
    lastFrame = timestamp;

    _(callbacks).each(function(callback){
      callback();
    });

    window.requestAnimationFrame(step);
  }

  return time;
});
