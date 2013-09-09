module.exports = function(grunt) {
  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
    dist: {
      options: {
        style: 'compressed'
      },
      files: {
        'css/app.css': 'css/app.sass'
      }
    }
  },
  htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
    files:[{
       expand: true,
       cwd: '_site/',
       src: ['index.html','*/*.html'],
       dest: '_site',
       ext: '.html'
     }]
    }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['htmlmin']);
};
