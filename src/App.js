import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function App() {
	const [progress, setProgress] = useState(10);
	const pageSize = 10;
	const apiKey = process.env.REACT_APP_NEWS_API;

	return (
		<Router>
			<LoadingBar
				color='#f11946'
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<Navbar />

			<Routes>
				<Route
					exact
					path='/'
					element={
						<News
							setProgress={setProgress}
							key='home'
							pageSize={pageSize}
							country='in'
							apiKey={apiKey}
							category='general'
						/>
					}
				/>
				<Route
					exact
					path='/business'
					element={
						<News
							setProgress={setProgress}
							key='business'
							pageSize={pageSize}
							country='in'
							apiKey={apiKey}
							category='business'
						/>
					}
				/>
				<Route
					exact
					path='/entertainment'
					element={
						<News
							setProgress={setProgress}
							key='entertainment'
							pageSize={pageSize}
							country='in'
							apiKey={apiKey}
							category='entertainment'
						/>
					}
				/>
				<Route
					exact
					path='/health'
					element={
						<News
							setProgress={setProgress}
							key='health'
							pageSize={pageSize}
							country='in'
							apiKey={apiKey}
							category='health'
						/>
					}
				/>
				<Route
					exact
					path='/science'
					element={
						<News
							setProgress={setProgress}
							key='science'
							pageSize={pageSize}
							country='in'
							apiKey={apiKey}
							category='science'
						/>
					}
				/>
				<Route
					exact
					path='/sports'
					element={
						<News
							setProgress={setProgress}
							key='sports'
							pageSize={pageSize}
							country='in'
							apiKey={apiKey}
							category='sports'
						/>
					}
				/>
				<Route
					exact
					path='/technology'
					element={
						<News
							setProgress={setProgress}
							key='technology'
							pageSize={pageSize}
							country='in'
							apiKey={apiKey}
							category='technology'
						/>
					}
				/>
				<Route
					exact
					path='/about'
					element={
						<News
							setProgress={setProgress}
							key='about'
							pageSize={pageSize}
							country='in'
							apiKey={apiKey}
							category='about'
						/>
					}
				/>
			</Routes>
		</Router>
	);
}
export default App;
