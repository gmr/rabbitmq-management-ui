import React from 'react';
import 'react.backbone';
import filesize from 'filesize';
import format from 'format-number';
import moment from 'moment';

var numberFormat = format();

export default React.createBackboneClass({

  render: function () {
    var nodeList;
    if (this.props.nodes.length > 0) {
      var rows = [];
      for (var i=0; i < this.props.nodes.length; i++) {
        var node = this.props.nodes[i];

        var nodeIcon = "fa fa-hdd-o text-info";
        var nodeType = "Disk Node";
        if (node.name == this.props.stats_node) {
          nodeIcon = "fa fa-database text-success";
          nodeType = "Stats Node";
        } else if (node.type == "ram") {
          nodeIcon = "fa fa-bolt text-warning";
          nodeType = "RAM Node";
        }
        rows.push(<tr key={node.name}>
          <td><i title={nodeType} className={nodeIcon} data-toggle="tooltip"></i></td>
          <td className="text-nowrap">{node.name}</td>
          <td className="text-xs-center">{numberFormat(node.fd_used)}</td>
          <td className="text-xs-center hidden-md-down">{numberFormat(node.sockets_used)}</td>
          <td className="text-xs-center hidden-md-down">{numberFormat(node.proc_used)}</td>
          <td className="text-xs-center text-nowrap">{filesize(node.mem_used, {round: 1})}</td>
          <td className="text-xs-center text-nowrap">{filesize(node.disk_free, {round: 1})}</td>
          <td className="text-xs-center">{moment().subtract(node.uptime, 'milliseconds').fromNow(true)}</td>
        </tr>);
      }
      nodeList = (<table className="table table-topless table-striped table-hover text-small">
                    <thead>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Node</th>
                      <th className="text-xs-center">Open FDs</th>
                      <th className="text-xs-center hidden-md-down">Open Sockets</th>
                      <th className="text-xs-center hidden-md-down">Erlang Processes</th>
                      <th className="text-xs-center">Memory</th>
                      <th className="text-xs-center">Free Storage</th>
                      <th className="text-xs-center">Uptime</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                  </table>);
    } else {
      nodeList = (
        <div className="hidden-md-down card card-block">
          <p className="card-text lead"><i className="fa fa-spinner fa-spin"></i> Loading Node Information</p>
        </div>
      );
    }
    return (<div class="hidden-md-down">
              <h6 className="section text-primary"><i className="fa fa-cubes"></i> Cluster Nodes</h6>
              {nodeList}
            </div>);
  }
});

