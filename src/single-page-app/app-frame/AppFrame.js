import React, { Component } from "react";

import Navigation from "../models/navigation/Navigation";
import Footer from '../models/footer/Footer';

import "./AppFrame.css";

class AppFrame extends Component {
	constructor() {
		super();

		this.state = {
			footerData: null,
			projectData: null,
			isLoading: true,
		};
	}

	componentDidMount() {
		if (this.state.isLoading) {
			let url = process.env.REACT_APP_ELEGANT_CMS_URL + '?sort=updated_at';
			let token = process.env.REACT_APP_ELEGANT_CMS_TOKEN;

			let method = "get";
			let headers = new Headers({
				Authorization: "Token token=" + token,
			});

			fetch(url, { method: method, headers: headers })
				.then((response) => response.json())
				.then((json) => {
					console.log(json.data)

					let footerData = '';
					let projectData = [];
					let projectTags = [];
					let headerData = [];
					let bioData = [];
					let searchedTags = [];

					for(let i = 0; i < json.data.length; i++) {
						let content = json.data[i];

						if(content.attributes.title === 'profile_website_footer') {
							footerData = content.attributes.fields;
						}

						if(content.attributes.title.includes('_project')) {
							projectData.push(content.attributes.fields);
							content.attributes.fields.hide = false;

							console.log(content.attributes.fields.tag);
							if(!searchedTags.includes(content.attributes.fields.tag)) {
								projectTags.push({'displayName': content.attributes.fields.tag, 'displayStyle': content.attributes.fields.style});
								searchedTags.push(content.attributes.fields.tag)
							}
						}

						if(content.attributes.title.includes('_header')) {
							headerData.push(content.attributes.fields);
						}

						if(content.attributes.title.includes('bio')) {
							bioData.push(content.attributes.fields);
						}
					}

					this.setState({
						isLoading: false,
						data: "json.data",
						cmsData: json.data,
						footerData: footerData,
						projectData: projectData,
						projectTags: projectTags,
						headerData: headerData,
						bioData: bioData,
					});
				});
		}
	}

	render() {
		const { footerData, projectData, projectTags, headerData, bioData } = this.state;

		return (
			<section>
				<div className="columns make-footer-sticky">
					<div className="column">
						<Navigation projectData={projectData} projectTags={projectTags} headerData={headerData} bioData={bioData} />
					</div>
				</div>

				<footer className="footer page-footer darkModeSecondary">
					<div className="content has-text-centered">
						<Footer footerData={footerData}></Footer>
					</div>
				</footer>
			</section>
		);
	}
}

export default AppFrame;
