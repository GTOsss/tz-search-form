import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '@containers/home';
import Search from '@containers/search';
import mainStyle from '@styles/main.scss';
import createStore from './store/create-store';


const history = createBrowserHistory();

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Home />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
