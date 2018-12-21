import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import location from '../data/locations';
import { CHANGE_LOCATION } from '../constants/actions';

const initialState = fromJS({
  locations: location,
  locationActive: location.firstLocation
});

const general = handleActions({
  [CHANGE_LOCATION]: (state, { payload: locationName }) => {
    if(!state.locations[locationName]) throw new Error('Location not found!');
    return state.merge({
      locationActive: state.locations[locationName]
    })
  },
}, initialState);


export default general;
