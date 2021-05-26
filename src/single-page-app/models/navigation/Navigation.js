import { React, Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faLanguage } from "@fortawesome/free-solid-svg-icons";

import Contact from "../../pages/contact/contact";
import Bio from "../../pages/bio/bio";
import Projects from "../../pages/projects/Projects";
import Blog from "../../pages/blog/Blog";

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

				let mode = this.state.darkMode ? 'darkModeComponent' : 'lightModeComponent';
				let modeSecondary = this.state.darkMode ? 'darkModeSecondary' : 'lightModeSecondary';

				let colouredComponents = document.getElementsByClassName(mode);
				let colouredComponentsSecondary = document.getElementsByClassName(modeSecondary);

				console.log(colouredComponents);
				this.parseHtml(colouredComponents);

				if(this.state.darkMode) {
					for(let i = 0; colouredComponents[i];) {
						colouredComponents[i].classList.replace('darkModeComponent', 'lightModeComponent');
					}

					for(let i = 0; colouredComponentsSecondary[i];) {
						colouredComponentsSecondary[i].classList.replace('darkModeSecondary', 'lightModeSecondary');
					}
				}
				else {
					for(let i = 0; colouredComponents[i];) {
						colouredComponents[i].classList.replace('lightModeComponent', 'darkModeComponent');
					}

					for(let i = 0; colouredComponentsSecondary[i];) {
						colouredComponentsSecondary[i].classList.replace('lightModeSecondary', 'darkModeSecondary');
					}
				}

				await this.setState({
					darkMode: !this.state.darkMode
				});
			}
		}
	}

	parseHtml(...cmps) {
		cmps.forEach(cmp => {
			console.log(cmp);
		})
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
			<section className="box darkModeComponent">
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
												disabled
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
												disabled
											>
												<span class="icon-text has-text-warning">
													<FontAwesomeIcon
														icon={faMoon}
													/>
												</span>
											</button>
										)}
										<button
											className="button is-dark mini-buttons"
											disabled
										>
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
						<Route exact path="/blog" component={Blog} />
					</div>
				</div>
			</section>
		);
	}
}

export default Navigation;
