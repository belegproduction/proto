import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import Location from '../../components/location';
import Conversation from '../../components/conversation';
import { changeLocation, addObjectToInventory } from '../../actions/general';
import { startDialog, nextDialog, closeDialog, saveCharacterToHistory } from '../../actions/conversation';
import { addTask, addTipToTask, changeStatusTask } from '../../actions/tasks';

import { getLocationActive, getInventory } from '../../selectors/general';
import { getCharacter, getDialog } from '../../selectors/conversation';
import { getTasks } from '../../selectors/book';
import style from './style';


class Game extends Component {
  
  handlerDialog = (answer) => {
    const { handlerNextDialog, handlerAddTask, handlerSaveCharacterToHistory, handlerCloseDialog, handlerAddInventory } = this.props;
    const { character, task, message, history, close, inventory } = answer;
    
    if(character) {
      handlerNextDialog(character);
    }
  
    if(task) {
      if(task.action === 'add'){
        handlerAddTask(task.name);
      }
    }
    
    if(inventory) {
      if(inventory.action === 'add'){
        handlerAddInventory(inventory.object);
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
    const { inventory, tasks, actions } = this.props;
    if(!conditions) return true;
    
    if(Array.isArray(conditions.inventory) &&
      conditions.inventory.length &&
      !conditions.inventory.every((object) => (inventory.find(_object => _object.name === object)))
    ) {
      return false;
    }
  
    if(Array.isArray(conditions.tasks) &&
      conditions.tasks.length &&
      !conditions.tasks.every((object) => (tasks.find(_object => _object.name === object.name && _object.status === object.status)))
    ) {
      return false;
    }
    
    return true;
  };
	
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
  tasks: getTasks
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
  },
  handlerAddInventory(object){
    dispatch(addObjectToInventory(object));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
