import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TradingPlotChart from '../components/Chart/TradingPlotChart';
import { getPriceGraph } from '../actions/priceGraphs';


class PriceGraphContainer extends Component {
  fetchData() {
    if (this.props.match.params.marketSlug) {
      this.props.getPriceGraph(this.props.match.params.marketSlug);
    }
  }
  componentWillMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.coin !== prevProps.match.params.coin || this.props.match.params.marketSlug !== prevProps.match.params.marketSlug) {
      this.fetchData()
    }
  }

  render () {
    let coin = this.props.match.params.coin;
    let marketSlug = this.props.match.params.marketSlug;
    let thisMarketTrades = this.props.trades[coin] ? this.props.trades[coin].filter( item => item.market.slug === marketSlug ) : []
    return (
      <TradingPlotChart priceGraph={this.props.graphs[marketSlug]} trades={thisMarketTrades} />
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
