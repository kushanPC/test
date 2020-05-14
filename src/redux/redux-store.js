import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import userReduser from './users-reduser';
import positionsReduser from './positions';

const redusers = combineReducers({
  form: formReducer,
  users: userReduser,
  positions: positionsReduser,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
