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
			}

			// if(this.state) {
			// 	console.log('state')
			// 	if(!this.state.charted) {
			// 		console.log('charted')

			// 		var ctx = document.getElementById('myChart').getContext('2d');
			// 		var myChart = new Chart(ctx, {
			// 			type: 'radar',
			// 			data: {
			// 				labels: labels,
			// 				datasets: [{
			// 					label: 'My Second Dataset',
			// 					data: data,
			// 					fill: true,
			// 					backgroundColor: 'rgba(54, 162, 235, 0.2)',
			// 					borderColor: 'rgb(54, 162, 235)',
			// 					pointBackgroundColor: 'rgb(54, 162, 235)',
			// 					pointBorderColor: '#fff',
			// 					pointHoverBackgroundColor: '#fff',
			// 					pointHoverBorderColor: 'rgb(54, 162, 235)'
			// 				}]
			// 			},
			// 			options: {
			// 				scale: {
			// 					ticks: {
			// 						display: false,
			// 						maxTicksLimit: 3
			// 					}
			// 				}
			// 			}
			// 		});

			// 		this.setState({
			// 			charted: true
			// 		})
			// 	}
			// }


			this.setState({
				headerData: this.props.headerData,
				bioData: this.props.bioData[0],
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
						<h1 class="title">{title}</h1>
						<h2 class="subtitle">{subTitle}</h2>
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
