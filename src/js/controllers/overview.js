'use strict';

import IndexView from '../screens/overview/index';
import Nodes from '../screens/overview/collections/nodes';

export default class OverviewController {

  constructor(options) {
    this.app = options.app;
    this.overview = options.model;
    this.nodes = new Nodes();
    this.timer = this.refreshTimer();
  }

  index() {
    var view = new IndexView({overview: this.overview, nodes: this.nodes});
    this.app.layout.setView('.js-app', view);
    this.nodes.fetch();
  }

  refreshTimer() {
    return setTimeout(function() {
      this.nodes.fetch();
      this.overview.fetch();
      this.timer = this.refreshTimer();
    }.bind(this), 5000);
  }

  stopTimer() {
    if (this.timer) clearTimeout(this.timer);
  }

};


