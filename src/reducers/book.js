import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import tasks from '../data/tasks';
import { ADD_TASK, ADD_TIP_TO_TASK, DISPLAY_TASK, CHANGE_STATUS_TASK } from '../constants/actions';

const initialState = fromJS({
	tasks: List(),
  displayTask: null
});

const book = handleActions({
	[ADD_TASK]: (state, { payload: taskName }) => {
		let task = tasks[taskName];
		if (!task) throw new Error('Task not found!');
		return state.merge({
			tasks: state.get('tasks').push(task)
		});
	},
	[ADD_TIP_TO_TASK]: (state, { payload: task }) => {
		let displayTask = state.get('displayTask');
		return state.merge({
			tasks: state.get('tasks').map((_task) => {
				if(_task.name === task.name) {
					let nextTask = {
            ..._task,
            tips: [..._task.tips, task.tip]
          };
					if(nextTask.name === displayTask.name) {
            displayTask = nextTask;
					}
          return nextTask;
				}
				return _task;
			}),
      displayTask
		});
	},
  [CHANGE_STATUS_TASK]: (state, { payload: task }) => {
    return state.merge({
      tasks: state.get('tasks').map((_task) => {
        if(_task.name === task.name) {
          return {
            ..._task,
            status: task.status
          };
        }
        return _task;
      })
    });
  },
  [DISPLAY_TASK]: (state, { payload: task }) => state.merge({
    displayTask: task
  })
}, initialState);


export default book;
