'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Project configuration.
  grunt.initConfig({
    jasmine_node: {
      coverage: {
        excludes: ['**/specs/*.js']
      },
      options: {
        forceExit: true,
        match: '.',
        specFolders: ['./'],
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec',
        isVerbose: false,
        junitreport: {
          report: true,
          savePath : './junit_reports/',
          useDotNotation: true,
          consolidate: true
        }
      }
    },
    jshint: {
      files: ['gruntfile.js', 'app.js', '<%= jshint_dir  %>'],
      options: {
        jshintrc: '../../.jshintrc',
      }
    }
  });

  var current_path = process.cwd()+'/modules/';
  grunt.config.set('test_dir', current_path);
  grunt.config.set('jshint_dir', 'modules/**/**.js');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine_node']);


  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

};
