'use strict';

import React from 'react';

import Layout from '../base';
import Component from './components/index.jsx';

export default Layout.extend({

  initialize: function(options) {
    this.overview = options.overview;
    this.nodes = options.nodes;
  },

  component: function() {
    return React.createFactory(Component)({overview: this.overview,
                                           nodes: this.nodes})
  }
});
