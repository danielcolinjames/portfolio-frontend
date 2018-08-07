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
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


import BuyIcon from './BuyIcon';
import SellIcon from './SellIcon';
import WhiteGradient from './WhiteGradient';
import ChartHoverCard from './ChartHoverCard';

import './tradingplot.css';

function last(array){
  return array[array.length - 1];
}

export default class TradingPlotChart extends Component {
  state = {
    // xTicks: 10,
    minDate: moment().subtract(3, 'months').subtract(10, 'days').startOf('day'),
    maxDate: moment().startOf('day'),
    yTicks: 7,
    hoveredTrade: null,
    focusedInput: null
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
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: -10, // because there is no "centered" option in align.vertical
        height: 20,
        width: 60
      },
      currentPriceLine: {
        width: 'calc(100% - 80px)',
        height: "1px",
        backgroundColor: "#65a8f5"
      },
      yAxis: {
        fontFamily: 'SFUIDisplay-Bold, sans-serif',
        fontSize: '12px',
        color: '#9b9b9b'
      }
    }

    const { hoveredTrade, maxDate, minDate } = this.state;

    const xTicks = maxDate && minDate? moment.duration(maxDate.diff(minDate)).asDays() : 10

    const chartStyle = {
      height: 466,
      yPadding: 50,
      margin: { top: 20, right: 80, left: 0, bottom: 50 }
    }

    const priceData = this.props.priceGraph ?
      this.props.priceGraph.filter( pricePoint => {
        const priceDate = moment.unix(pricePoint[0]/1000).startOf('day');
        return priceDate >= this.state.minDate && priceDate <= this.state.maxDate;
      } ).map( pricePoint => (
        { x: pricePoint[0], y: pricePoint[4] }
      ) ) : []

    const currentPrice = this.props.priceGraph ? last(this.props.priceGraph)[4] : 0

    const hintLocation = priceData.length > 0 && currentPrice ?
      { x: last(priceData).x, y: currentPrice } : null;

    const filteredTradesData = this.props.trades ?
      this.props.trades.filter( trade => {
        const priceDate = moment(trade.close_date).startOf('day');
        return priceDate >= this.state.minDate && priceDate <= this.state.maxDate;
      }) : []

    const sellTrades = filteredTradesData.filter(trade => (
      trade.side === 'sell'
    ) ).map( trade => (
      { x: moment(trade.close_date).valueOf(), y: trade.avg_price, trade }
    ) )

    const buyTrades = filteredTradesData.filter(trade => (
      trade.side === 'buy'
    ) ).map( trade => (
      { x: moment(trade.close_date).valueOf(), y: trade.avg_price, trade }
    ) )


    return (
      <div>
        <DateRangePicker
          startDate={this.state.minDate}
          startDateId="your_unique_start_date_id"
          endDate={this.state.maxDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) => this.setState({ minDate: startDate, maxDate: endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          isOutsideRange={() => false}
        />

        <FlexibleXYPlot {...chartStyle}>
          {/* Style definitions */}
          <GradientDefs>
            <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#F7931A" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#F7931A" stopOpacity={0.0} />
            </linearGradient>
          </GradientDefs>
          <XAxis tickTotal={xTicks} tickFormat={ v => moment(v).format("MMM D")} />
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
                >{currentPrice}</p>
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

          {/* The white gradient lives at the first x position, and over top of the drawn buy/sell icons, but beneath the interactable versions of the buy/sell icons. */}
          <CustomSVGSeries data={priceData.slice(0, 1)} customComponent={WhiteGradient}/>

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
              hoveredTrade: v
            })}
            onValueMouseOut={v => this.setState({
              hoveredTrade: null
            })} />
          {hoveredTrade &&
            <Hint value={hoveredTrade}>
              <ChartHoverCard
                // All dummy values for testing
                side={hoveredTrade.trade.side}
                base={hoveredTrade.trade.market.base}
                quote={hoveredTrade.trade.market.quote}
                price={hoveredTrade.trade.avg_price}
                amount={hoveredTrade.trade.amount}
                cost={hoveredTrade.trade.cost}
                valueChange={100 * (hoveredTrade.trade.avg_price - currentPrice) / currentPrice}
                datetime={moment(hoveredTrade.trade.close_date)}
              />
            </Hint>
          }
        </FlexibleXYPlot>
      </div>
        );
  }
}
