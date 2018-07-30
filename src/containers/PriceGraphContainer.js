import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PriceGraph from '../components/Transactions/PriceGraph';
import { getPriceGraph } from '../actions/priceGraphs';


class PriceGraphContainer extends Component {
  componentWillMount () {
    let marketSlug = this.props.match.params.marketSlug;
    this.props.getPriceGraph(marketSlug);
  }

  render () {
    let coin = this.props.match.params.coin;
    let marketSlug = this.props.match.params.marketSlug;
    let thisMarketTrades = this.props.trades[coin] ? this.props.trades[coin].filter( item => item.market.slug === marketSlug ) : []
    return (
      <PriceGraph priceGraph={this.props.graphs[marketSlug]} trades={thisMarketTrades} />
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
