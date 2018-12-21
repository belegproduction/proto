import { createAction } from 'redux-actions';
import { CHANGE_LOCATION } from '../constants/actions';


export const changeLocation = createAction(CHANGE_LOCATION, (locationName) => {
  locationName
});