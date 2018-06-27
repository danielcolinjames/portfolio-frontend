import React from 'react';
import { NavLink } from 'react-router-dom';
import btc from '../../images/logos/bitcoin-logo.png';
import './TransactionsPageListItem.css';

const TransactionsPageListItem = (props) => {
    return (
        <div className='transactionsListItemContainer'>
            <NavLink activeClassName='active' className='transactionsListItemLink' to={'/transactions/' + props.symbol}>
                {/* <div className='transactionsListItemTopBar'> */}
                    <div className='transactionsListItemInfoContainer'>
                        <img
                            className='transactionsListItemLogo'
                            src={btc}
                            alt='Bitcoin logo' />
                        <div className='transactionsListItemInfo'>
                            <div className='transactionsListItemSymbol'>{props.symbol}</div>
                            <div className='transactionsListItemName'>{props.name}</div>
                        </div>
                    </div>
                    <div className='transactionsListItemAmountContainer'>
                        <div className='transactionsListItemAmountInfo'>
                            <p className='transactionsListItemAmountLabel'>
                                Amount
                            </p>
                            <p className='transactionsListItemAmountBalance'>
                                {props.balance}
                            </p>
                        </div>
                    </div>
                {/* </div> */}
            </NavLink>
        </div>
    )
}

export default TransactionsPageListItem;