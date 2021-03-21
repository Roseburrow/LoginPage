import React from 'react';

import { getTranslatedString } from '../../languages/config';

function TranslatedText(props) {
	const { value, language } = props;

	function getTranslatedText(stringKey) {
		let translatedText = getTranslatedString(stringKey, language);

		if (!translatedText) {
			translatedText = getTranslatedString(stringKey);
		}

		return translatedText;
	}

	return getTranslatedText(value);
}

export default TranslatedText;