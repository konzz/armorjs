'use strict';

define(['engine/time'], function(time){
  describe('time module', function(){
    
    it('should be a singleton', function(){
      time.property = 'some value';
      var _time = requirejs('engine/time');
      expect(_time.property).toBe('some value');
    });

  });
});