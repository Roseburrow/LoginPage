import React, { useEffect, useState } from 'react';

import LoginForm from '../login-form/main';
import LoginHeader from '../login-header/main';

import { loadLanguageConfig } from '../../functions/language';

import './login.css';

function Login(props) {
	const { language } = props;

	const [languageConfig, setLanguageConfig] = useState({});

	useEffect(() => {
		loadLanguageConfig(language, (langConfig) => setLanguageConfig(langConfig));
	}, [ language ]);

	return (
		<div>
			<LoginHeader languageConfig={ languageConfig }/>
			<div className="LoginContent">
				<LoginForm languageConfig={ languageConfig }/>
			</div>
		</div>
	);
}

export default Login;