import React from 'react';

import './top-bar.css';

function TopBar(props) {
	let { onLanguageChange } = props;
	
	return (
		<div className="TopBar">
			<div className="TopBarRight">
				<div className="lang-icon"></div>
				<select name="lang" className="lang-selector" onChange={ (e) => onLanguageChange(e.target.value) }>
					<option value="en">English</option>
					<option value="fr">French</option>
					<option value="pirate">Pirate</option>
				</select>
			</div>
		</div>
	);
}

export default TopBar;