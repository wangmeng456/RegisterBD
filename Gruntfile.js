module.exports = function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src:'./source/index.html',
        dest:'index.html'
      }
    },
    cssmin: {
      'register.css': './source/register.css'
    },
    uglify:{
      'register.js':'./source/register.js'  
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['htmlmin','cssmin','uglify']);
};
