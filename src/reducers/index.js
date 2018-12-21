import { combineReducers } from 'redux-immutable';
import general from './general';

const reducers = combineReducers({
  general,
});

export default reducers;
