import React, { useEffect } from 'react';
import '../StyleSheets/about.css';

function About(props) {
	useEffect(() => {
		props.setProgress(100);
	}, []); // eslint-disable-line
	return (
		<div
			className='mx-auto'
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
				About Newsverse
			</p>
			<div id='textcontainer '>
				<p
					className='text-center px-3 aboutText'
					style={props.mode === 'light' ? {} : { color: 'wheat' }}
				>
					Newsverse is a modern news app 🗞️ build on{' '}
					<a
						style={{ textDecoration: `none` }}
						href='https://reactjs.org/'
						target='_blank'
						rel='noopener noreferrer'
					>
						React
					</a>{' '}
					which uses{' '}
					<a
						style={{ textDecoration: `none` }}
						href='https://reactjs.org/'
						target='_blank'
						rel='noopener noreferrer'
					>
						NewsAPI
					</a>{' '}
					to fetch top news headlines from the API.
					<br />
					Made 👨🏻‍💻 with ❤️ by Malhar.
				</p>
			</div>
		</div>
	);
}

export default About;
