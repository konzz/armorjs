'use strict';

define(function(){
  var instance = null;

  var timer = {

  };

  if(instance === null){
    instance = timer;
  }

  return function(){ return {};};
});