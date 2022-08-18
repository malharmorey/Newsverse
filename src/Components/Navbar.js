import React, { Component } from 'react';
import '../StyleSheets/navbar.css';

export class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='navbar navbar-expand-lg bg-dark'>
					<div className='container-fluid ' id='fluidContainer'>
						<a className='navbar-brand text-white' id='title' href='/'>
							Newsverse
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse '
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
								<li className='nav-item'>
									<a
										className='nav-link active text-white'
										aria-current='page'
										href='/'
									>
										Home
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link text-white' href='/'>
										Link
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
