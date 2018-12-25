import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import characters from '../data/characters';
import { CLOSE_DIALOG, NEXT_DIALOG, SAVE_CHARACTER_TO_HISTORY, START_DIALOG } from '../constants/actions';

const initialState = fromJS({
	dialog: null,
	character: null,
	history: List()
});

const conversation = handleActions({
	[START_DIALOG]: (state, { payload: characterName }) => {
		let dialog;
		let character = characters[characterName];
		let characterFromHistory = state.get('history').find((character) => (character.name === characterName));
		if (!character) throw new Error('Character not found!');
    
		if (characterFromHistory) {
			dialog = character.dialogs[characterFromHistory.startDialog];
		}
		else {
			dialog = character.dialogs[character.startDialog];
		}
    
		return state.merge({
			character,
			dialog
		});
	},
	[NEXT_DIALOG]: (state, { payload: conversation }) => state.merge({
		dialog: conversation
	}),
	[CLOSE_DIALOG]: (state) => state.merge({
		dialog: null,
		character: null
	}),
	[SAVE_CHARACTER_TO_HISTORY]: (state, { payload: character }) => {
		let history = state.get('history');
		if (history.find((_character) => (_character.name === character.name))) {
			history = history.map((_character) => {
				if (_character.name === character.name) {
					return character;
				}
				return {
					..._character,
					...character
				};
			});
		}
		else {
			history = history.push(character);
		}
		return state.merge({
			history
		});
	}
  
}, initialState);


export default conversation;
