import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

const configureStore = (preloadedState, history) => {
	const middlewares = [thunk, routerMiddleware(history)];

	if (process.env.NODE_ENV === 'development') {
		middlewares.push(createLogger());
	}
	const composed = [(applyMiddleware(...middlewares))];

	if (process.env.NODE_ENV === 'development') {
		/* eslint-disable */
		if (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
			composed.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
		}
		/* eslint-disable */
	}

	const store = createStore(rootReducer, preloadedState, compose(...composed));

	// hmr aktif edildi
	if (process.env.NODE_ENV === 'development' && module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers').default();
			store.replaceReducer(nextRootReducer);
		});
	}
	// hmr aktif edildi

	return store;

};

export default configureStore;