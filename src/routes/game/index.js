import { Component } from 'preact';
import { connect } from 'preact-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';

import Location from '../../components/location';
import Conversation from '../../components/conversation';
import Chest from '../../components/chest';
import Message from '../../components/message';
import BackLocation from '../../components/back-location';

import { addObjectToInventory, removeObjectToInventory, changeLocation, openChest, closeChest, setMessage  } from '../../actions/general';
import { closeDialog, nextDialog, saveCharacterToHistory, startDialog } from '../../actions/conversation';
import { addTask, addTipToTask, displayTaskAction, changeStatusTask } from '../../actions/book';

import { getInventory, getLocationActive, isOpenChestSelector, getMessageSelector } from '../../selectors/general';
import { getCharacter, getDialog } from '../../selectors/conversation';
import { getTasks, displayTaskSelect } from '../../selectors/book';
import style from './style';


class Game extends Component {
  
  handlerDialog = (answer) => {
    const {handlerNextDialog, handlerAddTask, handlerAddTipToTask, handlerSaveCharacterToHistory, handlerCloseDialog, handlerAddInventory, handlerRemoveInventory, handlerChangeStatusTask} = this.props;
    const {character, task, message, history, close, inventory} = answer;
  
    if(character) {
      handlerNextDialog(character);
    }
  
    if(task) {
      if(task.action === 'add') {
        handlerAddTask(task.name);
      } else if(task.action === 'tip') {
        handlerAddTipToTask(task.params);
      } else if(task.action === 'change_status'){
        handlerChangeStatusTask(task.params);
      }
    }
  
    if(inventory) {
      if(inventory.action === 'add') {
        handlerAddInventory(inventory.object);
      } else if(inventory.action === 'remove') {
        handlerRemoveInventory(inventory.object);
      }
    }
  
    if(history && history.characters) {
      history.characters.forEach((character) => {
        handlerSaveCharacterToHistory(character);
      });
    }
  
    if(close) {
      handlerCloseDialog();
    }
  };
  
  handlerCloseDialog = () => {
    const { handlerCloseDialog, handlerSetMessage, dialog } = this.props;
    if(dialog.message){
      handlerSetMessage(dialog.message);
    }
    handlerCloseDialog();
  };
  
  checkConditions = (answer) => {
    const {conditions} = answer;
    const {inventory, tasks, actions} = this.props;
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
    const {
    	locationActive,
			dialog,
			character,
			inventory,
			tasks,
      message,
      isOpenChest,
      displayTask,
      handlerDisplayTask,
			handlerChangeLocation,
			handlerStartDialog,
      handlerOpenChest,
      handlerCloseChest } = this.props;
    
    return (<div id="game" class={style.game}>
  		<Location {...locationActive}
                handlerChangeLocation={handlerChangeLocation}
                handlerClickCharacter={handlerStartDialog}
      />
      {dialog && character && <Conversation dialog={dialog}
                                            character={character}
                                            checkConditions={this.checkConditions}
                                            handlerNextDialog={this.handlerDialog}
                                            handlerCloseDialog={this.handlerCloseDialog}
      />}
      <Chest open={isOpenChest}
						 inventory={inventory}
						 tasks={tasks}
             displayTask={displayTask}
						 handlerOpenChest={handlerOpenChest}
						 handlerCloseChest={handlerCloseChest}
             handlerDisplayTask={handlerDisplayTask}
      />
      
      {locationActive.backLocation && <BackLocation location={locationActive.backLocation} handlerOnClick={handlerChangeLocation} />}
      {message && <Message message={message}/>}
  	</div>);
  }
}

const mapStateToProps = createPropsSelector({
	locationActive: getLocationActive,
  dialog: getDialog,
  character: getCharacter,
  inventory: getInventory,
  tasks: getTasks,
  isOpenChest: isOpenChestSelector,
  displayTask: displayTaskSelect,
  message: getMessageSelector,
});

const mapDispatchToProps = (dispatch) => ({
  handlerChangeLocation(locationName) {
    dispatch(changeLocation(locationName));
  },
  handlerStartDialog(characterName) {
    dispatch(startDialog(characterName));
  },
  handlerNextDialog(conversation) {
    dispatch(nextDialog(conversation));
  },
  handlerCloseDialog() {
    dispatch(closeDialog());
  },
  handlerAddTask(taskName) {
    dispatch(addTask(taskName));
  },
  handlerSaveCharacterToHistory(character) {
    dispatch(saveCharacterToHistory(character));
  },
  handlerAddInventory(object) {
    dispatch(addObjectToInventory(object));
  },
  handlerRemoveInventory(object) {
    dispatch(removeObjectToInventory(object));
  },
	handlerOpenChest(){
    dispatch(openChest());
	},
  handlerCloseChest(){
    dispatch(closeChest());
  },
  handlerDisplayTask(task){
    dispatch(displayTaskAction(task));
  },
  handlerAddTipToTask(task) {
    dispatch(addTipToTask(task));
  },
  handlerChangeStatusTask(task) {
    dispatch(changeStatusTask(task));
  },
  handlerSetMessage(message) {
    dispatch(setMessage(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
