import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FullHeader from '../components/Header/FullHeader'
import '../components/Header/Header.css'


class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <FullHeader totals={this.props.totals} user={this.props.currentUser} />
      </header>
    );
  }
}

const mapStateToProps = ({ totals, users: { currentUser } }) => ({ totals, currentUser });


export default connect(mapStateToProps)(HeaderContainer);
