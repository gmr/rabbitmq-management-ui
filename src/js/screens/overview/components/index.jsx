import React from 'react';
import 'react.backbone';

import Messages from './messages.jsx';
import Nodes from './nodes.jsx';
import PortsAndContexts from './ports_and_contexts.jsx';
import Queues from './queues.jsx';
import Totals from './totals.jsx';

export default React.createBackboneClass({

  mixins: [
    React.BackboneMixin(
      {
        propName: 'overview',
        renderOn: 'change'
      },
      {
        propName: 'nodes',
        renderOn: 'add'
      }
    )
  ],

  render: function () {
    var overview = this.props.overview.toJSON();
    console.log(overview);
    var totals = <span>&nbsp;</span>;
    if (overview.object_totals) {
      totals = <Totals object={overview.object_totals} queue={overview.queue_totals} />;
    }
    return (
      <div>
        <div className="hidden-md-up">
          {totals}
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 hidden-xs-down">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <Queues totals={overview.queue_totals} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <Messages totals={overview.message_totals} />
              </div>
            </div>
            <Nodes nodes={this.props.nodes.toJSON()} stats_node={overview.statistics_db_node} />
            <PortsAndContexts listeners={overview.listeners} contexts={overview.contexts} />
          </div>
          <div className="col-lg-3 hidden-md-down">
            {totals}
          </div>
        </div>
      </div>
    );
  }
});

