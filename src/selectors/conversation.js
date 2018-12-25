import { createGetSelector } from 'reselect-immutable-helpers';

export const getConversation = createGetSelector(state => state, 'conversation');

export const getDialog = createGetSelector(getConversation, 'dialog');

export const getCharacter = createGetSelector(getConversation, 'character');