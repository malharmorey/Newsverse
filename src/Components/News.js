import React, { Component } from 'react';
import '../StyleSheets/news.css';
import NewsCards from './NewsCards';
import Loading from './Loading';
import PropTypes from 'prop-types';

export class News extends Component {
	static defaultProps = {
		country: 'in',
		pageSize: 8,
		category: 'general',
	};
	static propsTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	};
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			totalResults: 0,
		};
	}

	async handleClicks() {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ba2ac4f4cbd4c2cbbd31225f4d92c2a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}
	async componentDidMount() {
		this.handleClicks();
	}

	previousClick = async () => {
		await this.setState({ page: this.state.page - 1 });
		this.handleClicks();
	};

	nextClick = async () => {
		await this.setState({ page: this.state.page + 1 });
		this.handleClicks();
	};

	render() {
		return (
			<>
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
												elements.title ? elements.title : 'No title available'
											}
											description={
												elements.description
													? elements.description.slice(0, 90)
													: 'No description available'
											}
											imgUrl={elements.urlToImage}
											newsUrl={elements.url}
											PublisherName={elements.source.name}
											publishedAt={elements.publishedAt}
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
