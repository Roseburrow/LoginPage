import React, { useState } from 'react';

import Login from './components/login/main';
import TopBar from './components/top-bar/main';

import './App.css';

function App() {
	const [language, setLanguage] = useState('english');

	return (
		<div className="App">
			<TopBar onLanguageChange={ (lang) => setLanguage(lang) }/>
			<div className="center">
				<Login language={ language }/>
			</div>
		</div>
	);
}

export default App;
