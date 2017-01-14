import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { routerForBrowser } from 'redux-little-router';
import AppReducer from './reducers/App';

export default function configureStore(initialState, routes) {
  const {
    routerEnhancer,
    routerMiddleware,
  } = routerForBrowser({ routes });

  const composedMiddleware = [
    applyMiddleware(routerMiddleware),
  ];

  if (process.env.NODE_ENV !== 'production') {
    window.__REDUX_DEVTOOLS_EXTENSION__
      && composedMiddleware.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    combineReducers({
      App: AppReducer,
    }),
    initialState,
    compose(routerEnhancer, ...composedMiddleware),
  );

  return store;
}