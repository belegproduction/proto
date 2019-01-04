import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import notyMiddleware from './middleware/noty';
import dialogMiddleware from './middleware/dialog';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(notyMiddleware, dialogMiddleware),
  );
}