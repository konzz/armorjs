'use strict';

define(['game_object'], function(_game_object){
  describe('game_object module', function(){

    var game_object;
    var component;

    beforeEach(function(){
      game_object = _game_object('test_game_object');
      component = {active: true, update: function(){}};
    });

    it('should have a name', function(){
      expect(game_object.name).toBe('test_game_object');
    });

    describe('update', function(){
      it('should call update on each component', function(){
        spyOn(component, 'update');
        game_object.add_component('test_component', component);
        game_object.update();
        expect(component.update).toHaveBeenCalled();
      });
    });

    it('should have a position', function(){
      expect(game_object.position.x).toBe(0);
      expect(game_object.position.y).toBe(0);
    });

    it('should accept components', function(){
      game_object.add_component('test_component', component);
      expect(game_object.components.test_component).toBe(component);
    });

    it('should set itself as game_object reference in components', function(){
      game_object.add_component('test_component', component);
      expect(component.game_object).toBe(game_object);
    });

  });
});