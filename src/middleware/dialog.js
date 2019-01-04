import { CHANGE_LOCATION } from '../constants/actions';
import { startDialog } from '../actions/conversation';
import charactersDefault from '../data/characters';

const dialogMiddleware = store => next => action => {
  const { type, payload } = action;
  if(type === CHANGE_LOCATION) {
    let state = store.getState();
    let characters = state.get('general').get('locations').get(payload).get('characters');
    
    if(characters.size > 0) {
      let conversation = state.get('conversation');
      let history = conversation.has('history') ? conversation.get('history').toArray() : null;
      characters.toArray().forEach((_character) => {
        let character = _character.toObject();
        let startDialogCharacter;
        let characterDefault = charactersDefault[character.name];
        let characterHistory = history && history.find((char) => char.name === character.name);
        if(characterHistory) {
          startDialogCharacter = characterDefault.dialogs[characterHistory.startDialog];
        } else {
          startDialogCharacter = characterDefault.dialogs[characterDefault.startDialog];
        }
        if(startDialogCharacter && startDialogCharacter.isTarget){
          store.dispatch(startDialog(character.name))
        }
      });
    }
  }
  return next(action);
};

export default dialogMiddleware;