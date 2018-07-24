import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HoldingCard from '../components/Holdings/HoldingCard';

class HoldingsContainer extends Component {

  render () {
    return (
      <div className="holdings container">
        <h1>Holdings!</h1>
        <div>
          { this.props.holdings.map( (holding) => (
            <HoldingCard key={holding.coin} holding={holding} />
          )) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ holdings }) => ({ holdings });

export default connect(mapStateToProps)(HoldingsContainer);
