'use strict';

define(['underscore'], function(_){
  var v2 = {
    add: function(a, b){
      if(b){
        return this.new(a.x + b.x, a.y + b.y);
      }
      this.x += a.x;
      this.y += a.y;
    },
    new: function(x, y){
      var v = _.clone(v2);
      v.x = x;
      v.y = y;
      return v;
    }
  };

  return v2;
});
