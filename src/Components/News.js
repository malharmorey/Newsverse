import React, { Component } from 'react';
import NewsCards from './NewsCards';
import '../StyleSheets/news.css';

export class News extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			totalResults: 0,
		};
	}

	async componentDidMount() {
		let data = await fetch(
			'https://newsapi.org/v2/top-headlines?country=in&apiKey=ace299fb3e384e4eb3b64716655bfd64&page=1&pageSize=20'
		);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
		});
	}

	previousClick = async () => {
		let data = await fetch(
			`https://newsapi.org/v2/top-headlines?country=in&apiKey=ace299fb3e384e4eb3b64716655bfd64&page=${
				this.state.page - 1
			}&pageSize=20`
		);
		let parsedData = await data.json();
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles,
		});
	};

	nextClick = async () => {
		if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
		} else {
			let data = await fetch(
				`https://newsapi.org/v2/top-headlines?country=in&apiKey=ace299fb3e384e4eb3b64716655bfd64&page=${
					this.state.page + 1
				}&pageSize=20`
			);
			let parsedData = await data.json();
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles,
			});
		}
	};

	render() {
		return (
			<div className='container'>
				<p className='text-center display-5'>Top News</p>
				<div className='row'>
					{this.state.articles.map((elements) => {
						return (
							<div className='col-md-4' key={elements.url}>
								<NewsCards
									title={
										elements.title
											? elements.title.slice(0.52)
											: 'No title available'
									}
									description={
										elements.description
											? elements.description.slice(0, 90)
											: 'No description available'
									}
									imgUrl={elements.urlToImage}
									newsUrl={elements.url}
								/>
							</div>
						);
					})}
				</div>
				<div className='contaier d-flex justify-content-between my-4 px-5'>
					<button
						type='button'
						className='btn btn-dark'
						onClick={this.previousClick}
						disabled={this.state.page <= 1}
					>
						&laquo; Previous
					</button>
					<button
						type='button'
						className='btn btn-dark'
						onClick={this.nextClick}
					>
						Next &raquo;
					</button>
				</div>
			</div>
		);
	}
}

export default News;
