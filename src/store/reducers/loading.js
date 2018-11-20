import omit from 'lodash.omit';
import { LOADING_TOGGLE } from '../constants/loading';

const initialState = { };

export default function loading(state = initialState, { type, payload }) {
  switch (type) {
    case LOADING_TOGGLE: {
      const { value, key } = payload;
      if (value) {
        return { ...state, [key]: value };
      }
      return omit(state, key);
    }
    default:
      return state;
  }
}