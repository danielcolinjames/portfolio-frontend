import React from 'react';

export default ({ holding }) => (
  <div>
    <dl>
      <dt>Coin</dt>
      <dd>{holding.coin}</dd>

      <dt>Balance in BTC</dt>
      <dd>{holding.balance}</dd>

      <dt>Balance in USD</dt>
      <dd>{holding.balance_in_usd}</dd>
    </dl>
  </div>
)
