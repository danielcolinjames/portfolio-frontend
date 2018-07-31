// import React from 'react';

// export default ({ trade }) => (
//   <span>{trade.side} {trade.amount} {trade.market.symbol} for {trade.cost} </span>
// )

import React from 'react';

import './TransactionItem.css';
import btc from '../../assets/images/logos/bitcoin-logo@3x.png';
import convertArrow from '../../assets/images/ui-icons/icon-arrow-large@3x.png';

import SellIcon from '../../assets/images/ui-icons/icon-sell@3x.png';
import BuyIcon from '../../assets/images/ui-icons/icon-buy@3x.png';

import CryptoIcon from 'react-webfont-cryptocoins'


// import CryptoIcon from 'react-webfont-cryptocoins';

export default ({ trade }) => {

    let transactionHistoryItemFirstColumnContent = null;

    // Conditionally set the first column's content depending on whether it's a buy or sell order
    if (trade.side === "sell") {
        transactionHistoryItemFirstColumnContent = (
            <div className='transactionHistoryItemInfoContainer'>
              {/* Sell icon */}
              <img src={SellIcon} className='transactionHistoryItemLogo' alt="" />
              {/* Transaction info (sell icon, logo, amount -> $amount */}
              <div className='transactionHistoryItemInfoContent'>
                {/* [BTC] 0.5 */}
                <div className='transactionHistoryItemInfoFrom'>
                  <CryptoIcon className='transactionHistoryItemInfoFromLogo' coin={trade.market.base} />

                  <p className='transactionHistoryItemInfoFromName'>
                    {trade.amount}
                  </p>
                </div>

                {/* -> */}
                <div className='transactionHistoryItemInfoArrow'>
                  <img className='transactionHistoryItemInfoArrowImg' src={convertArrow} alt="" />
                </div>

                {/* USD $3,300 */}
                <div className='transactionHistoryItemInfoTo'>
                  <p className='transactionHistoryItemInfoToAmount'>
                    <span className='dollars'>
                      <CryptoIcon className='transactionHistoryItemInfoFromLogo' coin={trade.market.quote} />
                      {(trade.amount * trade.cost).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                            <span className='cents'>.{Math.round((trade.amount * trade.cost) * 100) % 100}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    } else if (trade.side === "buy") {
        transactionHistoryItemFirstColumnContent = (
            <div className='transactionHistoryItemInfoContainer'>
              {/* Buy icon */}
              <img src={BuyIcon} className='transactionHistoryItemLogo' alt="" />
              {/* Transaction info (buy icon, $amount -> logo, amount */}
              <div className='transactionHistoryItemInfoContent'>
                {/* USD $3,300 */}
                <div className='transactionHistoryItemInfoTo'>
                  <p className='transactionHistoryItemInfoToAmount'>
                    <span className='dollars'>
                      <CryptoIcon className='transactionHistoryItemInfoFromLogo' coin={trade.market.quote} />
                      {(trade.amount * trade.cost).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                    <span className='cents'>.{Math.round((trade.amount * trade.cost) * 100) % 100}</span>
                  </p>
                </div>

                {/* -> */}
                <div className='transactionHistoryItemInfoArrow'>
                  <img className='transactionHistoryItemInfoArrowImg' src={convertArrow} alt="" />
                </div>

                {/* [BTC] 0.5 */}
                <div className='transactionHistoryItemInfoFrom'>
                  <CryptoIcon className='transactionHistoryItemInfoFromLogo' coin={trade.market.base} />
                  <p className='transactionHistoryItemInfoFromName'>
                            {trade.amount}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <tr>
            <td>
                {transactionHistoryItemFirstColumnContent}
            </td>
            <td className='transactionHistoryItemDateColumnData'>
                <span className='transactionHistoryItemDateColumnMonthDay'>{trade.order_date}</span>
            </td>
            <td className='transactionHistoryItemSourceColumnData'>{trade.market.exchange}</td>
        </tr>
    )
}
