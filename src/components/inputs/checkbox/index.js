import React from 'react';
import PropTypes from 'prop-types';

import style from '@styles/components/inputs/checkbox.scss';

const Checkbox = ({ id, children, input }) => (
  <div className={style.checkbox}>
    <input {...input} type="checkbox" id={id} />
    <label htmlFor={id}>
      {children}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  children: '',
};

export { Checkbox };
