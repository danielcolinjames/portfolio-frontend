import React from 'react';
import { Link } from 'react-router-dom';

import TransactionItem from './TransactionItem';


export default ({ trades, coin }) => (
  <ul>
    { trades.map( (trade) => (
      <li key={trade.uuid}><Link to={`/transactions/${coin}/${trade.market.uuid}/`}><TransactionItem trade={trade}/></Link></li>
    )) }
  </ul>
)
