import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import { getTradesForCoin } from '../actions/trades';
import TransactionList from '../components/Transactions/TransactionList';
import PriceGraphContainer from './PriceGraphContainer';

class TransactionsContainer extends Component {
  componentDidUpdate () {
    let coin = this.props.match.params.coin;
    // this.props.getPriceGraph("9ee0ea25-499f-41e7-894a-13eb10c25d18");
    this.props.getTradesForCoin(coin);
  }

  render () {
    let coin = this.props.match.params.coin;
    return (
      <div className="transactions container">
        <div className="transactions sidebar">
          <h1>Holdings list!</h1>
          <ul>
            { this.props.holdings.map( (holding) => (
              <li key={holding.coin}><Link to={`/transactions/${holding.coin}`}>{holding.coin}</Link></li>
            )) }
          </ul>
        </div>
        <div className="transactions graph">
          <Switch>
            <Route path="/transactions/:coin/:marketUUID/" component={PriceGraphContainer}/>
          </Switch>
        </div>
        <div className="transactions list">
          <h1>Transactions list!</h1>
          { this.props.trades && this.props.trades[coin] &&
            <TransactionList coin={coin} trades={this.props.trades[coin]} />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ holdings, trades }) => ({ holdings, trades });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTradesForCoin
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);
