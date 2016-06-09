module.exports = function(grunt) {
  grunt.registerTask('build', 'Build UI', function(target) {
    var tasks = [
      'clean:build',
      'clean:dist',
      'copy:images',
      'copy:index',
      'copy:fonts',
      'sass',
      'browserify:vendor',
      'browserify:app',
      'concat:app'
    ];
    return grunt.task.run(tasks);
  });
};
