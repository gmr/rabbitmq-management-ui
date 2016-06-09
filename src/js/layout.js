'use strict';

import Backbone from 'backbone';
import 'backbone.layoutmanager';

import Header from './views/header/header';
import Initializing from './views/initializing/initializing';
import Footer from './views/footer/footer';

export default Backbone.Layout.extend({
  manage: true,
  
  initialize: function(options) {
    this.overview = options.overview;
    this.whoami = options.whoami;
    this.setViews({'header': new Header({overview: this.overview, whoami: this.whoami}),
                   '.js-app': new Initializing(),
                    'footer': new Footer({overview: this.overview, whoami: this.whoami})});
  }


});
