import React from 'react';

import TranslatedText from '../translated-text/main';

import './header.css';

function Header() {
	return (
		<div className="Header">
			<div className="LoginUserIcon"></div>
			<h2><TranslatedText value="welcome_message" /></h2>
		</div>
	);
}

export default Header;