import React from 'react';
import 'react.backbone';


export default React.createBackboneClass({

  render: function () {
    var haveData = false;
    var content;
    var ready = {key: 'Ready', values: []};
    var unacked = {key: 'Unacknowledged', values: []};
    if (this.props.totals) {
      haveData = true;
      var samples = this.props.totals.messages_ready_details.samples;
      for (var i = 0; i < samples.length; i++) {
        ready.values.push([{label: samples[i].timestamp, value: samples[i].sample}]);
      }
      samples = this.props.totals.messages_unacknowledged_details.samples;
      for (i = 0; i < samples.length; i++) {
        unacked.values.push([{label: samples[i].timestamp, value: samples[i].sample}]);
      }
    }

    if (haveData === true)
    {
      var data = [ready, unacked];
      console.log(data);
      var options = {
        point: {
          show: false
        },
        size: {
          height: 200,
          width: 400
        }
      };
      content = (<div className="card card-block">
        <p className="card-text lead"><i className="fa fa-spinner fa-spin"></i> Waiting for data</p>
      </div>)
    } else {
      content = (<div className="card card-block">
                  <p className="card-text lead"><i className="fa fa-spinner fa-spin"></i> Waiting for data</p>
                 </div>)
    }

    return (
      <div>
        <h6 className="section text-primary"><i className="fa fa-area-chart"></i> Queued Messages</h6>
        {content}
      </div>)

  }
});
