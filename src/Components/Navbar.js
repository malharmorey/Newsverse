import React, { Component } from 'react';
import '../StyleSheets/navbar.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
	render() {
		return (
			<div id='navBar'>
				<nav className='navbar navbar-expand-lg bg-dark /*  */'>
					<div className='container-fluid ' id='fluidContainer'>
						<Link className='navbar-brand text-white' id='title' to='/'>
							Newsverse
						</Link>
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
									<Link className='nav-link  text-white' to='/'>
										Home
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link text-white' to='/business'>
										Business
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link text-white' to='/entertainment'>
										Entertainment
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link text-white' to='/health'>
										Health
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link text-white' to='/science'>
										Science
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link text-white' to='/sports'>
										Sports
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link text-white' to='/technology'>
										Technology
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link text-white' to='/about'>
										About
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			//TODO: use search bar to search and fetch matching articles
		);
	}
}

export default Navbar;
