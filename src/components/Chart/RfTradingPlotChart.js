import React, { Component } from 'react';
import {
    FlexibleXYPlot,
    XAxis,
    YAxis,
    LineSeries,
    VerticalGridLines,
    AreaSeries,
    GradientDefs,
    linearGradient,
    Hint,
    CustomSVGSeries,
    MarkSeries
} from 'react-vis';
import moment from 'moment';

import BuyIcon from './BuyIcon';
import SellIcon from './SellIcon';
import ChartHoverCard from './ChartHoverCard';


if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

export default class TradingPlotChart extends Component {
  state = {
    // xTicks: 10,
    minDate: moment().subtract(3, 'months').subtract(10, 'days').startOf('day'),
    maxDate: moment().startOf('day'),
    yTicks: 7,
    hoveredTrade: null,
  }

  render() {
    const styles = {
      currentPrice: {
        background: '#4A90E2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        fontFamily: 'SFUIDisplay-Bold, sans-serif',
        fontSize: '12px',
        color: 'white',
        text: {
          display: 'none'
        },
        value: {
          color: 'red'
        },
        borderRadius: 4,
        padding: 0,
        marginBottom: -10, // because there is no "centered" option in align.vertical
        // marginRight: 64,
        height: 20,
        width: 64,
      },
      currentPriceLine: {
        width: 'calc(100% - 100px)',
        height: "1px",
        backgroundColor: "#65a8f5"
      },
      yAxis: {
        fontFamily: 'SFUIDisplay-Bold, sans-serif',
        fontSize: '12px',
        color: '#9b9b9b'
      }
    }

    const { hoveredCell } = this.state;

    const xTicks = moment.duration(this.state.maxDate.diff(this.state.minDate)).asDays();

    const chartStyle = {
      height: 466,
      yPadding: 50,
      margin: { top: 50, right: 100, left: 0, bottom: 50 }
    }

    const priceData = this.props.priceGraph ?
      this.props.priceGraph.filter( pricePoint => {
        const priceDate = moment.unix(pricePoint[0]/1000).startOf('day');
        return priceDate >= this.state.minDate && priceDate <= this.state.maxDate;
      } ).map( pricePoint => (
        { x: moment.unix(pricePoint[0]/1000).dayOfYear(), y: pricePoint[4] }
      ) ) : []

    const lastPrice = this.props.priceGraph ? this.props.priceGraph.last()[4] : 0

    const hintLocation = priceData.length > 0 && lastPrice ?
      { x: priceData.last().x, y: lastPrice } : null;

    const filteredTradesData = this.props.trades ?
      this.props.trades.filter( trade => {
        const priceDate = moment(trade.close_date).startOf('day');
        return priceDate >= this.state.minDate && priceDate <= this.state.maxDate;
      }) : []

    const sellTrades = filteredTradesData.filter(trade => (
      trade.side === 'sell'
    ) ).map( trade => (
      { x: moment(trade.close_date).dayOfYear(), y: trade.avg_price, trade }
    ) )

    const buyTrades = filteredTradesData.filter(trade => (
      trade.side === 'buy'
    ) ).map( trade => (
      { x: moment(trade.close_date).dayOfYear(), y: trade.avg_price, trade }
    ) )

    return (
      <FlexibleXYPlot {...chartStyle}>
        {/* Style definitions */}
        <GradientDefs>
          <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F7931A" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#F7931A" stopOpacity={0.0} />
          </linearGradient>
        </GradientDefs>
        <XAxis tickTotal={xTicks} />
        <YAxis tickTotal={this.state.yTicks} orientation='right' style={styles.yAxis} />
        <VerticalGridLines />

        {/* Price graph */}
        <LineSeries stroke="#F7931A" data={priceData} />
        <AreaSeries
          stroke="none"
          color={'url(#CoolGradient)'}
          opacity={1}
          className="areaSeries"
          data={priceData} />

        { hintLocation &&
          <Hint
            value={hintLocation}
            align={{
                horizontal: 'right',
                vertical: 'top'
            }} >
            <div style={styles.currentPrice}>
              <p
                style={{
                    padding: 0,
                    margin: 0
                }}
              >{lastPrice}</p>
            </div>
          </Hint>
        }
        { hintLocation &&
          <Hint
            style={styles.currentPriceLine}
            value={hintLocation} >
            {/* if there's a div it doesn't use the default Hint styling component */}
            <div></div>
          </Hint>
        }

        <CustomSVGSeries data={buyTrades} customComponent={BuyIcon} />
        <CustomSVGSeries data={sellTrades} customComponent={SellIcon} />
        <MarkSeries
          stroke="none"
          strokeWidth={1}
          fill="none"
          size={16}
          style={{
            cursor: 'pointer'
          }}
          data={[...buyTrades, ...sellTrades]}
          onValueMouseOver={v => this.setState({
            hoveredCell: v
          })}
          onValueMouseOut={v => this.setState({
            hoveredCell: null
          })} />
        {hoveredCell &&
          <Hint value={hoveredCell}>
            <ChartHoverCard
              // All dummy values for testing
              price={hoveredCell.trade.avg_price}
              amount={hoveredCell.trade.amount}
              valueChange={(hoveredCell.trade.avg_price - 10000) / 100}
              datetime={moment(hoveredCell.trade.close_date)}
            />
          </Hint>
        }
      </FlexibleXYPlot>
    );
  }
}
