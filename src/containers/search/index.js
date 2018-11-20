import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '@blocks/search-form';

import style from '@styles/containers/base.scss';

class Search extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className={style.bodyRouteDefault}>
        <SearchForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

Search.propTypes = {

};

Search.defaultProps = {

};

export default Search;
