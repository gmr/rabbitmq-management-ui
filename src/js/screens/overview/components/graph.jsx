'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import D3 from 'react-d3-components';

let {
  BarChart,
  LineChart,
  AreaChart,
  ScatterPlot,
  PieChart
} = D3;

let createClass = function (chartType) {
  
  return React.createClass({
    getDefaultProps () {
      return {
        margin: {top: 25, bottom: 25, left: 25, right: 25}
      };
    },

    getInitialState () {
      return {
        size: {w: 0, h: 0}
      };
    },

    componentDidMount () {
      this.fitToParentSize();
    },

    componentWillReceiveProps () {
      this.fitToParentSize();
    },

    fitToParentSize () {
      let elem = ReactDOM.findDOMNode(this);
      let w = elem.parentNode.offsetWidth - 1;
      let h = elem.parentNode.offsetHeight;
      let currentSize = this.state.size;

      if (w !== currentSize.w || h !== currentSize.h) {
        this.setState({
          size: {
            w: w,
            h: h
          }
        });
      }
    },

    getChartClass () {
      let Component;

      switch (chartType) {
        case 'BarChart':
          Component = BarChart;
          break;
        case 'LineChart':
          Component = LineChart;
          break;
        case 'AreaChart':
          Component = AreaChart;
          break;
        case 'ScatterPlot':
          Component = ScatterPlot;
          break;
        case 'PieChart':
          Component = PieChart;
          break;
        default:
          console.error('Invalid Chart Type name.');
          break;
      }

      return Component;
    },

    render () {
      // Component name has to start with CAPITAL
      let Component = this.getChartClass();

      let {width, height, margin, ...others} = this.props;

      width = this.state.size.w || 100;
      height = this.state.size.h || 100;

      return (
        <Component
          width = {width}
          height = {height}
          margin = {margin}
          {...others}
        />
      );
    }
  });
};

let ResponsiveBarChart = createClass('BarChart');
let ResponsiveLineChart = createClass('LineChart');
let ResponsiveAreaChart = createClass('AreaChart');
let ResponsiveScatterPlot = createClass('ScatterPlot');
let ResponsivePieChart = createClass('PieChart');

export {
  ResponsiveBarChart,
  ResponsiveLineChart,
  ResponsiveAreaChart,
  ResponsiveScatterPlot,
  ResponsivePieChart
};

export default {
  ResponsiveBarChart: ResponsiveBarChart,
  ResponsiveLineChart: ResponsiveLineChart,
  ResponsiveAreaChart: ResponsiveAreaChart,
  ResponsiveScatterPlot: ResponsiveScatterPlot,
  ResponsivePieChart: ResponsivePieChart
};
