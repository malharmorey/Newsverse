import React, { Component } from 'react';
import magnify from '../Magnify.gif';

export default class Loading extends Component {
	render() {
		return (
			<div className='text-center '>
				<img
					style={{ height: '4rem', width: '4rem' }}
					src={magnify}
					alt='loading...'
				/>
			</div>
		);
	}
}
