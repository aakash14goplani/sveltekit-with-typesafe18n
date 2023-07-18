import { browser } from '$app/environment';
import type { LayoutLoad } from './$types';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { sessionStorageDetector, navigatorDetector } from 'typesafe-i18n/detectors';

export const load: LayoutLoad = async (event) => {
	const deafultLocale = 'en';
	const locale = browser
		? detectLocale(sessionStorageDetector) || detectLocale(navigatorDetector)
		: deafultLocale;

	await loadLocaleAsync(locale);
	setLocale(locale);

	return event.data;
};
