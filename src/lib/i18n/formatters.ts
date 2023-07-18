import type { FormattersInitializer } from 'typesafe-i18n';
import type { Locales, Formatters } from './i18n-types';
import { date, time, number } from 'typesafe-i18n/formatters';

export const initFormatters: FormattersInitializer<Locales, Formatters> = (locale: Locales) => {
	const formatters: Formatters = {
		simpleDate: date(locale, { year: 'numeric', month: 'long', day: 'numeric' }),
		simpleTime: time(locale, { hour: 'numeric', minute: 'numeric' }),
		simpleNumber: number(locale),
		simpleCurrency: number(locale, { style: 'currency', currency: getCurrencyCode(locale) })
	};

	return formatters;
};

function getCurrencyCode(value: Locales): string {
	switch (value) {
		case 'en':
			return 'USD';
		case 'hi':
			return 'INR';
		case 'fr':
			return 'EUR';
		default:
			return 'USD';
	}
}
