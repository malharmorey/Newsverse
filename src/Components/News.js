import React, { useEffect, useState } from 'react';
import '../StyleSheets/news.css';
import NewsCards from './NewsCards';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from 'react-scroll-to-top';

const News = (props) => {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const fetchNews = async () => {
		props.setProgress(20);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
		let data = await fetch(url);
		props.setProgress(40);
		let parsedData = await data.json();
		props.setProgress(70);

		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
		setPage(page + 1);

		props.setProgress(100);
	};

	useEffect(() => {
		document.title = `Newsverse - ${capitalizeFirstLetter(props.category)}`;
		fetchNews().catch(
			(err) => console.log('error', err),
			props.setProgress(100)
		);
	}, []); // eslint-disable-line

	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(articles.concat(parsedData.articles));
		setTotalResults(parsedData.totalResults);
		setPage(page + 1);
	};

	return (
		<div
			id='mainContainer'
			style={props.mode === 'light' ? {} : { backgroundColor: '#15171a' }}
		>
			<p
				id='headline'
				className='text-center'
				style={
					props.mode === 'light' ? {} : { color: 'wheat', textShadow: 'none' }
				}
			>
				Top {capitalizeFirstLetter(props.category)} Headlines
			</p>
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={articles.length === totalResults ? '' : <Loading />}
			>
				<div className='container'>
					<div className='row'>
						{articles.map((elements) => {
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
										mode={props.mode}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>
			<ScrollToTop
				smooth
				component={
					<button
						className='scrollTopBtn'
						style={
							props.mode === 'light'
								? {}
								: {
										backgroundColor: 'wheat',
										color: 'black',
										boxShadow: 'none',
										WebkitBoxShadow: 'none',
										MozWindowShadow: 'none',
								  }
						}
					>
						&uarr;
					</button>
				}
				style={
					props.mode === 'light'
						? {}
						: {
								boxShadow: 'none',
								WebkitBoxShadow: 'none',
								MozWindowShadow: 'none',
						  }
				}
			/>
		</div>
	);
};

News.defaultProps = {
	country: 'in',
	pageSize: 8,
	category: 'general',
};
News.propsTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
};

export default News;
