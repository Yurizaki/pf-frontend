import { React, Component } from "react";

const title = 'Quotes';
const subtitle = "A collection of favourite quotes.";

const quote1 = 'I am become Death, Destroyer of Worlds';
const author1 = 'Oppenheimer';
const movie1 = 'Ex Machina'

const quote2 = 'The good deeds a man has done before defend him';
const author2 = 'Oppenheimer';
const movie2 = 'Ex Machina'

class Quotes extends Component {
	render() {
		return (
			<section>
				<section class="hero is-link">
                    <div class="hero-body">
                        <h1 class="title darkMode_text">{title}</h1>
                        <h2 class="subtitle darkMode_text">{subtitle}</h2>
                    </div>
                </section>

				<div className='box'>
					<div class="tile is-ancestor">
						<div class="tile is-vertical is-12">
							<div class="tile">
								<div class="tile is-parent is-vertical">
									<article class="tile is-child notification is-primary">
										<p class="title darkMode_text">{quote1}</p>
										<p class="subtitle darkMode_text">{author1} - {movie1}</p>
									</article>
									<article class="tile is-child notification is-warning">
										<p class="title darkMode_text">{quote2}</p>
										<p class="subtitle darkMode_text">{author2} - {movie2}</p>
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

export default Quotes;
