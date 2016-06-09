import React from 'react';
import 'react.backbone';

export default React.createBackboneClass({

  mixins: [
    React.BackboneMixin({
      propName: 'overview',
      renderOn: 'change'
    })
  ],

  render: function () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <a href="/api/">HTTP API</a> | <a href="/cli/">Command Line</a>
          </div>
          <div className="col-sm-6 text-xs-right">
            RabbitMQ {this.props.overview.get('rabbitmq_version')}
            &nbsp;&ndash;&nbsp;
            <a href="#" data-placement="left" data-toggle="tooltip"
               title={this.props.overview.get('erlang_full_version')}
               >Erlang {this.props.overview.get('erlang_version')}</a>
            <br />
            <span class="text-muted">{this.props.overview.get('node')}</span>
          </div>
        </div>
      </div>
    );
  }
});
