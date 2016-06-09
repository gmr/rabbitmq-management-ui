import React from 'react';
import 'react.backbone';
import format from 'format-number';

var numberFormat = format();

export default React.createBackboneClass({

  render: function () {
    return (
      <div>
        <h6 className="section text-primary"><i className="fa fa-th-list"></i> Global Counts</h6>
        <table className="table table-striped table-bordered table-sm text-small">
          <tbody>
            <tr>
              <td colspan="2">
                Messages Ready
                <span className="pull-xs-right">{numberFormat(this.props.queue.messages_ready)}</span>
              </td>
            </tr>
            <tr>
              <td>
                Messages Unacked
                <span className="pull-xs-right">{numberFormat(this.props.queue.messages_unacknowledged)}</span>
              </td>
            </tr>
            <tr>
              <td>
                Consumers
                <span className="pull-xs-right">{numberFormat(this.props.object.consumers)}</span>
              </td>
            </tr>
            <tr>
              <td>
                Connections
                <span className="pull-xs-right">{numberFormat(this.props.object.connections)}</span>
              </td>
            </tr>
            <tr>
              <td>
                Channels
                <span className="pull-xs-right">{numberFormat(this.props.object.channels)}</span>
              </td>
            </tr>
            <tr>
              <td>
                Exchanges
                <span className="pull-xs-right">{numberFormat(this.props.object.exchanges)}</span>
              </td>
            </tr>
            <tr>
              <td>
                Queues
                <span className="pull-xs-right">{numberFormat(this.props.object.queues)}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

