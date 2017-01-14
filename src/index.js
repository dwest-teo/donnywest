import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  initializeCurrentLocation,
  provideRouter,
} from 'redux-little-router';

import configureStore from './store';
import routes from './routes';
import App from './containers/App/App';

import './index.css';

const store = configureStore({}, routes);
const AppWithRouter = provideRouter({ store })(App);

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

ReactDOM.render(
  <Provider store={store}>
    <AppWithRouter />
  </Provider>,
  document.getElementById('root')
);
