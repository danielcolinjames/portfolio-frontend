import React from 'react';

const whiteGradient = () => {
    return (
        <g id="whiteGradientOverlay">
            <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
                    <stop stopColor="#FFFFFF" offset="1.86054913%"></stop>
                    <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                {/* y= -[FlexibleXYPlot.height] and height= [FlexibleXYPlot.height * 2] so it will draw this white box over top of the chart even if the first y position is max or min. This range could be a bit smaller because of the yPadding on the chart, but I still don't understand exactly how that works in terms of pixels / ratios or whatever */}
                <rect id="Rectangle" fill="url(#linearGradient-1)" fillRule="nonzero" x="0" y="-466" width="80" height="932"></rect>
            </g>
        </g>
    );
}

export default whiteGradient;