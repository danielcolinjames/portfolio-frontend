import React from 'react';
import { Link } from 'react-router-dom';


export default ({ holding }) => (
  <div>
    <dl>
      <dt>Coin</dt>
      <dd><Link to={`/transactions/${holding.coin}/`}>{holding.coin}</Link></dd>

      <dt>Balance in BTC</dt>
      <dd>{holding.balance}</dd>

      <dt>Balance in USD</dt>
      <dd>{holding.balance_in_usd}</dd>
    </dl>
  </div>
)
