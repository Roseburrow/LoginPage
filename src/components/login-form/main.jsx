import React from 'react';

import TranslatedText from '../translated-text/main';

import './login-form.css';

function LoginForm(props) {
	const { language } = props;

	return (
		<form className="LoginForm">
			<label className="LoginLabel" for="username">
				<TranslatedText value="username_label" language={language} />
			</label>
			<input className="LoginInput" type="text" id="username" name="username" />
			<label className="LoginLabel" for="password">
				<TranslatedText value="password_label" language={language} />
			</label>
			<input className="LoginInput" type="password" id="password" name="password" />
			<button className="LoginButton">
				<TranslatedText value="login_label" language={language} />
			</button>
		</form>
	);
}

export default LoginForm;