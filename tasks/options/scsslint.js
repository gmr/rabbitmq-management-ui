'use strict';

module.exports = function(grunt) {
    return {
        options: {
            config: '.scss-lint.yml',
            reporterOutput: grunt.option('report') ? 'reports/scss-lint.xml' : null
        },
        styles: {
            src: ['app/styles/**/*.scss']
        }
    };
};
