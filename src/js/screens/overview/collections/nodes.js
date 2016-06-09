'use strict';

import Backbone from 'backbone';

import NodeModel from '../models/node';

export default Backbone.Collection.extend({
  url: '/api/nodes',
  model: NodeModel
});
