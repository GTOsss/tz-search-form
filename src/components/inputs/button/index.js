import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, ...props }) => (
  <button type={type} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  type: 'button',
};

export { Button };
