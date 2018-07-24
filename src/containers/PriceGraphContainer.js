import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PriceGraph from '../components/Transactions/PriceGraph';
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
      <PriceGraph priceGraph={this.props.graphs[marketUUID]} trades={thisMarketTrades} />
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
