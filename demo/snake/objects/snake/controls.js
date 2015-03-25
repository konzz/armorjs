'use strict';

define(['mousetrap'], function(mousetrap){
  var controls = {
    init: function(){
      mousetrap.bind('a', controls.gameObject.components.head.turnLeft);
      mousetrap.bind('d', controls.gameObject.components.head.turnRight);
    }
  }

  return controls;
});
