import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import notyMiddleware from './middleware/noty';

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
    composeWithDevTools(
      applyMiddleware(notyMiddleware),
    )
	);
}
