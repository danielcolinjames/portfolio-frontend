import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Header from './Header';
import Holdings from './Holdings';
import logo from '../logo.svg';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Holdings} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
