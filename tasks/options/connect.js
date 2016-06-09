'use strict';

var liveReload = require('connect-livereload');
var LIVERELOAD_PORT = process.env.LIVERELOAD_PORT || 35730;
var serveStatic = require('serve-static');
var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = {
  livereload: {
    options: {
      base: 'dist/<%= pkg.version %>/',
      logger: 'dev',
      middleware: function (connect, options) {
        var middlewares = [liveReload({port: LIVERELOAD_PORT}),
                           proxy];
        options.base.forEach(function (base) {
          middlewares.push(serveStatic(base));
        });
        return middlewares;
      },
      livereload: LIVERELOAD_PORT,
      debug: true,
      keepalive: true
    },
    proxies: [
      {
        context: '/api',
        host: 'localhost',
        port: 15672,
        https: false,
        xforward: false,
        headers: {
          'Authorization': 'Basic Z3Vlc3Q6Z3Vlc3Q='
        }
      }
    ]
  }
};
