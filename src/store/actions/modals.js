import { MODAL_TOGGLE } from '../constants/modals';

const toggleModal = (key, value) => ({ type: MODAL_TOGGLE, payload: { key, value } });

export default toggleModal;
