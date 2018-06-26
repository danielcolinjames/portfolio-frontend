import React from 'react';
import './HoldingsList.css';

const HoldingsList = (props) => {
    return(
        <div className='holdingsListContainer'>
            <div className='holdingsListCardContainer'>
                {props.children}
            </div>
        </div>
    );
}

export default HoldingsList;