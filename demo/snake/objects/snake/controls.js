'use strict';

define(['mousetrap'], function(mousetrap){
  var controls = {
    init: function(){
      mousetrap.bind('a', controls.getComponent('head').turnLeft);
      mousetrap.bind('d', controls.getComponent('head').turnRight);
    }
  }

  return controls;
});
