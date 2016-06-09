'use strict';

module.exports = {
  compile: {
    options: {
      loadPath: [
        'src/styles',
        'node_modules/bootstrap/scss',
        'node_modules/font-awesome/scss'
      ],
      style: 'expanded'
    },
    files: {
      'dist/<%= pkg.version %>/css/main.css': 'src/styles/main.scss'
    }
  }
};
