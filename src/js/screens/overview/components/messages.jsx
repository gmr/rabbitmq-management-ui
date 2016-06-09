import React from 'react';
import 'react.backbone';

export default React.createBackboneClass({

  render: function () {
    return (
      <div>
        <h6 className="section text-primary"><i className="fa fa-area-chart"></i> Message Rates</h6>
        <div className="card card-block">
          <p className="card-text lead"><i className="fa fa-spinner fa-spin"></i> Waiting for data</p>
        </div>
      </div>
    )
  }
});
