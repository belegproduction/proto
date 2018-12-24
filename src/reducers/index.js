import { combineReducers } from 'redux-immutable';
import general from './general';
import conversation from './conversation';
import tasks from './tasks';

const reducers = combineReducers({
  general,
  conversation,
  tasks
});

export default reducers;
