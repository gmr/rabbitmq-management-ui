import React from 'react';
import 'react.backbone';

export default React.createBackboneClass({
  render: function () {
    return (
      <div class="container"><i className="fa fa-spinner fa-spin fa-4x fa-fw" aria-hidden="true"></i> Loading</div>
    );
  }
});

