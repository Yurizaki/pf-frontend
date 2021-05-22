import { getDefaultNormalizer } from "@testing-library/dom";
import React, { Component } from "react";

const title = "Contact Details";

const profile_pic =
	"https://media-exp1.licdn.com/dms/image/C4D03AQG6gMpnF654Og/profile-displayphoto-shrink_200_200/0/1611170985373?e=1626912000&v=beta&t=Kg3ecgbQDRq6FBF2WUgCLEne7JCrN5BvgfrB_ar74to";
const name = "Alex Holmes";
const github = "https://github.com/Yurizaki";
const link = "https://www.linkedin.com/in/alex-holmes-296435128/";

const withMailToEmail = 'mailto:alxh.contact@gmail.com';
const email = 'alxh.contact@gmail.com';

const lastUpdated = '19 May 2021';

class Contact extends Component {
	render() {
		return (
			<section>
				<section class="hero is-link">
					<div class="hero-body">
						<h1 class="title">{title}</h1>
					</div>
				</section>

				<div class="card">
					<div class="card-content">
						<div class="media">
							<div class="media-left">
								<figure class="image is-48x48">
									<img src={profile_pic} alt="Profile pic" />
								</figure>
							</div>
							<div class="media-content">
								<p class="title is-4">{name}</p>
							</div>
						</div>

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
