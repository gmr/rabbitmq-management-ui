'use strict';

import Backbone from 'backbone';
import 'backbone-associations';

export default Backbone.AssociatedModel.extend({
  urlRoot: '/api/node/'
});
