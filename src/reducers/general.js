import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import location from '../data/locations';
import { CHANGE_LOCATION, ADD_OBJECT_TO_INVENTORY } from '../constants/actions';

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
  },
  [ADD_OBJECT_TO_INVENTORY]: (state, { payload: object }) => {
    return state.merge({
      inventory: state.get('inventory').push(object)
    })
  }
}, initialState);


export default general;
