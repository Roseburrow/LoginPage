import React, { useEffect, useState } from 'react';

const FALLBACK_LANG = 'english';

function TranslatedText(props) {
	const [translatedText, setTranslatedText] = useState(undefined);
	const [hasLoaded, setHasLoaded] = useState(false);

	const { value, language } = props;

	useEffect(() => {
		getTranslatedText(language);
	}, [ language ])

	function getTranslatedText(language) {
		let xhttp = new XMLHttpRequest();
		let file = `lang/${ language }.json`;

		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					let languageJSON = JSON.parse(this.responseText);
					let translatedText = languageJSON[value];

					setHasLoaded(true);
					setTranslatedText(translatedText);
				}
				catch (e) {
					console.log("Error Parsing Language JSON: " + e);
				}
			}
		};

		xhttp.open("GET", file, true);
		xhttp.send();
	}

	if (hasLoaded && !translatedText) {
		getTranslatedText(FALLBACK_LANG)
	}

	return translatedText || 'Loading...';
}

export default TranslatedText;