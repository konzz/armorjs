'use strict';

define(['engine/time'], function(time){
  describe('time', function(){

    var frameCallback;
    beforeEach(function(){

      spyOn(window, 'requestAnimationFrame').and.callFake(function(callback){
        frameCallback = callback;
      });

      time.start();

    });

    describe('start', function(){
      it('should call requestAnimationFrame', function(){
        time.start();
        expect(window.requestAnimationFrame).toHaveBeenCalled();
      });

      it('should call requestAnimationFrame with a callback that calls again to requestAnimationFrame with himself', function(){
        time.start();
        expect(window.requestAnimationFrame.calls.count()).toBe(2);
        frameCallback()
        expect(window.requestAnimationFrame.calls.count()).toBe(3);
        expect(window.requestAnimationFrame.calls.mostRecent().args[0]).toBe(frameCallback);
      });
    });

    describe('onStep', function(){
      it('should call the callbacks using requestAnimationFrame()', function(){
        var spy = jasmine.createSpy('updateGameObject');

        time.onStep(spy);

        frameCallback(0);

        expect(spy).toHaveBeenCalled();
      });
    });

    describe('deltaTime', function(){

      it('should be the time since last frame in seconds with 3 decimals precision', function(){
        frameCallback(0);
        frameCallback(1000);

        expect(time.deltaTime).toBe(1);

        frameCallback(1505);

        expect(time.deltaTime).toBe(0.505);

        frameCallback(2300);

        expect(time.deltaTime).toBe(0.795);
      });

    });
  });
});
