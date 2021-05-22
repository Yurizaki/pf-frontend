import { React, Component } from "react";

const title = "Personal Projects";
const subtitle =
	"A collection of personal projects I've worked on over the course of my career in tech.";

const all = "All Projects";
const web = "Websites";
const srv = "Server Applications";
const ext = "Extensions";

class Projects extends Component {
	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			this.setState({
				projectData: this.props.projectData,
			});
		}
	}

	render() {
		let projectData = [];
		if (this.state) {
			projectData = this.state.projectData;
		}

		return (
			<section>
				<section class="hero is-link">
					<div class="hero-body">
						<h1 class="title">{title}</h1>
						<h2 class="subtitle">{subtitle}</h2>
					</div>
				</section>

				<div className="box">
					<div class="buttons has-addons is-centered">
						<button class="button is-info">{all}</button>
						<button class="button is-primary">{web}</button>
						<button class="button is-warning">{srv}</button>
						<button class="button is-danger">{ext}</button>
					</div>
					<div class="tile is-ancestor">
						<div class="tile is-vertical is-12">
							<div class="tile">
								<div class="tile is-parent is-vertical">
									{projectData.length > 0 &&
										projectData.map((projectData) => (
											<article class={"tile is-child notification " + projectData.style}>
												<p class="title">
													{projectData.header}
												</p>
												<p class="subtitle">
													{projectData.summary}
												</p>
												<p class="content">
													{/* {content1} */}
												</p>
											</article>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Projects;
