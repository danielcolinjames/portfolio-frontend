import React from 'react';
import './HoldingCard.css';

// TODO: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
import btc from '../images/logos/bitcoin-logo@3x.png';

// TODO: more robust currency formatting
// const currencyFormatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'CAD',
//     minimumFractionDigits: 2,
// }) //called like: currencyFormatter.format(props.profit);

const HoldingCard = (props) => {
    // only show divider and "Profit" section if profit value is passed through props
    let profitSection = null;

    if (typeof(props.profit) !== 'undefined') {
      profitSection = (
        <div className='holdingProfitContainer'>
            <p className='holdingProfitLabel'>
                Profit
            </p>
            <p className='holdingProfitValue'>
                {/* currency formatting taken from here: https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript */}
                {/* version including cents: ${props.value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} */}

                {/* show plus or minus sign based on whether or not the profit is positive */}
                {props.profit > 0 ? (
                    <span className='positive'>+</span>
                ) : (
                    <span className='negative'>-</span>
                )}

                {/* display dollars. Math.abs is used because otherwise the minus sign will show up after the dollar sign */}
                <span className='dollars'>${Math.abs(props.profit).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                
                {/* display cents. */}
                <span className='cents'>.{Math.abs(Math.round(props.profit*100)%100)}</span>
            </p>
        </div>
      );
    }

    return(
        <div className='holdingCard'>
            {/* Top section */}
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
            {/* Middle section */}
            <div className='holdingCardMiddleBar'>
                <div className='holdingValueProfitContainer'>
                    <div className='holdingValueContainer'>
                        <p className='holdingValueLabel'>
                            Value
                        </p>
                        <p className='holdingValueValue'>
                            <span className='dollars'>${props.value.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                            <span className='cents'>.{Math.round(props.value*100)%100}</span>
                        </p>
                            { (props.valueChange > 0) ? (
                                <div className='holdingValueChangeContainer'>
                                    <div className='holdingValueChangeTriangleUp'></div>
                                    <p className='holdingValueChangeValueUp'>{Math.abs(props.valueChange)}
                                        <span className='percentUp'>%</span>
                                    </p>
                                </div>
                            ) : (
                                <div className='holdingValueChangeContainer'>
                                    <div className='holdingValueChangeTriangleDown'></div>
                                    <p className='holdingValueChangeValueDown'>{Math.abs(props.valueChange)}
                                        <span className='percentDown'>%</span>
                                    </p>
                                </div>

                            )}        
                    </div>
                    {profitSection}
                </div>
            </div>
            {/* Bottom section */}
            <div className='holdingCardBottomBar'>

            </div>
        </div>
    );
}

export default HoldingCard;