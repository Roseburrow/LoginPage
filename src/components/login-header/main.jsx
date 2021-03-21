import React from 'react';

import TranslatedText from '../translated-text/main';

import './login-header.css';

function LoginHeader(props) {
	const { language } = props;
	
	return (
		<div className="LoginHeader">
			<div className="LoginUserIcon"></div>
			<h2><TranslatedText value="welcome_message" language={ language } /></h2>
		</div>
	);
}

export default LoginHeader;