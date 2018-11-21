import { createConst } from '@store/constants/constants-manager';

const create = createConst('SEARCH');

// reducer
export const GET_SEARCH_RESULTS = create('GET_SEARCH_RESULTS');


// loading
export const LOAD_SEARCH_RESULTS = create('LOAD_SEARCH_RESULTS');
