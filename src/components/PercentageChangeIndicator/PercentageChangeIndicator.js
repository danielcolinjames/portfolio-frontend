import React from 'react';
import './PercentageChangeIndicator.css';

import IncreaseIcon from '../../images/ui-icons/icon-increase@3x.png';
import DecreaseIcon from '../../images/ui-icons/icon-decrease@3x.png';

const percentageChangeIndicator = (props) => {
    let percentageChangeIndicatorComponent = null;

    return (
        props.valueChange > 0 ? percentageChangeIndicatorComponent = (
            <div className='percentChangeContainer'>
                <img className='percentChangeTriangleUp' src={IncreaseIcon} />
                <p className='percentChangeValueUp'>{Math.abs(props.valueChange)}
                    <span className='percentChangePercentUp'>%</span>
                </p>
            </div>
        ) : (
            <div className='percentChangeContainer'>
                <img className='percentChangeTriangleDown' src={DecreaseIcon} />
                <p className='percentChangeValueDown'>{Math.abs(props.valueChange)}
                    <span className='percentChangePercentDown'>%</span>
                </p>
            </div>
        )
    )
}

export default percentageChangeIndicator;