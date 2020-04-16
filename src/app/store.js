import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

	return createStore(
		rootReducer,
		initialState,
		// give us warnings if we accidently mutate state in the store
		composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
	)
}