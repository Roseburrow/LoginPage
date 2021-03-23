import React from 'react';

import './login-form.css';

function LoginForm(props) {
	const { languageConfig } = props;

	return (
		<form className="LoginForm">
			<label className="LoginLabel" for="username">
				{ languageConfig["username_label"] }
			</label>
			<input className="LoginInput" type="text" id="username" name="username" />
			<label className="LoginLabel" for="password">
				{ languageConfig["password_label"] }
			</label>
			<input className="LoginInput" type="password" id="password" name="password" />
			<button className="LoginButton">
				{ languageConfig["login_label"] }
			</button>
		</form>
	);
}

export default LoginForm;