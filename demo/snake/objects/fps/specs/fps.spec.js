define(['../fps', 'engine/engine', 'engine/mocks'],
function(fpsComponent, engine, mocks){
  describe('fps', function(){

    var timeSpy;
    var fps;
    beforeEach(function(){
      timeSpy = spyOn(Date, 'now').and.returnValue(0);
      fps = fpsComponent();
    });

    it('should draw the the amount of frames that happened last second', function(){
      spyOn(fps, 'draw');

      fps.init();
      fps.update();

      expect(fps.draw).toHaveBeenCalledWith(0);

      timeSpy.and.returnValue(1000);
      fps.update();

      expect(fps.draw).toHaveBeenCalledWith(2);

      fps.update();
      fps.update();
      timeSpy.and.returnValue(2000);
      fps.update();

      expect(fps.draw).toHaveBeenCalledWith(3);
    });
  });
});
