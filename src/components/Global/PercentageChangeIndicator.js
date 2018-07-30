import React from 'react';
import './PercentageChangeIndicator.css';

import IncreaseIcon from '../../assets/images/ui-icons/icon-increase@3x.png';
import DecreaseIcon from '../../assets/images/ui-icons/icon-decrease@3x.png';

const percentageChangeIndicator = (props) => {
    // This next comment is required to make the warning go away that this variable is unused. Apparently assigning it JSX doesn't count unless you change something in your configuration which I couldn't be bothered to do right now.
    // eslint-disable-next-line
    let percentageChangeIndicatorComponent = null;

    return (
        props.valueChange > 0 ? percentageChangeIndicatorComponent = (
            <div className='percentChangeContainer'>
                <img className='percentChangeTriangleUp' src={IncreaseIcon} alt="" />
                <p className='percentChangeValueUp'>{props.valueChange}
                    <span className='percentChangePercentUp'>%</span>
                </p>
            </div>
        ) : (
            <div className='percentChangeContainer'>
                <img className='percentChangeTriangleDown' src={DecreaseIcon} alt="" />
                <p className='percentChangeValueDown'>{props.valueChange}
                    <span className='percentChangePercentDown'>%</span>
                </p>
            </div>
        )
    );
}

export default percentageChangeIndicator;