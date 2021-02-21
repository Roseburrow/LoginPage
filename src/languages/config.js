export const DEFAULT_LANGUAGE = 'en';
export const CURRENT_LANGUAGE = 'pirate';

const english = require('./english.json');
const french = require('./french.json');
const pirate = require('./pirate.json');

const LANGUAGE_CONFIG = {
	'en': english,
	'fr': french,
	'pirate': pirate
};

export function getTranslatedString(stringKey = '', language = DEFAULT_LANGUAGE) {
	return LANGUAGE_CONFIG[language][stringKey];
};