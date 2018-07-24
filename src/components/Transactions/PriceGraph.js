import React from 'react';

export default ({ priceGraph, trades }) => (
  <div className="price-graph">
    <h1>ZHE GRAPH</h1>
    <p>{JSON.stringify(priceGraph)}</p>
    <p>{JSON.stringify(trades)}</p>
  </div>
)
