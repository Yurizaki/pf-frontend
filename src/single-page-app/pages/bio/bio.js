import { React, Component } from "react";

const PAGE_ID = 'home_header';

const profile_pic =
	"https://media-exp1.licdn.com/dms/image/C4D03AQG6gMpnF654Og/profile-displayphoto-shrink_200_200/0/1611170985373?e=1626912000&v=beta&t=Kg3ecgbQDRq6FBF2WUgCLEne7JCrN5BvgfrB_ar74to";

const para1 =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class Bio extends Component {
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
				headerData: this.props.headerData,
				title: title,
				subTitle: subTitle,
			});
		}
	}

	render() {
		let title = '';
		let subTitle = ''

		if (this.state) {
			if (this.state.title && this.state.subTitle) {
				title = this.state.title;
				subTitle = this.state.subTitle;
			}
		}

		return (
			<section>
				<section class="hero is-link">
					<div class="hero-body">
						<h1 class="title">{title}</h1>
						<h2 class="subtitle">{subTitle}</h2>
					</div>
				</section>

				<div className="box">
					<div className="columns">
						<div className="column is-one-quarter">
							<figure class="image is-128x128">
								<img
									class="is-rounded"
									src={profile_pic}
									alt="Profile Pic"
								/>
							</figure>
						</div>
						<div className="column content is-medium">
							<p>{para1}</p>
						</div>
					</div>
					<div className="columns">
						<div className="column content is-medium">
							<p>{para1}</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Bio;
