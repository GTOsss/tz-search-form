import React from 'react';
import PropTypes from 'prop-types';
import style from '@styles/components/inputs/button.scss';
import cx from 'classnames';

const Button = ({ children, theme, type, className, ...props }) => (
  <button
    className={cx(style[`button--${theme}`], className)}
    type={type}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  theme: PropTypes.oneOf(['default']),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  type: 'button',
  theme: 'default',
  className: '',
};

export { Button };
