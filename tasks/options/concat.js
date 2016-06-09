'use strict';

module.exports = {
  app: {
    src: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'build/vendor.js',
      'build/app.js'
    ],
    dest: 'dist/<%= pkg.version %>/main.js'
  }
};
