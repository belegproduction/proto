import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import Location from '../../components/location';
import Conversation from '../../components/conversation';
import { changeLocation } from '../../actions/general';
import { startDialog, nextDialog, closeDialog, saveCharacterToHistory } from '../../actions/conversation';
import { addTask, addTipToTask, changeStatusTask } from '../../actions/tasks';

import { getLocationActive, getInventory } from '../../selectors/general';
import { getCharacter, getDialog } from '../../selectors/conversation';
import style from './style';


class Game extends Component {
  
  handlerDialog = (answer) => {
    const { handlerNextDialog, handlerAddTask, handlerSaveCharacterToHistory, handlerCloseDialog } = this.props;
    const { character, task, message, history, close } = answer;
    
    if(character) {
      handlerNextDialog(character);
    } else {
      if(task) {
        if(task.action === 'add'){
          handlerAddTask(task.name);
        }
      }
    }
    
    if(history && history.characters) {
      history.characters.forEach((character) => {
        handlerSaveCharacterToHistory(character);
      })
    }
    
    if(close){
      handlerCloseDialog();
    }
  };
  
  checkConditions = (answer) => {
    const { conditions } = answer;
    const { inventory } = this.props;
    if(!conditions) return true;
    
    if(Array.isArray(conditions.inventory) &&
      conditions.inventory.length &&
      !conditions.inventory.every((object) => (inventory.find(_object => _object.name === object)))
    ) {
      return false;
    }
    return true;
  }
	
	render() {
		const { locationActive, dialog, character, handlerChangeLocation, handlerStartDialog, handlerCloseDialog } = this.props;
		
    return (<div class={style.game}>
			<Location {...locationActive}
                handlerChangeLocation={handlerChangeLocation}
                handlerClickCharacter={handlerStartDialog}/>
      {dialog && character && <Conversation dialog={dialog}
                                            character={character}
                                            checkConditions={this.checkConditions}
                                            handlerNextDialog={this.handlerDialog}
                                            handlerCloseDialog={handlerCloseDialog}/>}
		</div>)
	}
}

const mapStateToProps = createPropsSelector({
	locationActive: getLocationActive,
  dialog: getDialog,
  character: getCharacter,
  inventory: getInventory,
});

const mapDispatchToProps = (dispatch) => ({
  handlerChangeLocation(locationName) {
    dispatch(changeLocation(locationName));
  },
  handlerStartDialog(characterName) {
    dispatch(startDialog(characterName));
  },
  handlerNextDialog(conversation){
    dispatch(nextDialog(conversation));
  },
  handlerCloseDialog(){
    dispatch(closeDialog());
  },
  handlerAddTask(taskName){
    dispatch(addTask(taskName));
  },
  handlerSaveCharacterToHistory(character){
    dispatch(saveCharacterToHistory(character));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
