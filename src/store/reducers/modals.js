import omit from 'lodash.omit';
import { MODAL_TOGGLE } from '../constants/modals';

const initialState = { };

export default function modals(state = initialState, { type, payload }) {
  switch (type) {
    case MODAL_TOGGLE: {
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