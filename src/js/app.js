'use strict';

import Backbone from 'backbone';
import Layout from './layout.js';
import Router from './router';

import WhoAmI from './models/whoami';

import OverviewController from './controllers/overview';
import OverviewModel from './screens/overview/models/overview';

import Header from './views/header/header.js';
import Initializing from './views/initializing/initializing.js';
import Footer from './views/footer/footer.js';

export default class App {

  constructor(options) {

    this.overview = new OverviewModel();
    this.overview.fetch();

    this.whoami = new WhoAmI();
    this.whoami.fetch();


    this.controllers = {
      overview: new OverviewController({app: this,
                                        model: this.overview})
    };
    
    this.layout = new Layout({el: document.getElementsByTagName('body')[0],
                              overview: this.overview,
                              whoami: this.whoami});
    this.layout.render();
    this.router = new Router({app: this,
                              controllers: this.controllers});
    Backbone.history.start({pushState: true});
  }
};
