'use strict';

import Backbone from 'backbone';
import 'backbone-associations';

export default Backbone.AssociatedModel.extend({
  url: '/api/overview?lengths_age=60&lengths_incr=5&msg_rates_age=60&msg_rates_incr=5'
});
