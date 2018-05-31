import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import HoldingCard from './HoldingCard/HoldingCard';
import HoldingsList from './HoldingsList/HoldingsList';

class App extends Component {
  render() {
    //TODO: put this in componentDidMount (or componentWillMount?)
    document.body.style.backgroundColor = '#eaeef1';

    return (
      <div className="App">
        <Header>
          
        </Header>
        <HoldingsList>
          <HoldingCard>testing</HoldingCard>
          <HoldingCard></HoldingCard>
          <HoldingCard></HoldingCard>
          <HoldingCard></HoldingCard>
        </HoldingsList>
      </div>
    );
  }
}

export default App;
