import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import location from '../data/locations';
import { CHANGE_LOCATION } from '../constants/actions';

const initialState = fromJS({
  locations: location,
  locationActive: location.firstLocation,
  inventory: List(),
  actions: List(),
});

const general = handleActions({
  [CHANGE_LOCATION]: (state, { payload: locationName }) => {
    let locations = state.get('locations');
    if(!locations.has(locationName)) throw new Error('Location not found!');
    return state.merge({
      locationActive: locations.get(locationName)
    })
  }
}, initialState);


export default general;
