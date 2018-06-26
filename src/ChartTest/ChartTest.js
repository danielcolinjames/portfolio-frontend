import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import './ChartTest.css';
import {
    FlexibleXYPlot,
    XAxis,
    Hint,
    YAxis,
    LineSeries,
    MarkSeries,
    VerticalGridLines,
    GradientDefs,
    AreaSeries
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

const tipStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    margin: '20px',
};

const boxStyle = {
    height: '204px',
    width: '200px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.12), 0 12px 24px 0 rgba(0,0,0,0.05)'
};
  
function buildValue(hoveredCell) {
    return {
        x: hoveredCell.x,
        y: hoveredCell.y
        // TODO: set y as (maxY - minY) / 2
    };
}

class ChartTest extends React.Component {
    state = {
        hoveredCell: false
    }

    render() {

        const {hoveredCell} = this.state;
        
        return (
            <div id='chartTest'>
                <FlexibleXYPlot
                    height={466}

                    margin={{
                        top: 50,
                        right: 100,
                        left: 0,
                        bottom: 50}}>
                    
                    <GradientDefs>
                        <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#F7931A" stopOpacity={0.2}/>
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
                        data={data}
                        >
                    </LineSeries>
                    
                    <AreaSeries
                        stroke="none"
                        color={'url(#CoolGradient)'}
                        opacity={1}
                        className="areaSeries"
                        data={data} />
                    
                    {/* Sells (red dots) */}
                    <MarkSeries
                        stroke="#F66B7C"
                        strokeWidth={2}
                        fill="white"
                        size={12}
                        style={{
                            
                        }}
                        data={data.slice(7, 9)}>
                    </MarkSeries>
                    
                    {/* Buys (green dots) */}
                    <MarkSeries
                        stroke="#7ED321"
                        strokeWidth={2}
                        fill="white"
                        size={12}
                        style={{
                            cursor: 'pointer'
                        }}
                        data={data.slice(0, 5)}
                        // onValueMouseOver={v=> console.log(v.y)}
                        onValueMouseOver={v => this.setState({hoveredCell: v.x && v.y ? v : false})}
                        onValueMouseOut={v => this.setState({hoveredCell: false})}>
                        >
                    </MarkSeries>

                    {hoveredCell ? <Hint value={buildValue(hoveredCell)}>
                        <div style={tipStyle}>
                            <div style={{
                                    ...boxStyle,
                                }}>
                                {hoveredCell.y}
                            </div>
                        </div>
                    </ Hint> : null}
                    
                    {/* Blue marker over current price */}
                    <Hint
                        value={data[data.length - 1]}
                        align={{
                            horizontal: 'right',
                            vertical: 'top'
                        }}
                        >
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
                </FlexibleXYPlot>
            </div>
        )
    }
}

export default ChartTest;