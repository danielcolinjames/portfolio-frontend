import React from 'react';

import './TransactionsPageHistoryListItem.css';
import btc from '../../images/logos/bitcoin-logo@3x.png';
import convertArrow from '../../images/ui-icons/icon-arrow-large@3x.png';

import SellIcon from '../../images/ui-icons/icon-sell@3x.png';
import BuyIcon from '../../images/ui-icons/icon-buy@3x.png';

const transactionsPageHistoryListItem = (props) => {

    let transactionHistoryItemFirstColumnContent = null;

    // Conditionally set the first column's content depending on whether it's a buy or sell order
    if (props.side === "sell") {
        transactionHistoryItemFirstColumnContent = (
            <div className='transactionHistoryItemInfoContainer'>
                {/* Sell icon */}
                <img src={SellIcon} className='transactionHistoryItemLogo' />
                {/* Transaction info (sell icon, logo, amount -> $amount */}
                <div className='transactionHistoryItemInfoWrapper'>
                    <div className='transactionHistoryItemInfoContent'>
                        {/* [BTC] 0.5 */}
                        <div className='transactionHistoryItemInfoFrom'>
                            <img className='transactionHistoryItemInfoFromLogo' src={btc} />
                            <p className='transactionHistoryItemInfoFromName'>
                                {props.amount}
                            </p>
                        </div>

                        {/* -> */}
                        <div className='transactionHistoryItemInfoArrow'>
                            <img className='transactionHistoryItemInfoArrowImg' src={convertArrow} />
                        </div>

                        {/* USD $3,300 */}
                        <div className='transactionHistoryItemInfoTo'>
                            <p className='transactionHistoryItemInfoToAmount'>
                                <span className='dollars'>${(props.amount * props.price).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                                <span className='cents'>.{Math.round((props.amount * props.price) * 100) % 100}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (props.side === "buy") {
        transactionHistoryItemFirstColumnContent = (
            <div className='transactionHistoryItemInfoContainer'>
                {/* Buy icon */}
                <img src={BuyIcon} className='transactionHistoryItemLogo' />
                {/* Transaction info (buy icon, $amount -> logo, amount */}
                <div className='transactionHistoryItemInfoWrapper'>
                    <div className='transactionHistoryItemInfoContent'>
                        {/* USD $3,300 */}
                        <div className='transactionHistoryItemInfoTo'>
                            <p className='transactionHistoryItemInfoToAmount'>
                                <span className='dollars'>${(props.amount * props.price).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                                <span className='cents'>.{Math.round((props.amount * props.price) * 100) % 100}</span>
                            </p>
                        </div>

                        {/* -> */}
                        <div className='transactionHistoryItemInfoArrow'>
                            <img className='transactionHistoryItemInfoArrowImg' src={convertArrow} />
                        </div>

                        {/* [BTC] 0.5 */}
                        <div className='transactionHistoryItemInfoFrom'>
                            <img className='transactionHistoryItemInfoFromLogo' src={btc} />
                            <p className='transactionHistoryItemInfoFromName'>
                                {props.amount}
                            </p>
                        </div>
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
                <span className='transactionHistoryItemDateColumnMonthDay'>{props.date}</span>
            </td>
            <td className='transactionHistoryItemSourceColumnData'>{props.source}</td>
        </tr>
    )
}

export default transactionsPageHistoryListItem;