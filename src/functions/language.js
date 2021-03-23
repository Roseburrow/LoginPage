export const FALLBACK_LANG = 'english';

export function getLanguageJSON(page, language, callback) {
	let xhttp = new XMLHttpRequest();
	let file = `lang/${ page }/${language}.json`;

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText)
			try {
				const LANGUAGE_JSON = JSON.parse(this.responseText);
				callback(LANGUAGE_JSON);
			}
			catch (e) {
				console.log("Error Parsing Language JSON: " + e);
			}
		}
	};

	xhttp.open("GET", file, false);
	xhttp.send();
}