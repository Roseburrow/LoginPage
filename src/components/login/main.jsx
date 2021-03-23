import React, { useEffect, useState } from 'react';

import LoginForm from '../login-form/main';
import LoginHeader from '../login-header/main';

import { FALLBACK_LANG, getLanguageJSON } from '../../functions/language';

import './login.css';

function Login(props) {
	const { language } = props;

	const [languageConfig, setLanguageConfig] = useState({});

	useEffect(() => {
		getLanguageConfig();
	}, [ language ]);

	function getLanguageConfig() {
		//Load selected lang json object.
		getLanguageJSON('login', language, (langObj) => {

			//Load the fallback lang json object incase any strings are missing from the main lang object.
			getLanguageJSON('login', FALLBACK_LANG, (fallbackLangObj) => {
				
				//Merging them this way means any keys that don't exist in one but do in the other get resolved nicely.
				setLanguageConfig({ ...fallbackLangObj, ...langObj });
			});
		});
	}

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