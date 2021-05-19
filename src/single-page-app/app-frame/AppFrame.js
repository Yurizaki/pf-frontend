import React, { Component } from "react";

import Navigation from '../navigation/Navigation'

import "./AppFrame.css";

class AppFrame extends Component {
	render() {
		return (
			<section>
				<div className='columns make-footer-sticky'>
					<div className='column'>
						<Navigation />
					</div>
				</div>

				<footer className="footer page-footer">
					<div className="content has-text-centered">
						<p>
							Created by <a href='/contact'>Alex Holmes</a>.
							Made using <a href='https://reactjs.org/'>React</a>.
							Stylized with <a href='https://bulma.io/'>Bulma</a>.
							Hosted on <a href='https://heroku.com'>Heroku</a>.
						</p>
					</div>
				</footer>
			</section>
		);
	}
}

export default AppFrame;