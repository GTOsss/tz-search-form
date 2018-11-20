import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';
import reducers from './reducers';

const isProduction = process.env.NODE_ENV === 'production';
const devToolsExtension = (isProduction ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__); //eslint-disable-line

export default () => createStore(
  combineReducers({
    ...reducers, routing: routerReducer,
  }),
  devToolsExtension && devToolsExtension(),
  applyMiddleware(thunk),
);
