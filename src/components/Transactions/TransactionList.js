import React from 'react';
// import { Link } from 'react-router-dom';

import TransactionItem from './TransactionItem';

import './TransactionList.css';


export default ({ trades, coin }) => (
  <table id='transactionHistoryTable'>
    <tbody>
      <tr id='transactionHistoryTableHeaderRow'>
        <th id='transactionHistoryTableFirstColumnHeader'></th>
        <th id='transactionHistoryTableDateHeader'>Date</th>
        <th id='transactionHistoryTableSourceHeader'>Source</th>
      </tr>
      {trades.map((trade) => (
        // <li key={trade.uuid}><Link to={`/transactions/${coin}/${trade.market.slug}/`}><TransactionItem trade={trade}/></Link></li>
        <TransactionItem key={trade.uuid} trade={trade} />
      ))}
    </tbody>
  </table>
)
