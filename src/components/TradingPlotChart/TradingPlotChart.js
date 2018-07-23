import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import './TradingPlotChart.css';
import ChartHoverCard from './ChartHoverCard';

import BuyIcon from './BuyIcon';
import SellIcon from './SellIcon';

import {
    FlexibleXYPlot,
    XAxis,
    Hint,
    YAxis,
    LineSeries,
    MarkSeries,
    VerticalGridLines,
    GradientDefs,
    AreaSeries,
    CustomSVGSeries
} from 'react-vis';

const data = [
    {x: 0, y: 11500},
    {x: 1, y: 11000},
    {x: 2, y: 8500},
    {x: 3, y: 8700},
    {x: 4, y: 8400},
    {x: 5, y: 9500},
    {x: 6, y: 8800},
    {x: 7, y: 9500},
    {x: 8, y: 10000},
    {x: 9, y: 8755.40}
];
  
function buildValue(hoveredCell) {
    return {
        x: hoveredCell.x,
        y: hoveredCell.y
        // TODO: set y as (maxY - minY) / 2
    };
}

class TradingPlotChart extends React.Component {
    state = {
        hoveredCell: false
    }

    render() {

        const { hoveredCell } = this.state;

        return (
            <div id="chart">
                <FlexibleXYPlot
                    height={466}
                    yPadding={50}

                    margin={{
                        top: 50,
                        right: 100,
                        left: 0,
                        bottom: 50
                    }}>

                    <GradientDefs>
                        <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#F7931A" stopOpacity={0.2} />
                            <stop offset="100%" stopColor="#F7931A" stopOpacity={0.0} />
                        </linearGradient>
                    </GradientDefs>

                    <XAxis
                        tickTotal={10} />
                    <YAxis
                        tickTotal={7}
                        orientation='right'
                        style={{
                            fontFamily: 'SFUIDisplay-Bold, sans-serif',
                            fontSize: '12px',
                            color: '#9b9b9b'
                        }}
                    />

                    {/* <HorizontalGridLines /> */}

                    <VerticalGridLines />

                    <LineSeries
                        stroke="#F7931A"
                        data={data} />

                    <AreaSeries
                        stroke="none"
                        color={'url(#CoolGradient)'}
                        opacity={1}
                        className="areaSeries"
                        data={data} />

                    {/* ----------------- */}
                    {/* Buys (green dots) */}
                    {/* ----------------- */}
                    <CustomSVGSeries
                        data={data.slice(2, 4)}
                        customComponent={() => {
                            return <BuyIcon />
                        }} />
                    {/* Because CustomSVGSeries is the only way to draw custom images on the chart, we have to use that for drawing the icons, but it doesn't have as much functionality built in as MarkSeries, so we draw an invisible MarkSeries on top of each icon for hover functionality. */}
                    <MarkSeries
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        size={16}
                        style={{
                            cursor: 'pointer'
                        }}
                        data={data.slice(0, 5)}
                        onValueMouseOver={v => this.setState({
                            // hoveredCell: v.x && v.y ? v : false
                            hoveredCell: v.y ? v : false
                        })}
                        onValueMouseOut={v => this.setState({
                            hoveredCell: false
                        })} />

                    {/* ---------------- */}
                    {/* Sells (red dots) */}
                    {/* ---------------- */}
                    <CustomSVGSeries
                        data={data.slice(7, 9)}
                        customComponent={() => {
                            return <SellIcon />
                        }} />
                    <MarkSeries
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        size={16}
                        style={{
                            cursor: 'pointer'
                        }}
                        data={data.slice(7, 9)}
                        onValueMouseOver={v => this.setState({
                            // if the y value is valid, set the hoveredCell to that data point
                            // previously checked both v.x and v.y, but with dummy data, the first x value is 0 and wouldn't render
                            // hoveredCell: v.x && v.y ? v : false
                            hoveredCell: v.y ? v : false
                        })}
                        onValueMouseOut={v => this.setState({
                            hoveredCell: false
                        })} />

                    {/* ------------------------------ */}
                    {/* Blue marker over current price */}
                    {/* ------------------------------ */}
                    <Hint
                        value={data[data.length - 1]}
                        align={{
                            horizontal: 'right',
                            vertical: 'top'
                        }} >
                        <div style={{
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
                        }}>
                            <p
                                style={{
                                    padding: 0,
                                    margin: 0
                                }}
                            >{data[data.length - 1].y}</p>
                        </div>
                    </Hint>
                    <Hint
                        style={{
                            width: 'calc(100% - 100px)',
                            // ^ this stupid line took me an hour to figure out
                            height: "1px",
                            backgroundColor: "#65a8f5"
                        }}
                        value={data[data.length - 1]} >
                        {/* if there's a div it doesn't use the default Hint styling component */}
                        <div></div>
                    </Hint>

                    {hoveredCell ? <Hint value={buildValue(hoveredCell)}>
                        <ChartHoverCard
                            // All dummy values for testing
                            price={hoveredCell.y}
                            amount={hoveredCell.x}
                            valueChange={(hoveredCell.y - 10000) / 100}
                            time="14:05"
                            date="May 17, 2018" />
                    </ Hint> : null}
                </FlexibleXYPlot>
            </div>
        )
    }
}

export default TradingPlotChart;