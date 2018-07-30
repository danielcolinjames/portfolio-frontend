import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import { getTradesForCoin } from '../actions/trades';
import TransactionList from '../components/Transactions/TransactionList';
import PriceGraphContainer from './PriceGraphContainer';

import TransactionsPageListItem from '../components/Transactions/TransactionsPageListItem';

import './TransactionsContainer.css';


// Images
import refreshIcon from '../assets/images/ui-icons/icon-refresh.svg';
import leftArrow from '../assets/images/ui-icons/icon-back-arrow.svg';


class TransactionsContainer extends Component {
  fetchData() {
    let coin = this.props.match.params.coin;
    this.props.getTradesForCoin(coin);
  }
  componentWillMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.coin !== prevProps.match.params.coin) {
      this.fetchData()
    }
  }

  render() {
    let coin = this.props.match.params.coin;
    let lastTrade = (this.props.trades && this.props.trades[coin]) ? this.props.trades[coin][0] : null;
    return (
      // <div className="transactions container">
      //   <div className="transactions sidebar">
      //     <h1>Holdings list!</h1>
      //     <ul>
      //       { this.props.holdings.map( (holding) => (
      //         <li key={holding.coin}><Link to={`/transactions/${holding.coin}`}>{holding.coin}</Link></li>
      //       )) }
      //     </ul>
      //   </div>
      //   <div className="transactions graph">
      //     <Switch>
      //       <Route path="/transactions/:coin/:marketUUID/" component={PriceGraphContainer}/>
      //     </Switch>
      //   </div>
      //   <div className="transactions list">
      //     <h1>Transactions list!</h1>
      //     { this.props.trades && this.props.trades[coin] &&
      //       <TransactionList coin={coin} trades={this.props.trades[coin]} />
      //     }
      //   </div>
      // </div>

      <div id='transactionInfoPage'>
        <div id='transactionSidebar'>
          <div id='navigationControlsContainer'>
            <div id='navigationControls'>
              <div className='summaryButton'>
                <Link className='summaryButtonLink' to="/">
                  <img src={leftArrow} alt="" />
                  <p>Summary</p>
                </Link>
              </div>
              <div className='refreshButton'>
                <img src={refreshIcon} alt="" />
              </div>
            </div>
          </div>

          <div id='transactionsHoldingsContainer'>
            <div id='transactionsListHeaderContainer'>
              <p id='transactionsListHeaderTitle'>
                All Transactions
              </p>
              <p id='transactionsListHeaderBody'>
                {this.props.holdings.length} holdings
              </p>
            </div>
            {this.props.holdings.map((holding) => {
              return (
                // <TransactionsPageListItem key={holding.coin} symbol={holding.symbol} name={holding.name} balance={holding.balance} />
                // <li key={holding.coin} symbol={holding.symbol} name={holding.name} balance={holding.balance} />
                  <TransactionsPageListItem holding={holding} key={holding.coin}><Link to={`/transactions/${holding.coin}`}>{holding.coin}</Link> </TransactionsPageListItem>
                // TODO: also add props for the information shown when an entry is clicked
              )
            })}
          </div>
        </div>

        <div id='chartAndTransactions'>
          <div id='chartOverlay' />
          <div className="transactions graph">
            <Switch>
              <Route path="/transactions/:coin/:marketUUID/" component={PriceGraphContainer} />
              {/* <Route path="/transactions/:coin/" component={PriceGraphContainer} /> */}
            </Switch>
          </div>

          {/* {props.trades.map((trade, i) => {
            return (
            <TransactionsPageHistoryListItem
            symbol={trade.symbol}
            date={trade.close_date}
            source={trade.exchange_account.exchange}
            amount={trade.amount}
            price={trade.cost}
            side={trade.side} />
            )
          })} */}

          {/* <div className="transactions list">
          <h1>Transactions list!</h1> */}
          {lastTrade &&
            (
              <div>
                <Redirect to={`/transactions/${coin}/${lastTrade.market.uuid}/`}/>
                <TransactionList coin={coin} trades={this.props.trades[coin]} />
              </div>
            )
          }
          {/* </div> */}

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
