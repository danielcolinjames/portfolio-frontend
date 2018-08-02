import React from 'react';

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
        <TransactionItem key={trade.uuid} trade={trade} linkTo={`/transactions/${coin}/${trade.market.slug}/`}/>
      ))}
    </tbody>
  </table>
)
