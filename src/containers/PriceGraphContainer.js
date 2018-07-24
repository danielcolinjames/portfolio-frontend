import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPriceGraph } from '../actions/priceGraphs';

class PriceGraphContainer extends Component {
  componentDidUpdate () {
    let marketUUID = this.props.match.params.marketUUID;
    this.props.getPriceGraph(marketUUID);
  }

  render () {
    let coin = this.props.match.params.coin;
    let marketUUID = this.props.match.params.marketUUID;
    let thisMarketTrades = this.props.trades[coin] ? this.props.trades[coin].filter( item => item.market.uuid === marketUUID ) : []
    return (
      <div className="price-graph container">
        <h1>ZHE GRAPH</h1>
        <p>{JSON.stringify(this.props.graphs[marketUUID])}</p>
        <p>{JSON.stringify(thisMarketTrades)}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ trades, graphs }) => ({ trades, graphs });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPriceGraph
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceGraphContainer);
