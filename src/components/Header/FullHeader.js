import React from 'react';

import './FullHeader.css';

import logo from '../../assets/images/logos/temp_logo.png';

import PercentageChangeIndicator from '../Global/PercentageChangeIndicator';

export default ({ totals }) => {

  return (
    // <div className="header full">
    <div>
      {/* <dl>
      <dt>Total Balance in BTC</dt>
      <dd>{totals.balance_in_btc}</dd>

      <dt>Total Balance in USD</dt>
      <dd>{totals.balance_in_usd}</dd>
    </dl> */}

      <div id="menu_bar">
        <img id="logo" src={logo} alt="" />
        <div id="user_portal" className="blue">Sign in</div>
      </div>

      <div id="glance_banner">
        <div id="glance_flex_container">
          <div className="total_amt">
            <div>
              <h5>Total</h5>
              <div className="money_b">
                <span className="metric_small">$</span>{totals.balance_in_usd}
                {/* <span className="money_s">.01</span> */}

                {/* I think we need to use lifecycle management to place "..." or something in place of the total until it's loaded. */}
                {/* It won't let me do .toFixed() on it; it comes back undefined when you try to run toFixed right away */}
                {/* <span className='dollars'>${totals.balance_in_usd.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}</span>
                <span className='cents'>.{Math.abs(Math.round(totals.balance_in_usd * 100) % 100)}</span> */}
              </div>
            </div>
          </div>

          <div className="delta_area">
            <div className="delta_cell">
              <h5>Today</h5>
              <div className="money_b_s">
                <span className="plus_large">+</span>$337
            <span className="money_s">.5</span>
              </div>
              <PercentageChangeIndicator valueChange={(Math.random() * 100).toFixed(2)} />

            </div>
            <div className="delta_cell">
              <h5>7 Days</h5>
              <div className="money_b_s">
                <span className="minus_large">-</span>$15
            <span className="money_s">.4</span>
              </div>
              <PercentageChangeIndicator valueChange={(Math.random() * 100).toFixed(2)} />

            </div>
            <div className="delta_cell last_cell">
              <h5>Profit</h5>
              <div className="money_b_s">
                <span className="plus_large">+</span>$337
            <span className="money_s">.5</span>
              </div>
              <PercentageChangeIndicator valueChange={(Math.random() * 100).toFixed(2)} />

            </div>
          </div>

          <div className="control_area">
            <div id="button_portfolio_graph" className="square_button">
              <div className="icon_chart"></div>
            </div>
            <div id="button_glance_add" className="square_button_main">Add...</div>
          </div>
        </div>
      </div>
    </div>
  )
}