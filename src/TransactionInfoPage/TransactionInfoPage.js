import React from 'react';
import './TransactionInfoPage.css';
import ChartTest from '../ChartTest/ChartTest';
import { Link } from 'react-router-dom';

// Images
import refreshIcon from '../images/ui-icons/icon-refresh.svg';
import leftArrow from '../images/ui-icons/icon-back-arrow.svg';

const TransactionInfoPage = (props) => {
    return (
        <div id='transactionInfoPage'>
            <div id='transactionSidebar'>
                <div id='navigationControlsContainer'>
                    <div id='navigationControls'>
                        <div className='summaryButton'>
                            <Link className='summaryButtonLink' to="/">
                                <img src={leftArrow} />
                                <p>Summary</p>
                            </Link>
                        </div>
                        <div className='refreshButton'>
                            <img src={refreshIcon} />
                        </div>
                    </div>
                </div>

                <div id='transactionsHoldingsContainer'>
                    {props.holdings.map((holding) => {
                        return (
                            <div>{holding.name} {holding.symbol} {holding.balance}</div>
                        )
                    })}
                </div>
            </div>

            <div id='chartAndTransactions'>
                <div id='chartAndTransactionsOverlay'>
                    <ChartTest id='chartTest'>

                    </ChartTest>
                </div>

                <div id='transactionInfoHeader'>

                </div>

                {props.holdings.map((holding) => {
                    return (
                        <div>{holding.symbol}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default TransactionInfoPage;