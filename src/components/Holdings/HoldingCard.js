import React from 'react';
import { Link } from 'react-router-dom';

import PercentageChangeIndicator from '../Global/PercentageChangeIndicator';
import './HoldingCard.css';

import CryptoIcon from 'react-webfont-cryptocoins'

const data = [
  { x: 1515196800000, y: 0.00022501 },
  { x: 1515283200000, y: 0.000163 },
  { x: 1515369600000, y: 0.000237 },
  { x: 1515456000000, y: 0.00024206 },
  { x: 1515542400000, y: 0.00025999 },
  { x: 1515628800000, y: 0.00020398 },
  { x: 1515715200000, y: 0.0001064 }
]

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
          <HoldingCardPriceGraph graphData={data} />
          <div className='holdingPriceInfoContainer'>
            <p className='holdingPriceLabel'>
              Price
            </p>
            <p className='holdingPriceValue'>
              <span className='dollars'>${(holding.coin_to_btc_price * holding.btc_to_usd_price).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
              <span className='cents'>.{Math.abs(Math.round((holding.coin_to_btc_price * holding.btc_to_usd_price) * 100) % 100)}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}