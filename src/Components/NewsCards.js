import React, { Component } from 'react';
import '../StyleSheets/newsCard.css';

export class NewsCards extends Component {
	render() {
		let { title, description, imgUrl, newsUrl } = this.props;
		return (
			<div className='my-4'>
				<div className='card m-auto' id='divCard'>
					<img
						src={
							!imgUrl
								? 'https://kaverisias.com/wp-content/uploads/2018/01/catalog-default-img.gif'
								: imgUrl
						}
						className='card-img-top'
						alt='...'
					/>
					<div className='card-body'>
						<h5
							className='card-title'
							style={{
								maxWidth: '100%',

								display: '-webkit-box',

								WebkitBoxOrient: 'vertical',

								WebkitLineClamp: 3,

								overflow: 'hidden',

								textOverflow: 'ellipsis',
							}}
						>
							{' '}
							{title}
						</h5>
						<p
							className='card-text'
							style={{
								maxWidth: '100%',

								display: '-webkit-box',

								WebkitBoxOrient: 'vertical',

								WebkitLineClamp: 4,

								overflow: 'hidden',

								textOverflow: 'ellipsis',
							}}
						>
							{description}...
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
