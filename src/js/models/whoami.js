'use strict';

import Backbone from 'backbone';

export default Backbone.Model.extend({
  url: '/api/whoami'
});
