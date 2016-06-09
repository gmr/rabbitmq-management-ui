'use strict';
import Backbone from 'backbone';
import BackboneRouteControl from 'backbone-route-control';

export default BackboneRouteControl.extend({
  routes: {
    '':         'overview#index',
    'overview': 'overview#index'
  }
});
