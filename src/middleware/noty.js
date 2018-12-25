import Noty from 'noty';
import './style.scss';
import { ADD_TASK, ADD_OBJECT_TO_INVENTORY, ADD_TIP_TO_TASK, CHANGE_STATUS_TASK, REMOVE_OBJECT_TO_INVENTORY } from '../constants/actions';
import { DONE, FAILED } from '../constants/status-task';

let gameElement = '.game';
if (typeof window !== "undefined") {
  gameElement = document.getElementById('game');
}

const createNoty = (text, gameElement) => {
  new Noty({
    text,
    container: gameElement,
    layout: 'topCenter',
    timeout: 3000
  }).show();
}

const notyMiddleware = store => next => action => {
  const { type, payload } = action;
  
  if(type === ADD_TASK){
    createNoty(`Задание добавлено`, gameElement);
  }
  else if(type === CHANGE_STATUS_TASK){
    if(payload.status === DONE) {
      createNoty(`Задание выполнено`, gameElement);
    }
  }
  else if(type === ADD_OBJECT_TO_INVENTORY){
    createNoty(`Предмет добавлен в инвентарь`, gameElement);
  }
  else if(type === REMOVE_OBJECT_TO_INVENTORY){
    createNoty(`Предмет убран из инвентаря`, gameElement);
  }
  else if(type === ADD_TIP_TO_TASK){
    createNoty(`Задание дополнено`, gameElement);
  }
  
  return next(action);
};

export default notyMiddleware;