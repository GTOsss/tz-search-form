import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import projectReducers from './reducers';

const isProduction = process.env.NODE_ENV === 'production';
const middleware = applyMiddleware(thunk);
const enhancer = !isProduction ? composeWithDevTools(middleware) : middleware;
const reducers = {
  ...projectReducers,
  reduxForm: reduxFormReducer,
};

export default () => createStore(combineReducers(reducers), enhancer);
