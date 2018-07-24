import React from 'react';
import { Link } from 'react-router-dom';


export default ({ trades, coin }) => (
  <ul>
    { trades.map( (trade) => (
      <li key={trade.uuid}><Link to={`/transactions/${coin}/${trade.market.uuid}/`}>{trade.uuid}</Link></li>
    )) }
  </ul>
)
