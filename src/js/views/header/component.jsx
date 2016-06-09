import React from 'react';
import 'react.backbone';

export default React.createBackboneClass({

  mixins: [
    React.BackboneMixin(
      {
        propName: 'overview',
        renderOn: 'change'
      },
      {
        propName: 'whoami',
        renderOn: 'change'
      }
    )
  ],

  render: function () {
    var subheader;
    if (this.props.whoami.get('name')) {
      subheader = (<div className="content row subheader">
          <div className="col-sm-6">
            <span className="text-muted">Cluster Name:</span> {this.props.overview.get('cluster_name')}
          </div>
          <div className="col-sm-6 text-xs-right">
            <span className="text-muted">Logged in as</span> {this.props.whoami.get('name')}
          </div>
        </div>
      );
    }
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <button className='navbar-toggler hidden-md-up pull-xs-right' data-target='#collapsenav' data-toggle='collapse' type='button'>            &#9776;
          </button>
          <a href="#" className="navbar-brand text-primary">
            <i className="rabbitmq-icon"></i> RabbitMQ
          </a>
          <div className='collapse navbar-toggleable-sm pull-xs-left pull-md-none' id='collapsenav'>            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Overview <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/connections">Connections</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/channels">Channels</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/exchanges">Exchanges</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/queues">Queues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/admin">Admin</a>
              </li>
              <li className="nav-item pull-xs-right">
                <button className="btn btn-sm btn-primary-outline">
                  <i className="fa fa-sign-out"></i> Logout
                </button>
              </li>
              <li className="nav-item pull-xs-right">
                <a className="nav-link" href="#">
                  <i className="fa fa-wrench"></i> Preferences
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {subheader}
      </div>
    );
  }
});
