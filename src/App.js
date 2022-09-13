import './StyleSheets/App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import About from './Components/About';

function App() {
	const [progress, setProgress] = useState(10);
	const [mode, setMode] = useState('light');
	const pageSize = 20;
	const apiKey = process.env.REACT_APP_NEWS_API;

	//Dark-Mode Toggle
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#15171a';
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
		}
	};

	return (
		<Router>
			<LoadingBar
				color='#f11946'
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<Navbar mode={mode} toggleMode={toggleMode} />

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
							mode={mode}
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
							mode={mode}
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
							mode={mode}
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
							mode={mode}
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
							mode={mode}
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
							mode={mode}
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
							mode={mode}
						/>
					}
				/>
				<Route
					exact
					path='/about'
					element={<About mode={mode} setProgress={setProgress} />}
				/>
			</Routes>
		</Router>
	);
}
export default App;
