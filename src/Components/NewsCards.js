import moment from 'moment';
import React, { Component } from 'react';
import '../StyleSheets/newsCard.css';

export class NewsCards extends Component {
	render() {
		let { title, description, imgUrl, newsUrl, PublisherName, publishedAt } =
			this.props;
		return (
			<div className='my-4'>
				<div className='card m-auto' id='divCard'>
					<img
						src={
							!imgUrl
								? 'https://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif'
								: imgUrl
						}
						alt='...'
						className='card-img-top'
					/>
					<div className='card-body cardBody'>
						<h5 className='card-title cardText'> {title}</h5>
						<p className='card-text cardText'>{description}...</p>
						<p className='card-text'>
							<small className='text-muted'>
								Updated {moment(publishedAt).startOf('minutes').fromNow()} by{' '}
								<strong>{PublisherName ? PublisherName : 'Unknown'}</strong>
							</small>
						</p>
						<a
							href={newsUrl}
							className='btn btn-sm btn-primary'
							target='_blank'
							rel='noopener noreferrer'
						>
							Read more
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsCards;
