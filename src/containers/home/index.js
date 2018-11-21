import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import style from '@styles/containers/home.scss';
import { Nav, NavLink } from '@components/nav';
import { Switch, Route } from 'react-router-dom';
import Search from '@containers/search';

class Home extends Component {
  renderHomeBody = () => (
    <div>
      <h1 className={style.title}>Home page</h1>
    </div>
  );

  render() {
    return (
      <Fragment>
        <header>
          <Nav>
            <NavLink exact to="/">Главная</NavLink>
            <NavLink exact to="/search">Поиск</NavLink>
          </Nav>
        </header>
        <Switch>
          <Route exact path="/" component={this.renderHomeBody} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Fragment>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
