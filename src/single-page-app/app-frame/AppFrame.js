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
			data: "noo",
		};
	}

	componentDidMount() {
		if (this.state.isLoading) {
			let url = process.env.REACT_APP_ELEGANT_CMS_URL;
			let token = process.env.REACT_APP_ELEGANT_CMS_TOKEN;
			let filter = "?filter[uuid][]=fba34e9f-aa4a-40ee-bbaf-f1daf1271243";

			let method = "get";
			let headers = new Headers({
				Authorization: "Token token=" + token,
			});

			fetch(url, { method: method, headers: headers })
				.then((response) => response.json())
				.then((json) => {

					let footerData = '';
					let projectData = [];
					for(let i = 0; i < json.data.length; i++) {
						let content = json.data[i];
						if(content.attributes.title === 'profile_website_footer') {
							footerData = content.attributes.fields;
						}

						if(content.attributes.title.includes('project')) {
							projectData.push(content.attributes.fields);
						}

						console.log(projectData);
					}
					this.setState({
						isLoading: false,
						data: "json.data",
						cmsData: json.data,
						footerData: footerData,
						projectData: projectData
					});
				});
		}
	}

	render() {
		const { data, footerData, projectData } = this.state;

		return (
			<section>
				<div className="columns make-footer-sticky">
					<div className="column">
						<Navigation projectData={projectData} />
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
