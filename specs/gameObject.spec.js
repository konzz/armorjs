define(['engine/gameObject'], function(gameObject){
  'use strict';
  describe('object module', function(){

    var object;
    var component;

    beforeEach(function(){
      object = gameObject('test_object');
      component = {update: function(){}, init: function(){}};
    });

    it('should have a name', function(){
      expect(object.name).toBe('test_object');
    });

    it('should have a v2 position', function(){
      expect(object.position.x).toBe(0);
      expect(object.position.y).toBe(0);
    });

    it('accepts an object to extend properties', function(){
      object = gameObject('name', {position: 'some position'});
      expect(object.position).toBe('some position');
    });

    describe('addComponent()', function(){
      it('should add the component to components', function(){
        object.addComponent('test_component', component);
        expect(object.components.test_component).toBe(component);
      });

      it('should set itself as object reference in components', function(){
        object.addComponent('test_component', component);
        expect(component.gameObject).toBe(object);
      });

      it('should add a method to find other components', function(){
        object.addComponent('test_component', component);

        var other_component = {};
        object.addComponent('other_component', other_component);

        expect(component.getComponent('other_component')).toBe(other_component);
      })
    });

    describe('update', function(){
      it('should call update on each component', function(){
        spyOn(component, 'update');
        object.addComponent('test_component', component);
        object.update();
        expect(component.update).toHaveBeenCalled();
      });

      it('should not throw errors if the component does not have update method', function(){
        object.addComponent('not_update_component', {});
        object.update();
      });
    });

    describe('init', function(){
      it('should call init on each component', function(){
        spyOn(component, 'init');
        object.addComponent('test_component', component);
        object.init();
        expect(component.init).toHaveBeenCalled();
      });

      it('should not throw errors if the component does not have init method', function(){
        object.addComponent('not_init_component', {});
        object.init();
      })
    });

    describe('setCtx', function(){

      it('should save the ctx and set it to all the components', function(){
        var ctx = {};
        object.addComponent('test_component', component);
        object.setCtx(ctx);
        expect(object.ctx).toBe(ctx);
        expect(component.ctx).toBe(ctx);
      });
    });
  });
});
