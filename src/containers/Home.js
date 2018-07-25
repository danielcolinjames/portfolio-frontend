import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getHoldings } from '../actions/holdings';
import { getTotalHoldings } from '../actions/totals';

import Header from './Header';
import HoldingsContainer from './HoldingsContainer';
import TransactionsContainer from './TransactionsContainer';


class Home extends Component {
  componentWillMount () {
    document.body.style.backgroundColor = '#eaeef1';
    this.props.getHoldings();
    this.props.getTotalHoldings();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <div className="main-container"> */}
          <Switch>
            <Route path="/" exact component={HoldingsContainer} />
            <Route path="/transactions/:coin/" component={TransactionsContainer}/>
          </Switch>
        {/* </div> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getHoldings,
    getTotalHoldings,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);
