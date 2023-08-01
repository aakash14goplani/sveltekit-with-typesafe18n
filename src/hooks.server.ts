import type { Handle, HandleServerError } from '@sveltejs/kit';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import {
	initAcceptLanguageHeaderDetector,
	initRequestCookiesDetector
} from 'typesafe-i18n/detectors';

export const handle: Handle = async ({ event, resolve }) => {
	let deafultLocale = 'en';

	const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
	const localeFromHeaders = detectLocale(acceptLanguageHeaderDetector);

	if (!localeFromHeaders) {
		// if locale is not present in headers, try fetching it from cookies
		const requestCookiesDetector = initRequestCookiesDetector({
			cookies: event.cookies.get('lang') || ''
		});
		const localeFromCookies = detectLocale(requestCookiesDetector);
		if (localeFromCookies) {
			deafultLocale = localeFromCookies;
		} else {
			// add in cookes
			event.cookies.set('lang', deafultLocale, { path: '/' });
		}
	} else {
		deafultLocale = localeFromHeaders;
	}
	const locale = detectLocale(() => [deafultLocale]);
	// Load it
	await loadLocaleAsync(locale);
	// Set it
	setLocale(locale);
	// Set locale within locals property
	event.locals.locale = deafultLocale;
	return resolve(event);
};

export const handleError: HandleServerError = ({ error }) => {
	const message = 'Error caught in [server-hooks]: ' + (error as any)?.message;
	console.error(message, error);
	return { message };
};
