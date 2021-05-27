import { React, Component } from "react";

class Blog extends Component {

    render() {
        return (
            <section>
				<section class='hero is-link'>
					<div class='hero-body'>
						<h1 class='title darkMode_text'>Blog</h1>
						<h2 class='subtitle darkMode_text'>A collection of articles written by myself of things or thoughts that I'd like to share</h2>
					</div>
				</section>

                <div className='box darkModeComponent'>
                    <p className='subtitle is-5'>Check back later... :)</p>
                </div>
            </section>
        );
    }

}

export default Blog;