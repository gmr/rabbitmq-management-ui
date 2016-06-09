'use strict';

module.exports = {
  dev: {
    options: {
      compress: false,
      yuicompress: false,
      sourceMap: true,
      paths: ['src/less/', 'node_modules/spectre.css/']
    },
    files: {
      'build/css/main.css': 'src/less/main.less'
    }
  }
};
