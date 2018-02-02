import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const store = configureStore(undefined, history);

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Component />
			</ConnectedRouter>
		</Provider>,
		document.getElementById('root')
	)
}

// ReactDOM.render(<App />, document.getElementById('root'));

// hmr aktif edildi
if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App').default();
		render(NextApp);
	});
}
// hmr aktif edildi

render(App);

registerServiceWorker();
