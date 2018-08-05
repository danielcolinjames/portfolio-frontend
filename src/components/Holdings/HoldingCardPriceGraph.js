import React from 'react';
import {
    FlexibleXYPlot,
    // Hint,
    LineSeries,
    // MarkSeries,
    GradientDefs,
    AreaSeries,
    CustomSVGSeries
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

import './HoldingCardPriceGraph.css';

const HoldingCardPriceGraph = (props) => {

    return (
        <div className='holdingCardPriceGraph'>
            <FlexibleXYPlot

                margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    // this bottom margin is important: it leaves room for the "Price" text in the HoldingCard
                    bottom: 40
                }} >

                <GradientDefs>
                    <linearGradient id="holdingCardPriceGraphGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#F7931A" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="#F7931A" stopOpacity={0.0} />
                    </linearGradient>
                </GradientDefs>

                <LineSeries
                    stroke="#F7931A"
                    data={props.graphData} />

                <AreaSeries
                    stroke="none"
                    color={'url(#holdingCardPriceGraphGradient)'}
                    opacity={1}
                    className="areaSeries"
                    data={props.graphData} />

                <CustomSVGSeries
                    data={props.graphData.slice(props.graphData.length - 1, props.graphData.length)}
                    customComponent={(positionInPixels) => {
                        return (
                            <g className="holdingCardPriceGraphPriceLine">
                                <circle cx="0" cy="0" r={5} fill="#4A90E2" />
                                {/* I tried making y2 something like 100 + positionInPixels.y, but it turns out that since SVG can't draw outside its box, it makes more sense to just draw the line longer than its container. I'm leaving in the positionInPixels above though because it took me like an hour to remember what that value was called in the react-vis library and I don't want to go through that again. */}
                                <line x1="0" y1="0" x2="0" y2={100} style={{ stroke: "#4A90E2", strokeWidth: 1 }} />
                            </g>
                        )
                    }} />

            </FlexibleXYPlot>
        </div >
    )
}

export default HoldingCardPriceGraph;
