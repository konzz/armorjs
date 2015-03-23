'use strict';

define(['keypress'], function(keypress){
  var controls = {
    init: function(){

      var listener = new keypress.Listener();
      listener.simple_combo('a', this.gameObject.components.head.turnLeft)
      listener.simple_combo('d', this.gameObject.components.head.turnRight)
    }
  }

  return controls;
});
