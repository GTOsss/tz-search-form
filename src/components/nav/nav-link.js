import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as NavLinkRouter } from 'react-router-dom';
import style from '@styles/components/nav/nav-link.scss';

const NavLink = ({ children, theme, ...props }) => (
  <NavLinkRouter
    className={style[`navLink--${theme}`]}
    activeClassName={style[`navLink-active--${theme}`]}
    {...props}
  >
    {children}
  </NavLinkRouter>
);

NavLink.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(['default']),
};

NavLink.defaultProps = {
  children: '',
  theme: 'default',
};

export { NavLink };
