import toggleLoading from '@store/actions/loading';
import { apiGetApartments } from '@services/api';
import {
  LOAD_SEARCH_RESULTS,
  GET_SEARCH_RESULTS,
} from './constants';

export const setSearchResults = (items) => ({
  type: GET_SEARCH_RESULTS, payload: items,
});

export const getApartments = (params) => async (dispatch) => {
  try {
    dispatch(toggleLoading(LOAD_SEARCH_RESULTS, true));
    const results = await apiGetApartments(params);
    dispatch(setSearchResults(results));
  } finally {
    dispatch(toggleLoading(LOAD_SEARCH_RESULTS, false));
  }
};
