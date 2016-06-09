'use strict';

import Backbone from 'backbone';
import ReactDOM from 'react-dom';
import 'backbone.layoutmanager';

export default Backbone.View.extend({
  el: null,
  manage: true,

  component() {
    return null;
  },

  beforeRender() {
    ReactDOM.render(this.component(), this.el);
    return false;
  }
});
