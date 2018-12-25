import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import location from '../data/locations';
import { ADD_OBJECT_TO_INVENTORY, REMOVE_OBJECT_TO_INVENTORY, CHANGE_LOCATION, OPEN_CHEST, CLOSE_CHEST, SET_MESSAGE } from '../constants/actions';

const initialState = fromJS({
	locations: location,
	locationActive: location.firstLocation,
	inventory: List(),
	actions: List(),
	isOpenChest: false,
	displayTask: null,
	message: ''
});

const general = handleActions({
	[CHANGE_LOCATION]: (state, { payload: locationName }) => {
		let locations = state.get('locations');
		if (!locations.has(locationName)) throw new Error('Location not found!');
		return state.merge({
			locationActive: locations.get(locationName)
		});
	},
	[ADD_OBJECT_TO_INVENTORY]: (state, { payload: object }) => state.merge({
		inventory: state.get('inventory').push(object)
	}),
  [REMOVE_OBJECT_TO_INVENTORY]: (state, { payload: object }) => state.merge({
    inventory: state.get('inventory').filter((_object) => (_object.name !== object.name))
  }),
  [OPEN_CHEST]: (state) => state.merge({
    isOpenChest: true
  }),
  [CLOSE_CHEST]: (state) => state.merge({
    isOpenChest: false
  }),
	[SET_MESSAGE]: (state, { payload: message }) => state.merge({
    message
  })
}, initialState);


export default general;
