import { React, Component } from "react";
import { Route, Link, BrowserRouter, NavLink } from "react-router-dom";

import Contact from '../../pages/contact/contact';
import Bio from '../../pages/bio/bio';
import Projects from '../../pages/projects/Projects';
// import Quotes from '../quotes/Quotes';

import "./Navigation.css";

class Navigation extends Component {
	componentDidUpdate(prevProps, prevState) {
		console.log(this.props);
		if (this.props !== prevProps) {
			this.setState({
				projectData: this.props.projectData
			});
		}
	}

	render() {
		let projectData = '';
		if(this.state) {
			projectData = this.state.projectData;
		}

		console.log(projectData);

		return (
			<section className="box">
				<div className="columns navigation">
					<div className="column is-one-fifth-tablet">
						<div className="menu">
							<p class="menu-label">Navigation</p>
						</div>
						<ul className="menu-list ">
							<li>
								<NavLink exact to="/">
									<p className="">Home</p>
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/blog">
									Blog
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/projects">
									Projects
								</NavLink>
							</li>
							{/* <li>
									<NavLink exact to="/quotes">Quotes</NavLink>
								</li> */}
							<li>
								<NavLink exact to="/contact">
									Contact
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="column">
						<Route
							exact
							path="/projects"
							render={() => (
								<Projects projectData={projectData} />
							)}
						/>

						<Route exact path="/" component={Bio} />
						<Route exact path="/contact" component={Contact} />
						{/* <Route exact path="/projects" component={Projects} /> */}
						{/* <Route exact path='/quotes' component={Quotes} /> */}
					</div>
				</div>
			</section>
		);
	}
}

export default Navigation;
