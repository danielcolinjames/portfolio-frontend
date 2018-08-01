import React, { Component } from 'react';
import {
    FlexibleXYPlot,
    XAxis,
    YAxis,
    LineSeries,
    VerticalGridLines,
    AreaSeries,
    GradientDefs,
    linearGradient
} from 'react-vis';

import moment from 'moment';


export default class TradingPlotChart extends Component {
  state = {
    // xTicks: 10,
    minDate: moment().subtract(10, 'days').startOf('day'),
    maxDate: moment().startOf('day'),
    yTicks: 7
  }

  render() {
    const xTicks = moment.duration(this.state.maxDate.diff(this.state.minDate)).asDays();

    const chartStyle = {
      height: 466,
      yPadding: 50,
      margin: { top: 50, right: 100, left: 0, bottom: 50 }
    }

    let priceData = [];
    if (this.props.priceGraph) {
      priceData = this.props.priceGraph.filter( pricePoint => {
        const priceDate = moment.unix(pricePoint[0]/1000).startOf('day');
        return priceDate >= this.state.minDate && priceDate <= this.state.maxDate;
      } ).map( pricePoint => (
        { x: moment.unix(pricePoint[0]/1000).date(), y: pricePoint[4] }
      ) )
    }

    let filteredTradesData = [];
    if (this.props.trades) {
      filteredTradesData = this.props.trades.filter( trade => {
        const priceDate = moment.unix(trade.sync_datetime).startOf('day');
        return priceDate >= this.state.minDate && priceDate <= this.state.maxDate;
      })
    }



    return (
      <FlexibleXYPlot {...chartStyle}>
        <GradientDefs>
          <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F7931A" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#F7931A" stopOpacity={0.0} />
          </linearGradient>
        </GradientDefs>
        <XAxis tickTotal={xTicks} />
        <YAxis tickTotal={this.state.yTicks} orientation='right' style={{
          fontFamily: 'SFUIDisplay-Bold, sans-serif',
          fontSize: '12px',
          color: '#9b9b9b'
        }} />
        <VerticalGridLines />

        <LineSeries stroke="#F7931A" data={priceData} />
        <AreaSeries
          stroke="none"
          color={'url(#CoolGradient)'}
          opacity={1}
          className="areaSeries"
          data={priceData} />
      </FlexibleXYPlot>
    );
  }
}
