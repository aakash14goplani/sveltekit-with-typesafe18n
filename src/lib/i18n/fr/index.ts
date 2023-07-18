import type { BaseTranslation } from '../i18n-types';

const fr = {
	heading: 'Internationalisation dans SvelteKit',
	toggle_label: 'Sélectionnez les paramètres régionaux',
	button_label_0: '{value:number}',
	button_label_1: '{value:number}',
	button_label_2: '{value:number}',
	body_text:
		"Ceci est un petit exemple pour démontrer la fonctionnalité i18n dans SvelteKit en utilisant la bibliothèque typesafe-i18n. typesafe-i18n est une bibliothèque d'internationalisation entièrement sécurisée et légère pour tous vos projets TypeScript et JavaScript. typesafe-i18n est livré avec une API qui permet à d'autres services de lire et de mettre à jour les traductions. Le nombre total de téléchargements npm par semaine au {date:Date|simpleDate} est de {download:number|simpleNumber}.",
	awards: "Vous {{ n'avez remporté aucun | avez gagné exactement ?? | avez remporté ?? }} prix",
	time: '{value:Date|simpleTime}',
	date: '{value:Date|simpleDate}',
	currency: '{value:number|simpleCurrency}'
} satisfies BaseTranslation;

export default fr;
