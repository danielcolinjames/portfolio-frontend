import React, { Component } from 'react';

class HoldingsContainer extends Component {
  state = {
    holdings: [ { name: "kir" } ]
  }
  render () {
    return (
      <div className="holdings container">
        <h1>Holdings!</h1>
        <div id='holdingsListContainer'>
          { this.state.holdings.map( (holding) => (
            <div>
              Name: {holding.name}
            </div>  // TODO: HoldingCard
          )) }
        </div>
      </div>
    )
  }
}

export default HoldingsContainer;
