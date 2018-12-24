import { createGetSelector } from 'reselect-immutable-helpers';

const getGeneral = createGetSelector(state => state, 'general');

export const getLocationActive = createGetSelector(getGeneral, 'locationActive');

export const getInventory = createGetSelector(getGeneral, 'inventory');