import { React, Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faLanguage } from "@fortawesome/free-solid-svg-icons";

import Contact from "../../pages/contact/contact";
import Bio from "../../pages/bio/bio";
import Projects from "../../pages/projects/Projects";

import "./Navigation.css";

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.changeStyle = this.changeStyle.bind(this);
	}

	componentDidMount() {
		this.setState({
			darkMode: true
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			console.log(this.state)
			this.setState({
				projectData: this.props.projectData,
				projectTags: this.props.projectTags,
				headerData: this.props.headerData,
				bioData: this.props.bioData,
			});
		}
	}

	async changeStyle() {
		if(this) {
			if (this.state) {
				console.log(this.state.darkMode);

				let html = document.getElementsByTagName("html")[0];
				if (html.classList[0] === 'darkMode_html') {
					html.classList = 'lightMode_html';
					await this.setState({
						darkMode: false
					});
				}
				else {
					html.classList = 'darkMode_html';
					await this.setState({
						darkMode: true
					});
				}
				console.log(this.state.darkMode);
				console.log(html.classList);
			}
		}
	}

	render() {
		let projectData = "";
		let projectTags = "";
		let headerData = "";
		let bioData = "";
		let darkMode = true;
		if (this.state) {
			projectData = this.state.projectData;
			projectTags = this.state.projectTags;
			headerData = this.state.headerData;
			bioData = this.state.bioData;
			darkMode = this.state.darkMode;
		}

		return (
			<section className="box">
				<div className="columns navigation">
					<div className="column is-one-fifth-tablet">
						<div className="columns">
							<div className="column">
								<div className="columns">
									<div className="column">
										{darkMode && (
											<button
												className="button is-dark mini-buttons"
												onClick={this.changeStyle}
											>
												<span class="icon-text has-text-warning">
													<FontAwesomeIcon
														icon={faSun}
													/>
												</span>
											</button>
										)}
										{!darkMode && (
											<button
												className="button is-dark mini-buttons"
												onClick={this.changeStyle}
											>
												<span class="icon-text has-text-warning">
													<FontAwesomeIcon
														icon={faMoon}
													/>
												</span>
											</button>
										)}
										<button className="button is-dark mini-buttons">
											<span class="icon-text has-text-warning">
												<FontAwesomeIcon
													icon={faLanguage}
												/>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="columns">
							<div className="column">
								<div className="menu">
									<p class="menu-label darkMode_text">Navigation</p>
								</div>
								<ul className="menu-list">
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
						</div>
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
