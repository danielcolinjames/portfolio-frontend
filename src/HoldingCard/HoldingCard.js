import React from 'react';
import './HoldingCard.css';

// TODO: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
import btc from '../images/logos/bitcoin-logo@3x.png';

const HoldingCard = (props) => {
    return(
        <div className='holdingCard'>
            <div className='holdingCardTopBar'>
                <div className='holdingCurrencyInfoContainer'>
                    <img
                        className='holdingCurrencyLogo'
                        src={btc}
                        alt='Bitcoin logo'/>
                    <div className='holdingCurrencyInfo'>
                        <div className='holdingCurrencySymbol'>{props.symbol}</div>
                        <div className='holdingCurrencyName'>{props.name}</div>
                    </div>
                </div>
                <div className='holdingCurrencyAmountContainer'>
                    <div className='holdingCurrencyAmountInfo'>
                        <p className='holdingCurrencyAmountLabel'>
                            Amount
                        </p>
                        <p className='holdingCurrencyAmountBalance'>
                            {props.balance}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HoldingCard;