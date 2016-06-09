'use strict';

import jQuery from 'jquery';
window.jQuery = jQuery;
import Backbone from 'backbone';
Backbone.$ = jQuery;  // Set Backbone.$ before requiring modules that depend on it.

import Application from './app';

window.jQuery(() => {
  // Chrome Backbone Debugger Plugin
  if (window.__backboneAgent) {
    window.__backboneAgent.handleBackbone(Backbone);
  }
  window.app = new Application();
});
