export const FALLBACK_LANG = 'english';

export function getLanguageJSON(language, page) {
	return new Promise((resolve, reject) => {
		let xhttp = new XMLHttpRequest();
		let file = `lang/${ page }/${ language }.json`;

		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				try {
					const LANGUAGE_JSON = JSON.parse(this.responseText);
					resolve(LANGUAGE_JSON);
				}
				catch (e) {
					reject(e);
				}
			}
		};

		xhttp.open("GET", file, true);
		xhttp.send();
	});
}

export function loadLanguageConfig(language, page, callback) {
	Promise.all([
		getLanguageJSON(language, page),
		getLanguageJSON(FALLBACK_LANG, page)
	]).then((configs) => {
		let finalConfig = {};

		configs.forEach((config) => {
			finalConfig = { ...config, ...finalConfig };
		});

		callback(finalConfig);
	}).catch((error) => console.log("Error Loading Language:" + error));
}