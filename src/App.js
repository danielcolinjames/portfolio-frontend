import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import HoldingCard from './HoldingCard/HoldingCard';
import HoldingsList from './HoldingsList/HoldingsList';

class App extends Component {
  state = {
    holdings: [
      { symbol: 'BTC', name: 'Bitcoin', balance: 5.076634 },
      { symbol: 'ETH', name: 'Ethereum', balance: 54466.34 },
      { symbol: 'USD', name: 'US Dollar', balance: 4139.8 }
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
                balance={holding.balance}/>
            })}
        </HoldingsList>
      </div>
    );
  }
}

export default App;
