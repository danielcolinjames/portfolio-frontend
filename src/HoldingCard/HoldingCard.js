import React from 'react';
import './HoldingCard.css';
import { Sparklines, SparklinesCurve, SparklinesSpots } from 'react-sparklines';

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

                {/* Display dollars. Math.abs is used because otherwise the minus sign will show up after the dollar sign */}
                <span className='dollars'>${Math.abs(props.profit).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                
                {/* Display cents. Right now it does not show leading zeros so it looks weird */}
                <span className='cents'>.{Math.abs(Math.round(props.profit*100)%100)}</span>
            </p>
        </div>
      );
    }

    // only show price section on bottom right if price is passed in
    let priceSection = null;
    if (typeof(props.price) !== 'undefined') {
        priceSection = (
            <div className='holdingPriceInfoContainer'>
                <p className='holdingPriceLabel'>
                    Price
                </p>
                <p className='holdingPriceValue'>
                <span className='dollars'>${props.price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                <span className='cents'>.{Math.abs(Math.round(props.price*100)%100)}</span>
                </p>
            </div>
        );
    } else {
        // TODO: priceSection gets populated with Value data
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
                <div className='holdingCardGraphContainer'>
                    <Sparklines
                        height={30}
                        data={props.data}
                        style={{
                            margin: 0
                        }}>
                        {/* currently not possible to have a gradient fill: https://github.com/borisyankov/react-sparklines/issues/87 */}
                        <SparklinesCurve
                            color='#f7931a'
                            style={{
                                margin: 0
                            }}/>
                        {/* This library can make spots on the chart, but the only option is end AND start spots */}
                        {/* <SparklinesSpots
                            size={0.5}
                            style={{
                                stroke: '#f7931a', strokeWidth: 3, fill: '#f7931a'
                            }} /> */}
                    </Sparklines>
                </div>
                {priceSection}
            </div>
        </div>
    );
}

export default HoldingCard;