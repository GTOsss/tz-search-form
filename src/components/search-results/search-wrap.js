import React from 'react';
import PropTypes from 'prop-types';
import style from '@styles/components/search-results/search-wrap.scss';

const SearchWrap = ({ children }) => (
  <ul className={style.searchWrap}>
    {children}
  </ul>
);

SearchWrap.propTypes = {
  children: PropTypes.node,
};

SearchWrap.defaultProps = {
  children: '',
};

export { SearchWrap };
