'use strict';

define(['keypress'], function(keypress){
  var controls = {
    init: function(){

      var listener = new keypress.Listener();

      listener.simple_combo('w', move.bind(controls, 'up'))
      listener.simple_combo('a', move.bind(controls, 'left'))
      listener.simple_combo('s', move.bind(controls, 'down'))
      listener.simple_combo('d', move.bind(controls, 'right'))
    }
  }

  function move(direction){
    this.object.components.head.direction = direction;
  }

  return controls;
});
