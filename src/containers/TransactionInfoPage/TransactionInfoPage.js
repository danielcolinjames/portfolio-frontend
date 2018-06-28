import React from 'react';
import './TransactionInfoPage.css';
import TradingPlotChart from '../../components/TradingPlotChart/TradingPlotChart';
import { Link } from 'react-router-dom';
import TransactionsPageListItem from '../../components/TransactionsPageListItem/TransactionsPageListItem';

// Images
import refreshIcon from '../../images/ui-icons/icon-refresh.svg';
import leftArrow from '../../images/ui-icons/icon-back-arrow.svg';

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
                    <div id='transactionsListHeaderContainer'>
                        <p id='transactionsListHeaderTitle'>
                            All Transactions
                    </p>
                        <p id='transactionsListHeaderBody'>
                            {props.holdings.length} holdings
                    </p>
                    </div>
                    {props.holdings.map((holding) => {
                        return (
                            <TransactionsPageListItem symbol={holding.symbol} name={holding.name} balance={holding.balance} />
                            // TODO: also add props for the information shown when an entry is clicked
                        )
                    })}
                </div>
            </div>

            <div id='chartAndTransactions'>
                <div id='chartAndTransactionsOverlay'>
                    <TradingPlotChart id='chartTest'>

                    </TradingPlotChart>
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