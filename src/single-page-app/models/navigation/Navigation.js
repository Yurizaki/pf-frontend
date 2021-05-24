import { React, Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Contact from "../../pages/contact/contact";
import Bio from "../../pages/bio/bio";
import Projects from "../../pages/projects/Projects";

import "./Navigation.css";

class Navigation extends Component {
	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			this.setState({
				projectData: this.props.projectData,
				projectTags: this.props.projectTags,
				headerData: this.props.headerData,
				bioData: this.props.bioData,
			});
		}
	}

	render() {
		let projectData = "";
		let projectTags = "";
		let headerData = "";
		let bioData = "";
		if (this.state) {
			projectData = this.state.projectData;
			projectTags = this.state.projectTags;
			headerData = this.state.headerData;
			bioData = this.state.bioData;
		}

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
								<Projects
									projectData={projectData}
									projectTags={projectTags}
									headerData={headerData}
								/>
							)}
						/>

						<Route
							exact
							path="/"
							render={() => (
								<Bio
									headerData={headerData}
									bioData={bioData}
								/>
							)}
						/>

						<Route exact path="/contact" component={Contact} />
					</div>
				</div>
			</section>
		);
	}
}

export default Navigation;
