require.config({
  paths: {
    'underscore': 'bower_components/underscore/underscore',
    'jquery': 'bower_components/jquery/dist/jquery',
    'keypress': 'bower_components/Keypress/keypress',
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
