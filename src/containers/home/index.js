import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import style from '@styles/containers/home.scss';
import { Nav, NavLink } from '@components/nav';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Nav>
            <NavLink exact to="/">Главная</NavLink>
            <NavLink exact to="/search">Поиск</NavLink>
          </Nav>
        </header>
      </Fragment>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
