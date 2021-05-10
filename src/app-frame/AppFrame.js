import React, { Component } from "react";

import Navigation from '../navigation/Navigation'

import "./AppFrame.css";

class AppFrame extends Component {
	render() {
		return (
			<div>
				<h1>Simple SPA</h1>

				<Navigation />
			</div>
		);
	}
}

export default AppFrame;