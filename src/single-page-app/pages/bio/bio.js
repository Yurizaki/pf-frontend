import { React, Component } from "react";
import {
	Chart,
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip
} from 'chart.js';

const PAGE_ID = 'home_header';

class Bio extends Component {
	constructor() {
		super();

		Chart.register(
			ArcElement,
			LineElement,
			BarElement,
			PointElement,
			BarController,
			BubbleController,
			DoughnutController,
			LineController,
			PieController,
			PolarAreaController,
			RadarController,
			ScatterController,
			CategoryScale,
			LinearScale,
			LogarithmicScale,
			RadialLinearScale,
			TimeScale,
			TimeSeriesScale,
			Decimation,
			Filler,
			Legend,
			Title,
			Tooltip
		);

		this.setState({
			charted: false
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			let title = '';
			let subTitle = '';

			let para1 = '';
			let para2 = '';
			let image1 = '';
			let labels = '';
			let data = '';
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

			if(this.props.bioData) {
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
		let title = '';
		let subTitle = ''
		let para1 = '';
		let para2 = '';
		let para3 = '';
		let subheading1 = '';
		let image1 = ''

		if (this.state) {
			if (this.state.title && this.state.subTitle) {
				title = this.state.title;
				subTitle = this.state.subTitle;
			}

			if(this.state.bioData) {
				if (this.state.bioData.para1 &&
					this.state.bioData.image1 ) {
					para1 = this.state.para1;
					image1 = this.state.bioData.image1.url;
					// subheading1 = this.state.bioData.subheading1;
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

				<div className="box">
					<div className="columns">
						<div className="column is-one-thirds-tablet is-one-third-desktop is-one-quarter-fullhd is-one-quarter-widescreen">
							<figure class="image">
								<img
									src={image1}
									alt="Profile Pic"
								/>
							</figure>
						</div>
						<div className="column content ">
							<p>{para1}</p>
						</div>
					</div>
					<div className='columns'>
						<p>{subheading1}</p>
					</div>
					<div className='columns'>
						<p>{para2}</p>
					</div>
					<div className='columns'>
						<p>{para3}</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Bio;
