import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Routes>
					<Route
						exact
						path='/'
						element={
							<News key='home' pageSize={12} country='in' category='general' />
						}
					/>
					<Route
						exact
						path='/business'
						element={
							<News
								key='business'
								pageSize={12}
								country='in'
								category='business'
							/>
						}
					/>
					<Route
						exact
						path='/entertainment'
						element={
							<News
								key='entertainment'
								pageSize={12}
								country='in'
								category='entertainment'
							/>
						}
					/>
					<Route
						exact
						path='/health'
						element={
							<News key='health' pageSize={12} country='in' category='health' />
						}
					/>
					<Route
						exact
						path='/science'
						element={
							<News
								key='science'
								pageSize={12}
								country='in'
								category='science'
							/>
						}
					/>
					<Route
						exact
						path='/sports'
						element={
							<News key='sports' pageSize={12} country='in' category='sports' />
						}
					/>
					<Route
						exact
						path='/technology'
						element={
							<News
								key='technology'
								pageSize={12}
								country='in'
								category='technology'
							/>
						}
					/>
					<Route
						exact
						path='/about'
						element={
							<News key='about' pageSize={12} country='in' category='about' />
						}
					/>
				</Routes>
			</Router>
		);
	}
}
