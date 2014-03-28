'use strict';

define(['object'], function(_object){
  describe('object module', function(){

    var object;
    var component;

    beforeEach(function(){
      object = _object('test_object');
      component = {active: true, update: function(){}};
    });

    it('should have a name', function(){
      expect(object.name).toBe('test_object');
    });

    describe('update', function(){
      it('should call update on each component', function(){
        spyOn(component, 'update');
        object.add_component('test_component', component);
        object.update();
        expect(component.update).toHaveBeenCalled();
      });
    });

    it('should have a position', function(){
      expect(object.position.x).toBe(0);
      expect(object.position.y).toBe(0);
    });

    it('should accept components', function(){
      object.add_component('test_component', component);
      expect(object.components.test_component).toBe(component);
    });

    it('should set itself as object reference in components', function(){
      object.add_component('test_component', component);
      expect(component.object).toBe(object);
    });

  });
});