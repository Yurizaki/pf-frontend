import { React, Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

import Contact from '../contact/contact';
import Bio from '../bio/bio';


class Navigation extends Component {
	render() {
		return (
			<section>
					<div className="columns">
						<div className="column is-one-fifth-tablet">
							<ul className="header">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>

						<div className="column">
							<Route exact path='/' component={Bio} />
							<Route exact path='/contact' component={Contact} />
						</div>
					</div>
			</section>
		);
	}
}

export default Navigation;
