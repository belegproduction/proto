import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import tasks from '../data/tasks';
import { ADD_TASK, ADD_TIP_TO_TASK, CHANGE_STATUS_TASK } from '../constants/actions';

const initialState = fromJS({
  tasks: List(),
  displayTasks: null
});

const tasksReducer = handleActions({
  [ADD_TASK]: (state, { payload: taskName }) => {
    let task = tasks[taskName];
    if(!task) throw new Error('Task not found!');
    return state.merge({
      tasks: state.get('tasks').push(task)
    })
  },

}, initialState);


export default tasksReducer;
