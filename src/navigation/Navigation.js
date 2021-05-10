import { React, Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

class Navigation extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<ul className="header">
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
					<div className="content">
						{/* <Route exact path='/contact' component={Contact} /> */}
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default Navigation;
