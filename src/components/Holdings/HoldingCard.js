import React from 'react';
import { Link } from 'react-router-dom';

import PercentageChangeIndicator from '../Global/PercentageChangeIndicator';
import './HoldingCard.css';

import CryptoIcon from 'react-webfont-cryptocoins'


export default ({ holding }) => {

  // only show divider and "Profit" section if profit value is passed through holding
  let profitSection = null;

  if (typeof (holding.profit) !== 'undefined') {
    profitSection = (
      <div className='holdingProfitContainer'>
        <p className='holdingProfitLabel'>
          Profit
          </p>
        <p className='holdingProfitValue'>
          {/* currency formatting taken from here: https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript */}
          {/* version including cents: ${holding.value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} */}

          {/* show plus or minus sign based on whether or not the profit is positive */}
          {holding.profit > 0 ? (
            <span className='positive'>+</span>
          ) : (
              <span className='negative'>-</span>
            )}

          {/* Display dollars. Math.abs is used because otherwise the minus sign will show up after the dollar sign */}
          <span className='dollars'>${Math.abs(holding.profit).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>

          {/* Display cents. Right now it does not show leading zeros so it looks weird */}
          <span className='cents'>.{Math.abs(Math.round(holding.profit * 100) % 100)}</span>
        </p>
      </div>
    );
  }

  // only show price section on bottom right if price is passed in
  let priceSection = null;
  if (typeof (holding.price) !== 'undefined') {
    priceSection = (
      <div className='holdingPriceInfoContainer'>
        <p className='holdingPriceLabel'>
          Price
              </p>
        <p className='holdingPriceValue'>
          <span className='dollars'>${holding.price.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
          <span className='cents'>.{Math.abs(Math.round(holding.price * 100) % 100)}</span>
        </p>
      </div>
    );
  } else {
    // TODO: priceSection gets populated with Value data
  }

  const tryRequire = (path) => {
    try {
     return require(`${path}`);
    } catch (err) {
      console.log(err)
     return null;
    }
  };

  // const logoPath = '../../node_modules/cryptocurrency-icons/dist/128/color/' + holding.coin.toLowerCase() + '.png';
  // const logo = tryRequire(logoPath) ? tryRequire(logoPath) : btc;
  

  return (
    // <div>
    //   <dl>
    //     <dt>Coin</dt>
    //     <dd><Link to={`/transactions/${holding.coin}/`}>{holding.coin}</Link></dd>

    //     <dt>Balance in BTC</dt>
    //     <dd>{holding.balance}</dd>

    //     <dt>Balance in USD</dt>
    //     <dd>{holding.balance_in_usd}</dd>
    //   </dl>
    // </div>

    <div className='holdingCard'>
      <Link className='holdingCardTransactionsLink' to={"transactions/" + holding.coin}>
        {/* Top section */}
        <div className='holdingCardTopBar'>
          <div className='holdingCurrencyInfoContainer'>
            <span className='holdingCurrencyLogo'>
              <CryptoIcon coin={holding.coin} />
            </span>

            <div className='holdingCurrencyInfo'>
              <div className='holdingCurrencySymbol'>{holding.coin}</div>
              <div className='holdingCurrencyName'>{holding.coin}</div>
            </div>
          </div>
          <div className='holdingCurrencyAmountContainer'>
            <div className='holdingCurrencyAmountInfo'>
              <p className='holdingCurrencyAmountLabel'>
                Amount
                        </p>
              <p className='holdingCurrencyAmountBalance'>
                {/* fix to 4 decimal places unless it's a 0.00122413853 type of balance */}
                {/* TODO: more robust formatting rules here */}
                {holding.balance > 1 ? (holding.balance * 1).toFixed(4) : holding.balance}
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
                <span className='dollars'>${holding.balance_in_usd.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                <span className='cents'>.{Math.round(holding.balance_in_usd * 100) % 100}</span>
              </p>
              {/* <PercentageChangeIndicator valueChange={holding.valueChange} /> */}
              <PercentageChangeIndicator valueChange={(Math.floor(Math.random() * 201) - 100).toFixed(2)} />
            </div>
            {profitSection}
          </div>
        </div>
        {/* Bottom section */}
        <div className='holdingCardBottomBar'>
          <div className='holdingCardGraphContainer'>
            {/* <Sparklines
                            height={30}
                            data={holding.data}
                            style={{
                                margin: 0
                            }}> */}
            {/* currently not possible to have a gradient fill: https://github.com/borisyankov/react-sparklines/issues/87 */}
            {/* <SparklinesCurve
                                color='#f7931a'
                                style={{
                                    margin: 0
                                }} /> */}
            {/* This library can make spots on the chart, but the only option is end AND start spots */}
            {/* <SparklinesSpots
                            size={0.5}
                            style={{
                                stroke: '#f7931a', strokeWidth: 3, fill: '#f7931a'
                            }} /> */}
            {/* </Sparklines> */}
          </div>
          {priceSection}
        </div>
      </Link>
    </div>
  )
}