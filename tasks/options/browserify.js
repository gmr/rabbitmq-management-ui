'use strict';

module.exports = {
  app: {
    files: {
      'build/app.js': ['src/js/main.js']
    },
    options: {
      transform: [['babelify', {presets: ['es2015', 'react', 'stage-2']}]],
      external: ['backbone']
    }
  },
  vendor: {
    src: [],
    dest: 'build/vendor.js',
    options: {
      alias: [
        './node_modules/backbone/backbone.js:backbone'
      ]
    }
  }
};
