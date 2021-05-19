import { React, Component } from "react";

const title = 'Personal Projects';
const subtitle = "A collection of personal projects I've worked on over the course of my career in tech.";

const all = 'All Projects';
const web = 'Websites';
const srv = 'Server Applications';
const ext = 'Extensions';

const title1 = 'Personal Profile Website';
const subtitle1 = 'A simple single page application built on React, stylized with Bulma and hosted on Heroku';
const content1 = '';

class Projects extends Component {
	render() {
		return (
			<section>
				<section class="hero is-link">
                    <div class="hero-body">
                        <h1 class="title">{title}</h1>
                        <h2 class="subtitle">{subtitle}</h2>
                    </div>
                </section>

				<div class="buttons has-addons is-centered">
					<button class="button is-info">{all}</button>
					<button class="button is-primary">{web}</button>
					<button class="button is-warning">{srv}</button>
					<button class="button is-danger">{ext}</button>
				</div>

				<div>
					<div class="tile is-ancestor">
						<div class="tile is-vertical is-12">
							<div class="tile">
								<div class="tile is-parent is-vertical">
									<article class="tile is-child notification is-primary">
										<p class="title">{title1}</p>
										<p class="subtitle">{subtitle1}</p>
										<p class="content">{content1}</p>
									</article>
									<article class="tile is-child notification is-warning">
										<p class="title">...tiles</p>
										<p class="subtitle">Bottom tile</p>
										<div class="content">
										ContentContentContentContentContentContentContentContentContentContentContent
										</div>
									</article>
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
