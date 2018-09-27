import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';

/**
 * The Layout Component will contain the entire application for now
 * If additional layouts need to be added in the future this will help separate components
 */

//@TODO import Header Component and add above main element

class Layout extends Component {
	state = {
		user: {
			userAuthenticated: false,
			status: null,
		},
	};

	render() {
		return (
			<Aux>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout;