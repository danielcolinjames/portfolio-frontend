import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import HoldingsListPage from './HoldingsListPage/HoldingsListPage';
import TransactionInfoPage from './TransactionInfoPage/TransactionInfoPage';

class App extends Component {
  state = {
    holdings: [
      { symbol: 'BTC', name: 'Bitcoin', data: [5, 10, 5, 20, 8, 15], balance: 5.076634, value: 62114.27, valueChange: -1.15, profit: -334.16, price: 10566.08 },
      { symbol: 'ETH', name: 'Ethereum', data: [2, 5, 100, 40, 200, 180], balance: 54466.34, value: 18377.64, valueChange: 1.15, profit: 445.22, price: 10566.08 },
      { symbol: 'USD', name: 'US Dollar', data: [5, 6, 4, 6, 6, 7], balance: 4139.8, value: 0.5, valueChange: 1.15 }
    ]
  }

  render() {
    //TODO: put this in componentDidMount (or componentWillMount?)
    document.body.style.backgroundColor = '#eaeef1';

    return (
      <BrowserRouter>
        <div className="App">
          <Header>

          </Header>

          <Switch>
            <Route exact path="/" render={routeProps => <HoldingsListPage {...routeProps} holdings={this.state.holdings} />} />

            <Route path="/transactions/" render={routeProps => <TransactionInfoPage {...routeProps} holdings={this.state.holdings} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
