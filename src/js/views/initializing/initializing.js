'use strict';
import React from 'react';

import Component from './component.jsx';
import View from '../base';

export default View.extend({
  component: function() {
    return React.createFactory(Component)()
  }
});
