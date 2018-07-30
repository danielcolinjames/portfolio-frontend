import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FullHeader from '../components/Header/FullHeader'
import '../components/Header/Header.css'


class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <FullHeader totals={this.props.totals} />
      </header>
    );
  }
}

const mapStateToProps = ({ totals }) => ({ totals });


export default connect(mapStateToProps)(HeaderContainer);
