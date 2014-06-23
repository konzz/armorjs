require.config({
    paths: {
        'underscore': '../../bower_components/underscore/underscore',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'physicsjs': '../../bower_components/physicsjs/physicsjs-full-0.6.0',
        'engine': '../../engine'
      },
    shim: {
        'underscore': {
        exports: '_'
    }
  },
});

require(['engine/engine'], function(engine){

});
