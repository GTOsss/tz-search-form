import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '@blocks/search-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from '@styles/containers/base.scss';
import { SearchWrap, SearchItem } from '@components/search-results';
import * as actionsSearch from './store/actions';
import { LOAD_SEARCH_RESULTS } from './store/constants';


class Search extends Component {
  onSubmit = (values) => {
    const { actions: { getApartments } } = this.props;
    getApartments(values);
  };

  render() {
    const { searchResults, loading } = this.props;
    return (
      <div className={style.bodyRouteDefault}>
        <SearchForm
          onSubmit={this.onSubmit}
          isLoading={loading[LOAD_SEARCH_RESULTS]}
        />
        <SearchWrap>
          {searchResults.map((item) => (
            <SearchItem item={item} key={item.id}/>
          ))}
        </SearchWrap>
      </div>
    );
  }
}

Search.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  actions: PropTypes.objectOf(PropTypes.func),
  loading: PropTypes.objectOf(PropTypes.bool),
};

Search.defaultProps = {
  searchResults: [],
  actions: {},
  loading: {},
};

const mapStateToProps = (state) => ({
  searchResults: state.search.searchResults,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(actionsSearch, dispatch) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
