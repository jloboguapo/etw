import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearData } from '../actionCreators';
import NavBar from './NavBar';

const Header = props => {
  const { dispatch } = props;
  console.log('yo')
  return (
    <header className="etw-header">
      <h1 className="etw-header-content">
        <Link to="/" onClick={() => dispatch(clearData)}>
          ETW
        </Link>
      </h1>
      <NavBar />
    </header>
  );
};

export default connect()(Header);
