import moment from 'moment';
import React from 'react';
import '../StyleSheets/newsCard.css';

const NewsCards = (props) => {
	let { title, description, imgUrl, newsUrl, PublisherName, publishedAt } =
		props;
	return (
		<div className='my-4'>
			<div
				className='card m-auto'
				id='divCard'
				style={
					props.mode === 'light'
						? {}
						: { backgroundColor: 'black', color: 'wheat', boxShadow: 'none' }
				}
			>
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
					<h5 className='card-title cardText' id='cardTitle'>
						{' '}
						{title}
					</h5>
					<p className='card-text cardText'>{description}...</p>
					<p className='card-text mb-3'>
						<small className='text-muted '>
							Updated {moment(publishedAt).startOf('minutes').fromNow()} by{' '}
							<strong>{PublisherName ? PublisherName : 'Unknown'}</strong>
						</small>
					</p>
					<a
						href={newsUrl}
						className=' readBtn'
						target='_blank'
						rel='noopener noreferrer'
						style={props.mode === 'light' ? {} : { color: 'wheat' }}
					>
						Read more &rarr;
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsCards;
