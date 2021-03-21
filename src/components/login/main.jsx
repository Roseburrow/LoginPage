import React from 'react';

import LoginForm from '../login-form/main';
import LoginHeader from '../login-header/main';

import './login.css';

function Login(props) {
	const { language } = props;

	return (
		<div>
			<LoginHeader language={ language }/>
			<div className="LoginContent">
				<LoginForm language={ language }/>
			</div>
		</div>
	);
}

export default Login;