import { combineReducers } from 'redux-immutable';
import general from './general';
import conversation from './conversation';
import book from './book';

const reducers = combineReducers({
  general,
  conversation,
  book
});

export default reducers;
