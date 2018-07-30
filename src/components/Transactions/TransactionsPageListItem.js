import React from 'react';
import { NavLink } from 'react-router-dom';
// import btc from '../../assets/images/logos/bitcoin-logo@3x.png';
import './TransactionsPageListItem.css';

import CryptoIcon from 'react-webfont-cryptocoins';

const TransactionsPageListItem = (holding) => {
    return (
        <div className='transactionsListItemContainer'>
            <NavLink activeClassName='active' className='transactionsListItemLink' to={'/transactions/' + holding.holding.coin}>
                <div className='transactionsListItemInfoContainer'>
                    {/* <img
                        className='transactionsListItemLogo'
                        src={btc}
                        alt='Bitcoin logo' /> */}
                    <div className='transactionsListItemLogo'>
                        <CryptoIcon coin={holding.holding.coin} />
                    </div>
                    <div className='transactionsListItemInfo'>
                        <div className='transactionsListItemSymbol'>{holding.holding.coin}</div>
                        <div className='transactionsListItemName'>{holding.holding.coin}</div>
                    </div>
                </div>
                <div className='transactionsListItemAmountContainer'>
                    <div className='transactionsListItemAmountInfo'>
                        <p className='transactionsListItemAmountLabel'>
                            Amount
                            </p>
                        <p className='transactionsListItemAmountBalance'>
                            {holding.holding.balance}
                        </p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default TransactionsPageListItem;