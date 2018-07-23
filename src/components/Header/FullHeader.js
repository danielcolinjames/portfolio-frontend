import React from 'react';

import './FullHeader.css';

export default ({ totals }) => (
  <div className="header full">
    <dl>
      <dt>Total Balance in BTC</dt>
      <dd>{totals.balance_in_btc}</dd>

      <dt>Total Balance in USD</dt>
      <dd>{totals.balance_in_usd}</dd>
    </dl>
  </div>
)
