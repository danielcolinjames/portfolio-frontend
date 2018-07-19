import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getHoldings } from '../actions/holdings';

class HoldingsContainer extends Component {
  componentWillMount () {
    this.props.getHoldings();
  }

  render () {
    return (
      <div className="holdings container">
        <h1>Holdings!</h1>
        <div id='holdingsListContainer'>
          { this.props.holdings.map( (holding) => (
            <div key={holding.coin}>
              Name: {holding.coin}
            </div>  // TODO: HoldingCard
          )) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ holdings }) => ({ holdings });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getHoldings
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HoldingsContainer);
