import React from 'react';

import './TransactionItem.css';
import convertArrow from '../../assets/images/ui-icons/icon-arrow-large@3x.png';

import SellIcon from '../../assets/images/ui-icons/icon-sell@3x.png';
import BuyIcon from '../../assets/images/ui-icons/icon-buy@3x.png';

import CryptoIcon from 'react-webfont-cryptocoins'


export default ({ trade }) => {

    let transactionHistoryItemFirstColumnContent = null;

    // Conditionally set the first column's content depending on whether it's a buy or sell order
    if (trade.side === "sell") {
        transactionHistoryItemFirstColumnContent = (
            <div className='transactionHistoryItemInfoContainer'>
                {/* Sell icon */}
                <img src={SellIcon} className='transactionHistoryItemLogo' alt="" />
                {/* Transaction info (sell icon, [logo] amount ->  [logo] amount */}
                <div className='transactionHistoryItemInfoContent'>
                    {/* [NEO] 1.00 */}
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

                    {/* [BTC] 0.005 */}
                    <div className='transactionHistoryItemInfoTo'>
                        <CryptoIcon className='transactionHistoryItemInfoFromLogo' coin={trade.market.quote} />
                        {/* <span className='dollars'>{(trade.amount * trade.cost).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                            <span className='cents'>.{Math.round((trade.amount * trade.cost) * 100) % 100}</span> */}
                        <p className='transactionHistoryItemInfoToAmount'>
                            {trade.cost}
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
                {/* Transaction info (buy icon, [logo] amount -> [logo] + amount */}
                <div className='transactionHistoryItemInfoContent'>
                    {/* 0.005 BTC */}
                    <div className='transactionHistoryItemInfoTo'>
                        <CryptoIcon className='transactionHistoryItemInfoFromLogo' coin={trade.market.quote} />
                        {/* <span className='dollars'>{(trade.amount * trade.cost).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                            <span className='cents'>.{Math.round((trade.amount * trade.cost) * 100) % 100}</span> */}
                        <p className='transactionHistoryItemInfoToAmount'>
                            {trade.cost}
                        </p>
                    </div>

                    {/* -> */}
                    <div className='transactionHistoryItemInfoArrow'>
                        <img className='transactionHistoryItemInfoArrowImg' src={convertArrow} alt="" />
                    </div>

                    {/* [NEO] 1.00 */}
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
