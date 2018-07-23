import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTotalHoldings } from '../actions/totals';

import FullHeader from '../components/Header/FullHeader'
import '../components/Header/Header.css'


class HeaderContainer extends Component {
  componentWillMount () {
    this.props.getTotalHoldings();
  }

  render() {
    return (
      <header>
        <FullHeader totals={this.props.totals} />
      </header>
    );
  }
}

const mapStateToProps = ({ totals }) => ({ totals });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTotalHoldings,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
