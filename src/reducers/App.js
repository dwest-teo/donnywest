import { handleActions } from 'redux-actions';
import * as AppActions from '../actions/App';

const appState = {
  loaded: false,
};

const AppReducer = handleActions({
  [AppActions.loadedApp]: (state) => ({
    loaded: !state.loaded,
  }),
}, appState);

export default AppReducer;
