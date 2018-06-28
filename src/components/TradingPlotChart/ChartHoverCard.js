import React from 'react';
import './ChartHoverCard.css';

const ChartHoverCard = (props) => {
    return (
        <div className='chartHoverCardContainer'>
            <div className='chartHoverCardContent'>
                {props.price}
            </div>
        </div>
    );
}

export default ChartHoverCard;