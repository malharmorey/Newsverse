import React, { Component } from 'react';
import '../StyleSheets/news.css';
import NewsCards from './NewsCards';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			page: 0,
			totalResults: 0,
		};
		document.title = `Newsverse - ${this.capitalizeFirstLetter(
			this.props.category
		)}`;
	}

	async fetchNews() {
		this.props.setProgress(20);
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		this.props.setProgress(40);
		let parsedData = await data.json();
		this.props.setProgress(70);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			page: this.state.page + 1,
		});
		this.props.setProgress(100);
	}
	async componentDidMount() {
		this.fetchNews();
	}
	fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,
			page: this.state.page + 1,
		});
	};

	render() {
		return (
			<>
				<div className='container'>
					<p className='text-center display-5'>
						Top {this.capitalizeFirstLetter(this.props.category)} Headlines
					</p>

					<InfiniteScroll
						dataLength={this.state.articles.length}
						next={this.fetchMoreData}
						hasMore={this.state.articles.length !== this.state.totalResults}
						loader={
							this.state.articles.length === this.state.totalResults ? (
								''
							) : (
								<Loading />
							)
						}
					>
						<div className='container'>
							<div className='row'>
								{this.state.articles.map((elements) => {
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
						</div>
					</InfiniteScroll>
				</div>
			</>
		);
	}
}

export default News;
