import React from 'react';

export default ({ trade }) => (
  <span>{trade.side} {trade.amount} {trade.market.symbol} for {trade.cost} </span>
)
