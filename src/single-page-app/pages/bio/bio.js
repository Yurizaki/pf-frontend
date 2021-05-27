import { React, Component } from "react";

const PAGE_ID = "home_header";

class Bio extends Component {
	constructor() {
		super();

		this.setState({
			charted: false,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			let title = "";
			let subTitle = "";

			let para1 = "";
			let para2 = "";
			let image1 = "";
			let labels = "";
			let data = "";
			let bioData = [];

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

			if (this.props.bioData) {
				para1 = this.props.bioData[0].para1;
				para2 = this.props.bioData[0].para2;
				image1 = this.props.bioData[0].image1.url;
				labels = JSON.parse(this.props.bioData[0].labels);
				data = JSON.parse(this.props.bioData[0].data);
				bioData = this.props.bioData[0];
			}

			this.setState({
				headerData: this.props.headerData,
				bioData: bioData,
				title: title,
				subTitle: subTitle,
				para1: para1,
				para2: para2,
				image1: image1,
				labels: labels,
				data: data,
			});
		}
	}

	render() {
		let title = "";
		let subTitle = "";
		let para1 = "";
		let para2 = "";
		let para3 = "";
		let subheading1 = "";
		let image1 = "";
		let data = "";

		if (this.state) {
			if (this.state.title && this.state.subTitle) {
				title = this.state.title;
				subTitle = this.state.subTitle;
			}

			if (this.state.bioData) {
				if (this.state.bioData.para1 && this.state.bioData.image1) {
					para1 = this.state.para1;
					image1 = this.state.bioData.image1.url;
					subheading1 = this.state.bioData.subheading1;
					data = JSON.parse(this.state.bioData.data);

					console.log(data);
				}
			}
		}

		return (
			<section>
				<section class="hero is-link">
					<div class="hero-body">
						<h1 class="title darkMode_text">{title}</h1>
						<h2 class="subtitle darkMode_text">{subTitle}</h2>
					</div>
				</section>

				<div className="box darkModeSecondary">
					<div className="columns">
						<div className="column is-one-thirds-tablet is-one-third-desktop is-one-quarter-fullhd is-one-quarter-widescreen">
							<figure class="image">
								<img src={image1} alt="Profile Pic" />
							</figure>
						</div>
						<div className="column content ">
							<p>{para1}</p>
						</div>
					</div>
				</div>

				<div className="box darkModeSecondary">
					<p className='title is-3 has-text-centered'>{subheading1}</p>
					<div class="timeline is-centered">
						<header class="timeline-header">
							<span class="tag is-medium is-primary">{data.timelineheader}</span>
						</header>
						<div class="timeline-item">
						</div>

						{data &&
							data.sets.length > 0 &&
								data.sets.map(
									(set) =>
										<>
											{ set.timelineend &&
												<>
													<header class="timeline-header">
														<span class="tag is-danger">{set.timelineend}</span>
													</header>
													<div class="timeline-item">
													</div>
												</>
											}
											{set.positions.map(
												(position) =>
													<>
														<div className='timeline-item'>
															<div class="timeline-marker"></div>
															<div class="timeline-content">
																<p class="heading">{position.date}</p>
																<p>{position.role}</p>
																<div className='content is-small'>
																	<p className='minor-text'>{position.content}</p>
																	<p className='has-text-grey'>{position.skills}</p>
																</div>
															</div>
														</div>
													</>
											)}
											<header class="timeline-header">
												<span class="tag is-info">{set.timelineheader}</span>
											</header>
											<div class="timeline-item">
											</div>
										</>
								)
						}
						<div class="timeline-item">
						</div>
						<div class="timeline-header">
							<span class="tag is-medium is-primary">{data.timelinestart}</span>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Bio;
