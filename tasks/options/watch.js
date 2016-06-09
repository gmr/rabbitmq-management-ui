'use strict';

var LIVERELOAD_PORT = process.env.LIVERELOAD_PORT || 35730;

module.exports = {
  index: {
    options: {livereload: LIVERELOAD_PORT},
    files: ['src/index.html'],
    tasks: ['copy:index']
  },
  source: {
    options: {livereload: LIVERELOAD_PORT},
    files: ['src/js/**'],
    tasks: ['browserify:app',
            'concat:app']
  },
  styles: {
    options: {livereload: LIVERELOAD_PORT},
    files: ['src/styles/**/*.scss'],
    tasks: ['sass']
  }
};
