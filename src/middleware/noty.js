import Noty from 'noty';
import './style.scss';
import { ADD_TASK, ADD_OBJECT_TO_INVENTORY, ADD_TIP_TO_TASK, CHANGE_STATUS_TASK, REMOVE_OBJECT_TO_INVENTORY } from '../constants/actions';
import { DONE, FAILED } from '../constants/status-task';

const createNoty = (text) => {
  new Noty({
    text,
    layout: 'topCenter',
    timeout: 5000
  }).show();
};

const notyMiddleware = store => next => action => {
  const { type, payload } = action;
  
  if(type === ADD_TASK){
    createNoty(`Задание добавлено`);
  }
  else if(type === CHANGE_STATUS_TASK){
    if(payload.status === DONE) {
      createNoty(`Задание выполнено`);
    }
  }
  else if(type === ADD_OBJECT_TO_INVENTORY){
    createNoty(`Предмет добавлен в инвентарь`);
  }
  else if(type === REMOVE_OBJECT_TO_INVENTORY){
    createNoty(`Предмет убран из инвентаря`);
  }
  else if(type === ADD_TIP_TO_TASK){
    createNoty(`Задание дополнено`);
  }
  
  return next(action);
};

export default notyMiddleware;