import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import HoldingCard from './HoldingCard/HoldingCard';
import HoldingsList from './HoldingsList/HoldingsList';

class App extends Component {
  state = {
    holdings: [
      { symbol: 'BTC', name: 'Bitcoin', balance: 5.076634, value: 62114.27, valueChange: -1.15, profit: -334.16, price: 10566.08 },
      { symbol: 'ETH', name: 'Ethereum', balance: 54466.34, value: 18377.64, valueChange: 1.15, profit: 445.22, price: 10566.08 },
      { symbol: 'USD', name: 'US Dollar', balance: 4139.8, value: 0.5, valueChange: 1.15 }
    ]
  }

  render() {
    //TODO: put this in componentDidMount (or componentWillMount?)
    document.body.style.backgroundColor = '#eaeef1';

    return (
      <div className="App">
        <Header>
          
        </Header>
        <HoldingsList>
          {this.state.holdings.map((holding) => {
              return <HoldingCard
                symbol={holding.symbol}
                name={holding.name}
                balance={holding.balance}
                value={holding.value}
                valueChange={holding.valueChange}
                profit={holding.profit}
                price={holding.price}/>
            })}
        </HoldingsList>
      </div>
    );
  }
}

export default App;
