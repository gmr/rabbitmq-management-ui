import React from 'react';
import 'react.backbone';

export default React.createBackboneClass({

  render: function () {
    var key;
    var contextList = [];
    if (this.props.contexts && this.props.contexts.length > 0) {
      for (var i=0; i < this.props.contexts.length; i++) {
        var context = this.props.contexts[i];
        key = context.node + ':' + context.port;
        contextList.push(<tr key={key}>
          <td>{context.description}</td>
          <td className="text-nowrap">{context.node}</td>
          <td className="text-xs-center">{context.port}</td>
          <td className="text-xs-center"><code>{context.path}</code></td>

        </tr>);
      }
    }

    var portList = [];
    if (this.props.listeners && this.props.listeners.length > 0) {
      for (i=0; i < this.props.listeners.length; i++) {
        var listener = this.props.listeners[i];
        key = listener.node + ':' + listener.port;
        portList.push(<tr key={key}>
          <td className="text-xs-center">{listener.protocol}</td>
          <td className="text-xs-left text-nowrap">{listener.node}</td>
          <td className="text-xs-center">{listener.ip_address}</td>
          <td className="text-xs-center">{listener.port}</td>
        </tr>);
      }
    }

    return (<div className="ports_and_contexts hidden-sm-down">
      <h6 className="text-primary section"><i className="fa fa-sitemap"></i> Port &amp; Context Information</h6>
      <div className="row">
        <div className="col-md-12 col-lg-12 col-xl-6">
          <h6>Ports</h6>
          <div className="card-text">
            <table className="table table-striped table-hover table-sm text-small">
              <thead>
              <tr>
                <th className="text-xs-center">Protocol</th>
                <th>Node</th>
                <th className="text-xs-center text-nowrap">Bound To</th>
                <th className="text-xs-center">Port</th>
              </tr>
              </thead>
              <tbody>
                {portList}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-xl-6">
          <h6>Contexts</h6>
          <div className="card-text">
            <table className="table table-striped table-hover table-sm text-small">
              <thead>
              <tr>
                <th>Description</th>
                <th>Node</th>
                <th className="text-xs-center">Port</th>
                <th className="text-xs-center">Path</th>
              </tr>
              </thead>
              <tbody>
                {contextList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>);
  }
});

