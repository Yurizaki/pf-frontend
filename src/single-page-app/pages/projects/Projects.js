import { React, Component } from 'react';

const ALL_PROJECTS = 'All Projects';
const PAGE_ID = 'project_header';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectData: null,
			projectTags: null,
			headerData: null,
		};

		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(event) {
		const projData = this.state.projectData;
		const projTags = this.state.projectTags;

		if (projData && projTags) {
			if (event.target.innerText === ALL_PROJECTS) {
				for (let i = 0; i < projData.length; i++) {
					let content = projData[i];
					content.hide = false;
				}
			} else {
				for (let i = 0; i < projData.length; i++) {
					let content = projData[i];

					if (content.tag === event.target.innerText) {
						content.hide = false;
					} else {
						content.hide = true;
					}
				}
			}

			this.setState({ projectData: projData });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			let title = '';
			let subTitle = '';

			if (this.props.headerData) {
				let headerData = this.props.headerData;

				for (let i = 0; i < headerData.length; i++) {
					let content = headerData[i];
					if (content.id === PAGE_ID) {
						title = content.title;
						subTitle = content.subtitle;
					}
				}
			}

			this.setState({
				projectData: this.props.projectData,
				projectTags: this.props.projectTags,
				headerData: this.props.headerData,
				title: title,
				subTitle: subTitle,
			});
		}
	}

	render() {
		let projectData = [];
		let projectTags = [];

		let title = '';
		let subTitle = '';

		if (this.state) {
			if (this.state.projectData) {
				projectData = this.state.projectData;
			}
			if (this.state.projectTags) {
				projectTags = this.state.projectTags;
			}
			if (this.state.title && this.state.subTitle) {
				title = this.state.title;
				subTitle = this.state.subTitle;
			}
		}

		return (
			<section>
				<section class='hero is-link'>
					<div class='hero-body'>
						<h1 class='title'>{title}</h1>
						<h2 class='subtitle'>{subTitle}</h2>
					</div>
				</section>

				<div className='box'>
					<div class='buttons has-addons is-centered'>
						<button class='button is-info' onClick={this.onSelect}>
							{ALL_PROJECTS}
						</button>
						{projectTags.length > 0 &&
							projectTags.map((projectTags) => (
								<button
									class={'button ' + projectTags.displayStyle}
									onClick={this.onSelect}
								>
									{projectTags.displayName}
								</button>
							))}
					</div>
					<div class='tile is-ancestor'>
						<div class='tile is-vertical is-12'>
							<div class='tile'>
								<div class='tile is-parent is-vertical'>
									{projectData.length > 0 &&
										projectData.map(
											(projectData) =>
												!projectData.hide && (
													<article
														class={
															'tile is-child notification ' +
															projectData.style
														}
													>
														<p class='title'>
															{projectData.header}
														</p>
														<p class='subtitle'>
															{
																projectData.summary
															}
														</p>
														<p class='content'>
															{/* {content1} */}
														</p>
													</article>
												)
										)}
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
