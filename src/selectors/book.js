import { createGetSelector } from 'reselect-immutable-helpers';

const getBook = createGetSelector(state => state, 'book');

export const getTasks = createGetSelector(getBook, 'tasks');