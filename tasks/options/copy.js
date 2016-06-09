'use strict';

module.exports = {
  images: {
    files: [
      {
        expand: true,
        flatten: true,
        src: ['src/img/**'],
        dest: 'dist/<%= pkg.version %>/img/',
        filter: 'isFile'
      }
    ]
  },
  index: {
    files: [
      {
        expand: true,
        flatten: true,
        src: ['src/index.html'],
        dest: 'dist/<%= pkg.version %>/',
        filter: 'isFile'
      }
    ]
  },
  fonts: {
    files: [
      {
        expand: true,
        flatten: true,
        src: ['node_modules/font-awesome/fonts/*'],
        dest: 'dist/<%= pkg.version %>/fonts/',
        filter: 'isFile'
      },
      {
        expand: true,
        flatten: true,
        src: ['src/fonts/*'],
        dest: 'dist/<%= pkg.version %>/fonts/',
        filter: 'isFile'
      }
    ]
  }
};
