import React from 'react';
import './PercentageChangeIndicator.css';

import IncreaseIcon from '../../assets/images/ui-icons/icon-increase@3x.png';
import DecreaseIcon from '../../assets/images/ui-icons/icon-decrease@3x.png';

const percentageChangeIndicator = (props) => {
    let percentageChangeIndicatorComponent = null;
    console.log(props.valueChange);
    return (
        
        props.valueChange > 0 ? percentageChangeIndicatorComponent = (
            <div className='percentChangeContainer'>
                <img className='percentChangeTriangleUp' src={IncreaseIcon} />
                <p className='percentChangeValueUp'>{props.valueChange}
                    <span className='percentChangePercentUp'>%</span>
                </p>
            </div>
        ) : (
            <div className='percentChangeContainer'>
                <img className='percentChangeTriangleDown' src={DecreaseIcon} />
                <p className='percentChangeValueDown'>{props.valueChange}
                    <span className='percentChangePercentDown'>%</span>
                </p>
            </div>
        )
    )
}

export default percentageChangeIndicator;