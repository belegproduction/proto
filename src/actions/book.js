import createAction from 'redux-actions/es/createAction';
import { ADD_TASK, CHANGE_STATUS_TASK, ADD_TIP_TO_TASK, DISPLAY_TASK } from '../constants/actions';

export const addTask = createAction(ADD_TASK, (taskName) => (taskName));

export const changeStatusTask = createAction(CHANGE_STATUS_TASK, (task) => (task));

export const addTipToTask = createAction(ADD_TIP_TO_TASK, (task) => (task));

export const displayTaskAction = createAction(DISPLAY_TASK, (task) => (task));
