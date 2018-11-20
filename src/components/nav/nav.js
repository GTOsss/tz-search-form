import React from 'react';
import PropTypes from 'prop-types';
import style from '@styles/components/nav/nav.scss';

const Nav = ({ children }) => (
  <nav className={style.navBar}>
    {children}
  </nav>
);

Nav.propTypes = {
  children: PropTypes.node,
};

Nav.defaultProps = {
  children: '',
};

export { Nav };
