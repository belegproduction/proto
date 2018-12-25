import { createAction } from 'redux-actions';
import { CHANGE_LOCATION, ADD_OBJECT_TO_INVENTORY, REMOVE_OBJECT_TO_INVENTORY, OPEN_CHEST, CLOSE_CHEST, SET_MESSAGE } from '../constants/actions';

export const changeLocation = createAction(CHANGE_LOCATION, (locationName) => (locationName));

export const addObjectToInventory = createAction(ADD_OBJECT_TO_INVENTORY, (object) => (object));

export const removeObjectToInventory = createAction(REMOVE_OBJECT_TO_INVENTORY, (object) => (object));

export const openChest = createAction(OPEN_CHEST);

export const closeChest = createAction(CLOSE_CHEST);

export const setMessage = createAction(SET_MESSAGE, (message) => (message));

