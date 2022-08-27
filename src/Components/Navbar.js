import React from 'react';
import '../StyleSheets/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div
			id='navBar'
			style={props.mode === 'light' ? {} : { backgroundColor: 'black' }}
		>
			<nav
				className={`navbar navbar-expand-lg py-0 navbar-${
					props.mode === 'light' ? 'light' : 'dark'
				}`}
				style={
					props.mode === 'light'
						? { backgroundColor: 'white' }
						: { backgroundColor: 'black' }
				}
			>
				<div className='container-fluid mt-1' id='fluidContainer'>
					<Link
						className='navbar-brand '
						id='title'
						to='/'
						style={props.mode === 'light' ? {} : { color: 'wheat' }}
					>
						Newsverse
					</Link>
					<button
						className='navbar-toggler '
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon  '></span>
					</button>
					<div
						className='collapse navbar-collapse pe-5'
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav me-auto mb-lg-0 '>
							<li className='nav-item'>
								<Link
									className='nav-link  active '
									to='/'
									style={props.mode === 'light' ? {} : { color: `wheat` }}
								>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link  active'
									to='/business'
									style={props.mode === 'light' ? {} : { color: 'wheat' }}
								>
									Business
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link  active'
									to='/entertainment'
									style={props.mode === 'light' ? {} : { color: 'wheat' }}
								>
									Entertainment
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link  active'
									to='/health'
									style={props.mode === 'light' ? {} : { color: 'wheat' }}
								>
									Health
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link  active'
									to='/science'
									style={props.mode === 'light' ? {} : { color: 'wheat' }}
								>
									Science
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link  active'
									to='/sports'
									style={props.mode === 'light' ? {} : { color: 'wheat' }}
								>
									Sports
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link  active'
									to='/technology'
									style={props.mode === 'light' ? {} : { color: 'wheat' }}
								>
									Technology
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link  active'
									to='/about'
									style={props.mode === 'light' ? {} : { color: 'wheat' }}
								>
									About
								</Link>
							</li>
						</ul>
						<div className='darkMode'>
							<div className='switch'>
								<label className='theme-switch' htmlFor='checkbox'>
									<input
										type='checkbox'
										id='checkbox'
										onClick={props.toggleMode}
									/>
									<div className='slider round'></div>
								</label>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
		//TODO: use search bar to search and fetch matching articles
	);
};

export default Navbar;
