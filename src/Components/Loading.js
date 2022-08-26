import React from 'react';
import magnify from '../Magnify.gif';

export default function Loading(props) {
	return (
		<div className='text-center my-3'>
			<img
				style={{ height: '4rem', width: '4rem' }}
				src={magnify}
				alt='loading...'
			/>
		</div>
	);
}
