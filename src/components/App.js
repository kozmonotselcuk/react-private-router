import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Home from './Home';


class App extends Component {
	constructor() {
		super();
		this.requireAuth = this.requireAuth.bind(this);
	}

	requireAuth(nextState, replace, callback) {
		console.log('asdsada');
		const token = window.sessionStorage.token;
		if (!token) {
			replace('/');
			callback();
			return;
		}
	}
	render() {
		return (
			<Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<PrivateRoute exact path="/anasayfa" component={Home} />
					</Switch>
				</Router>
			</Fragment>
		);
	}
}

export default App;
