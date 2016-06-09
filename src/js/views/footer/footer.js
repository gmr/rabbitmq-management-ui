'use strict';

import React from 'react';

import Component from './component.jsx';
import View from '../base';

export default View.extend({

  initialize: function(options) {
    this.overview = options.overview;
    this.whoami = options.whoami;
  },

  component: function() {
    return React.createFactory(Component)({overview: this.overview, whoami: this.whoami})
  }

});
