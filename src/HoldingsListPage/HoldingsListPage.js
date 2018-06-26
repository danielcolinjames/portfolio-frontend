import React from 'react';
import HoldingsList from '../HoldingsList/HoldingsList';
import HoldingCard from '../HoldingCard/HoldingCard';
import './HoldingsListPage.css';
import { Link } from 'react-router-dom';

// Images
import rightArrow from '../images/ui-icons/icon-right-arrow.svg';

const HoldingsListPage = (props) => {
    return (
        <div id='holdingsListPage'>
            <div id='holdingsNavigationContainer'>
                <div id='holdingsNavigationLeftGroup'>
                    {/* "Holdings" label, "Grid" dropdown, timeframe slider */}
                </div>

                <div id='holdingsNavigationRightGroup'>
                    <div className='allTransactionsButton'>
                        <Link className='allTransactionsButtonLink' to="/transactions">
                            <p>All Transactions</p>
                            <img src={rightArrow} className='allTransactionsRightArrow' />
                        </Link>
                    </div>
                </div>
            </div>

            <div id='holdingsListContainer'>
                {props.holdings.map((holding) => {
                    return (
                        <HoldingCard
                            name={holding.name}
                            key={holding.symbol}
                            symbol={holding.symbol}
                            data={holding.data}
                            balance={holding.balance}
                            value={holding.value}
                            valueChange={holding.valueChange}
                            profit={holding.profit}
                            price={holding.price} />
                    )
                })}
            </div>
        </div>
    )
}

export default HoldingsListPage;