import React, { Component } from "react";

const title = "Contact Details";
const github = "https://github.com/Yurizaki";
const link = "https://www.linkedin.com/in/alex-holmes-296435128/";

const withMailToEmail = 'mailto:alxh.contact@gmail.com';
const email = 'alxh.contact@gmail.com';

const lastUpdated = '27 May 2021';

class Contact extends Component {
	render() {
		return (
			<section>
				<section class="hero is-link">
					<div class="hero-body">
						<h1 class="title darkMode_text">{title}</h1>
					</div>
				</section>

				<div class="card">
					<div class="card-content">
						<div class="content">
							<p>For more info on myself.</p>
							<ul>
								<li>
									Github: <a href={github} target="_blank" rel="noreferrer">click here</a>
								</li>
								<li>
									LinkedIn: <a href={link} target="_blank" rel="noreferrer">click here</a>
								</li>
							</ul>
							<p>For any general queries or questions feel free to contact me at the below email:</p>
                            <ul>
								<li>
									Email: <a href={withMailToEmail}>{email}</a>
								</li>
							</ul>
                        </div>
					</div>

					<footer class="card-footer">
						<p class="card-footer-item">
							Site last updated: {lastUpdated}
						</p>
					</footer>
				</div>
			</section>
		);
	}
}

export default Contact;
