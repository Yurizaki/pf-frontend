import { React, Component } from "react";
import { Route, Link, BrowserRouter, NavLink } from "react-router-dom";

import Contact from '../contact/contact';
import Bio from '../bio/bio';

import "./Navigation.css";

class Navigation extends Component {
	render() {
		return (
			<section>
					<div className="columns navigation">
						<div className="column is-one-fifth-tablet">
							<div className='menu'>
								<p class="menu-label">Navigation</p>
							</div>
							<ul className="menu-list ">
								<li>
									<NavLink exact to="/"><p className=''>Home</p></NavLink>
								</li>
								<li>
									<NavLink exact to="/hobbies">Hobbies</NavLink>
								</li>
								<li>
									<NavLink exact to="/blog">Blog</NavLink>
								</li>
								<li>
									<NavLink exact to="/projects">Projects</NavLink>
								</li>
								<li>
									<NavLink exact to="/contact">Contact</NavLink>
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
