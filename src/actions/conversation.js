import createAction from "redux-actions/es/createAction";
import { NEXT_DIALOG, START_DIALOG, CLOSE_DIALOG, SAVE_CHARACTER_TO_HISTORY } from "../constants/actions";

export const startDialog = createAction(START_DIALOG, (characterName) => (characterName));

export const nextDialog = createAction(NEXT_DIALOG, (conversation) => (conversation));

export const closeDialog = createAction(CLOSE_DIALOG, (conversation) => (conversation));

export const saveCharacterToHistory = createAction(SAVE_CHARACTER_TO_HISTORY, (character) => (character));