import {
  GET_SEARCH_RESULTS,
} from './constants';

const initialState = {
  searchResults: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_RESULTS:
      return { ...state, searchResults: payload };
    default:
      return state;
  }
};
