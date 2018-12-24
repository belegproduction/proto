import { createAction } from 'redux-actions';
import { CHANGE_LOCATION, ADD_OBJECT_TO_INVENTORY } from '../constants/actions';


export const changeLocation = createAction(CHANGE_LOCATION, (locationName) => (locationName));

export const addObjectToInventory = createAction(ADD_OBJECT_TO_INVENTORY, (object) => (object));

