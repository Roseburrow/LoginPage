import React from 'react';

import { CURRENT_LANGUAGE, getTranslatedString } from '../../languages/config';

function TranslatedText(props) {
	const { value } = props;

	function getTranslatedText(stringKey) {
		let translatedText = getTranslatedString(stringKey, CURRENT_LANGUAGE);

		if (!translatedText) {
			translatedText = getTranslatedString(stringKey);
		}

		return translatedText;
	}

	return getTranslatedText(value);
}

export default TranslatedText;