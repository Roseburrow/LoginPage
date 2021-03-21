import React from 'react';

import Header from '../header/main';
import TranslatedText from '../translated-text/main';
import LoginForm from '../login-form/main';

import './login.css';

function Login(props) {
	const { language } = props;

	return (
		<div>
			<Header language={ language }/>
			<div className="LoginContent">
				<LoginForm language={ language }/>
			</div>
		</div>
	);
}

export default Login;