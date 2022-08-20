import React, { Component } from 'react';
import NewsCards from './NewsCards';
import '../StyleSheets/news.css';
import Loading from './Loading';

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
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7ba2ac4f4cbd4c2cbbd31225f4d92c2a&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}

	previousClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7ba2ac4f4cbd4c2cbbd31225f4d92c2a&page=${
			this.state.page - 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles,
			loading: false,
		});
	};

	nextClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7ba2ac4f4cbd4c2cbbd31225f4d92c2a&page=${
			this.state.page + 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			page: this.state.page + 1,
			articles: parsedData.articles,
			loading: false,
		});
	};

	render() {
		return (
			<>
				<div ref={this.myRef}></div>
				<div className='container'>
					<p className='text-center display-5'>Top News</p>
					{this.state.loading ? <Loading /> : ''}
					<div className='row'>
						{!this.state.loading &&
							this.state.articles.map((elements) => {
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
							disabled={
								this.state.page + 1 >
								Math.ceil(this.state.totalResults / this.props.pageSize)
							}
						>
							Next &raquo;
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default News;
