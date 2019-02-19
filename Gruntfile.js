module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {

      build: {
        src: 'js/script.js',
        dest: 'script.min.js'
      }
    },
    sass: {                              // Task
    dist: {                            // Target

      files: {                         // Dictionary of files
        'style/main.css': 'style/main.scss',       // 'destination': 'source'

      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task(s).
  grunt.registerTask('default', ['uglify','sass']);

};
