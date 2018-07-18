import React, { Component } from 'react';
import FullHeader from '../components/Header/FullHeader'
import '../components/Header/Header.css'


export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <FullHeader />
      </header>
    );
  }
}
