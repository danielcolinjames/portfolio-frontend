import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HoldingCard from '../components/Holdings/HoldingCard';

import rightArrow from '../assets/images/ui-icons/icon-right-arrow.svg';

import './HoldingsContainer.css';

class HoldingsContainer extends Component {

  render() {
    return (
      // <div className="holdings container">
      //   <div>
      //     {this.props.holdings.map((holding) => (
      //       <HoldingCard key={holding.coin} holding={holding} />
      //     ))}
      //   </div>
      // </div>

      <div id='holdingsListPage'>
        <div id='holdingsNavigationContainer'>
          <div id='holdingsNavigationLeftGroup'>
            {/* "Holdings" label, "Grid" dropdown, timeframe slider */}
          </div>

          <div id='holdingsNavigationRightGroup'>
            <div className='allTransactionsButton'>
              <Link className='allTransactionsButtonLink' to="/transactions">
                <p>All Transactions</p>
                <img src={rightArrow} className='allTransactionsRightArrow' />
              </Link>
            </div>
          </div>
        </div>

        <div id='holdingsListContainer'>
          {this.props.holdings.map((holding) => (
            <HoldingCard key={holding.coin} holding={holding} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ holdings }) => ({ holdings });

export default connect(mapStateToProps)(HoldingsContainer);
