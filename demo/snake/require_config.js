require.config({
  paths: {
    'underscore': 'bower_components/underscore/underscore',
    'jquery': 'bower_components/jquery/dist/jquery',
    'engine': '../../engine/',
    'levels': 'levels/',
    'objects': 'objects/'
  },
  shim: {
    'underscore': {
      exports: '_'
    }
  },
});

require(['game']);
