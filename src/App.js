import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import Resume from './components/Resume/resume'
import Projects from './components/Projects/projects'

function App() {



  	return (
			<div class='bg'>
				<header>
					<Nav />
				</header>
				<body class='bod'>
					<Projects />
					<Home />
					<Route />
				</body>
			</div>
		);
}

export default App;
