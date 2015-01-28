'use strict';

define(['engine/vector2'], function(v2){
  describe('vector2', function(){

    describe('new()', function(){
      it('should return a new object v2 with the specified x and y', function(){
        var position = v2.new(10, 8);
        expect(position.x).toBe(10);
        expect(position.y).toBe(8);
      });

      it('should have the method add()', function(){
        var position = v2.new(10, 8);
        expect(typeof position.add).toBe('function');
      });
    });

    describe('add()', function(){
      it('should return a vector resulting of adding the values of two vectors', function(){
        var sum = v2.add({x:1, y:0}, {x:2, y:1});
        expect(sum.x).toBe(3);
        expect(sum.y).toBe(1);
      });

      describe('when only one object passed', function(){
        it('should add to itself', function(){
          var position = v2.new(10, 8);
          position.add({x: 5, y: 5});
          expect(position.x).toBe(15);
          expect(position.y).toBe(13);
        });
      });
    });


  });
});
