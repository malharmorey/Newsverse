import React, { Component } from 'react';
import NewsCards from './NewsCards';
import '../StyleSheets/news.css';

export class News extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
		};
	}

	async componentDidMount() {
		let data = await fetch(
			'https://newsapi.org/v2/top-headlines?country=in&apiKey=ace299fb3e384e4eb3b64716655bfd64'
		);
		let parsedData = await data.json();
		this.setState({ articles: parsedData.articles });
	}
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
			</div>
		);
	}
}

export default News;
