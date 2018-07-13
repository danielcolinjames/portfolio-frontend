import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import HoldingsListPage from './HoldingsListPage/HoldingsListPage';
import TransactionInfoPage from './TransactionInfoPage/TransactionInfoPage';

class App extends Component {
  state = {
    holdings: [
      { symbol: 'BTC', name: 'Bitcoin', data: [5, 10, 5, 20, 8, 15], balance: 5.076634, value: 62114.27, valueChange: -1.15, profit: -334.16, price: 10566.08 },
      { symbol: 'ETH', name: 'Ethereum', data: [2, 5, 100, 40, 200, 180], balance: 54466.34, value: 18377.64, valueChange: 1.15, profit: 445.22, price: 10566.08 },
      { symbol: 'USD', name: 'US Dollar', data: [5, 6, 4, 6, 6, 7], balance: 4139.8, value: 0.5, valueChange: 1.15 }
    ],
    trades: [
      {
          "uuid": "6e3ded9c-c875-4b98-9214-887ab9c82a3c",
          "url": "https://poopfolio-backend.herokuapp.com/api/trades/6e3ded9c-c875-4b98-9214-887ab9c82a3c/",
          "exchange_account": {
              "url": "https://poopfolio-backend.herokuapp.com/api/exchange_accounts/c5de92be-dd13-47d7-ad8e-ce10caed6b26/",
              "uuid": "c5de92be-dd13-47d7-ad8e-ce10caed6b26",
              "user": "daniel",
              "exchange": "binance"
          },
          "symbol": "XRP/ETH",
          "sync_datetime": "2018-06-27T16:58:42.015386-07:00",
          "order_id": "10710879",
          "order_date": "2018-01-18T12:53:18-08:00",
          "close_date": "2018-01-18T12:53:33-08:00",
          "amount": "10.0000000000",
          "order_price": "0.0015934400",
          "cost": "0.0159344000",
          "side": "sell",
          "avg_price": 0.00159344,
          "order_info": {
              "id": "10710879",
              "fee": null,
              "cost": 0.0159344,
              "info": {
                  "side": "SELL",
                  "time": 1516308798973,
                  "type": "LIMIT",
                  "price": "0.00159344",
                  "status": "FILLED",
                  "symbol": "XRPETH",
                  "orderId": 10710879,
                  "origQty": "10.00000000",
                  "isWorking": true,
                  "stopPrice": "0.00000000",
                  "icebergQty": "0.00000000",
                  "executedQty": "10.00000000",
                  "timeInForce": "GTC",
                  "clientOrderId": "lEVCTWOr88hizO9nSR3zc5"
              },
              "side": "sell",
              "type": "limit",
              "price": 0.00159344,
              "amount": 10.0,
              "filled": 10.0,
              "status": "closed",
              "symbol": "XRP/ETH",
              "datetime": "2018-01-18T20:53:19.973Z",
              "remaining": 0.0,
              "timestamp": 1516308798973,
              "lastTradeTimestamp": null
          },
          "trades_info": [
              {
                  "id": "4282072",
                  "fee": {
                      "cost": 0.00056593,
                      "currency": "BNB"
                  },
                  "cost": 0.0159344,
                  "info": {
                      "id": 4282072,
                      "qty": "10.00000000",
                      "time": 1516308813025,
                      "price": "0.00159344",
                      "isBuyer": false,
                      "isMaker": true,
                      "orderId": 10710879,
                      "commission": "0.00056593",
                      "isBestMatch": true,
                      "commissionAsset": "BNB"
                  },
                  "side": "sell",
                  "type": null,
                  "order": "10710879",
                  "price": 0.00159344,
                  "amount": 10.0,
                  "symbol": "XRP/ETH",
                  "datetime": "2018-01-18T20:53:33.250Z",
                  "timestamp": 1516308813025,
                  "takerOrMaker": "maker"
              }
          ]
      },
      {
          "uuid": "c4c8d650-71b9-47b4-a8e7-73c1b5c85f94",
          "url": "https://poopfolio-backend.herokuapp.com/api/trades/c4c8d650-71b9-47b4-a8e7-73c1b5c85f94/",
          "exchange_account": {
              "url": "https://poopfolio-backend.herokuapp.com/api/exchange_accounts/c5de92be-dd13-47d7-ad8e-ce10caed6b26/",
              "uuid": "c5de92be-dd13-47d7-ad8e-ce10caed6b26",
              "user": "daniel",
              "exchange": "binance"
          },
          "symbol": "LINK/ETH",
          "sync_datetime": "2018-06-27T16:57:44.065643-07:00",
          "order_id": "6906146",
          "order_date": "2018-01-13T01:45:00-08:00",
          "close_date": "2018-01-13T01:45:00-08:00",
          "amount": "26.0000000000",
          "order_price": "0.0000000000",
          "cost": "0.0246987000",
          "side": "buy",
          "avg_price": 0.00094995,
          "order_info": {
              "id": "6906146",
              "fee": null,
              "cost": 0.0,
              "info": {
                  "side": "BUY",
                  "time": 1515836700105,
                  "type": "MARKET",
                  "price": "0.00000000",
                  "status": "FILLED",
                  "symbol": "LINKETH",
                  "orderId": 6906146,
                  "origQty": "26.00000000",
                  "isWorking": true,
                  "stopPrice": "0.00000000",
                  "icebergQty": "0.00000000",
                  "executedQty": "26.00000000",
                  "timeInForce": "GTC",
                  "clientOrderId": "YiYnveoCUuNouLzXaEUz1b"
              },
              "side": "buy",
              "type": "market",
              "price": 0.0,
              "amount": 26.0,
              "filled": 26.0,
              "status": "closed",
              "symbol": "LINK/ETH",
              "datetime": "2018-01-13T09:45:00.105Z",
              "remaining": 0.0,
              "timestamp": 1515836700105,
              "lastTradeTimestamp": null
          },
          "trades_info": [
              {
                  "id": "590404",
                  "fee": {
                      "cost": 0.00075673,
                      "currency": "BNB"
                  },
                  "cost": 0.0246987,
                  "info": {
                      "id": 590404,
                      "qty": "26.00000000",
                      "time": 1515836700105,
                      "price": "0.00094995",
                      "isBuyer": true,
                      "isMaker": false,
                      "orderId": 6906146,
                      "commission": "0.00075673",
                      "isBestMatch": true,
                      "commissionAsset": "BNB"
                  },
                  "side": "buy",
                  "type": null,
                  "order": "6906146",
                  "price": 0.00094995,
                  "amount": 26.0,
                  "symbol": "LINK/ETH",
                  "datetime": "2018-01-13T09:45:00.105Z",
                  "timestamp": 1515836700105,
                  "takerOrMaker": "taker"
              }
          ]
      }
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

            <Route path="/transactions/" render={routeProps => <TransactionInfoPage {...routeProps} holdings={this.state.holdings} trades={this.state.trades} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
