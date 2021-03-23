import React from 'react';

import './login-header.css';

function LoginHeader(props) {
	const { languageConfig } = props;
	
	return (
		<div className="LoginHeader">
			<div className="LoginUserIcon"></div>
			<h2>{ languageConfig["welcome_message"] }</h2>
		</div>
	);
}

export default LoginHeader;