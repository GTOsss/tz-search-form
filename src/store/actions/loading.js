import { LOADING_TOGGLE } from '../constants/loading';

const toggleLoading = (key, value) => ({ type: LOADING_TOGGLE, payload: { key, value } });

export default toggleLoading;
