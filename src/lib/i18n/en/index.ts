import type { BaseTranslation } from '../i18n-types';

const en = {
	heading: 'Internationalization in SvelteKit',
	toggle_label: 'Select Locale',
	body_text:
		'This is a small example to demonstrate i18n functionality in SvelteKit using typesafe-i18n library. typesafe-i18n is a fully type-safe and lightweight internationalization library for all your TypeScript and JavaScript projects. typesafe-i18n comes with an API that allows other services to read and update translations. Total number of npm downloads per week as of {date:Date|simpleDate} are {download:number|simpleNumber}.',
	awards: 'You have {{ not won any awards | won exactly ?? award | won ?? awards }}!',
	time: '{value:Date|simpleTime}',
	date: '{value:Date|simpleDate}',
	currency: '{value:number|simpleCurrency}'
} satisfies BaseTranslation;

export default en;
