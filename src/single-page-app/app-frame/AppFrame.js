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

					let footerData = '';
					let projectData = [];
					let projectTags = [];
					let headerData = [];

					for(let i = 0; i < json.data.length; i++) {
						let content = json.data[i];

						if(content.attributes.title === 'profile_website_footer') {
							footerData = content.attributes.fields;
						}

						if(content.attributes.title.includes('_project')) {
							projectData.push(content.attributes.fields);
							content.attributes.fields.hide = false;

							if(!projectTags.includes(content.attributes.fields.tag)) {
								projectTags.push({'displayName': content.attributes.fields.tag, 'displayStyle': content.attributes.fields.style});
							}
						}

						if(content.attributes.title.includes('_header')) {
							headerData.push(content.attributes.fields);
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
					});
				});
		}
	}

	render() {
		const { footerData, projectData, projectTags, headerData } = this.state;

		return (
			<section>
				<div className="columns make-footer-sticky">
					<div className="column">
						<Navigation projectData={projectData} projectTags={projectTags} headerData={headerData} />
					</div>
				</div>

				<footer className="footer page-footer">
					<div className="content has-text-centered">
						<Footer footerData={footerData}></Footer>
					</div>
				</footer>
			</section>
		);
	}
}

export default AppFrame;
