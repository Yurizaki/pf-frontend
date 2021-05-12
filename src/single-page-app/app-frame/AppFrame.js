import React, { Component } from "react";

import Navigation from '../navigation/Navigation'

import "./AppFrame.css";

class AppFrame extends Component {
	render() {
		return (
			<section>
				<div className='columns'>
					<div className='column'>
						<p className='center'></p>
					</div>
				</div>
				<div className='columns'>
					<div className='column'>
						<Navigation />
					</div>
				</div>
			</section>
		);
	}
}

export default AppFrame;