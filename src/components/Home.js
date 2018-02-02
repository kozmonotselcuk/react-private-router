import React, { Component, Fragment } from 'react';
import Header from './Header';
import Contents from './Contents';
class Home extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Contents />
			</Fragment>
		);
	}
}

export default Home;
