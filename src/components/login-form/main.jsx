import React from 'react';

import Header from '../header/main';
import TranslatedText from '../translated-text/main';

import './login-form.css';

function LoginForm() {
	return (
		<div>
			<Header />
			<div className="Login">
				<form className="LoginForm">
					<label className="LoginLabel" for="username">
						<TranslatedText value="username_label" language='english' />
					</label>
					<input className="LoginInput" type="text" id="username" name="username" />
					<label className="LoginLabel" for="password">
						<TranslatedText value="password_label" language='english' />
					</label>
					<input className="LoginInput" type="password" id="password" name="password" />
					<button className="LoginButton">
						<TranslatedText value="login_label" language='english' />
					</button>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;