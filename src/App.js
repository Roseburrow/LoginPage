import React, { useState } from 'react';

import LoginForm from './components/login-form/main';
import TopBar from './components/top-bar/main';

import './App.css';

function App() {
	const [language, setLanguage] = useState('en');

	return (
		<div className="App">
			<TopBar onLanguageChange={ (lang) => setLanguage(lang) }/>
			<div className="center">
				<LoginForm language={ language }/>
			</div>
		</div>
	);
}

export default App;
