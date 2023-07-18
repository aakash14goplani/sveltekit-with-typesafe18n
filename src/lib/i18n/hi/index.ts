import type { BaseTranslation } from '../i18n-types';

const hi = {
	heading: 'SvelteKit में अंतर्राष्ट्रीयकरण',
	toggle_label: 'भाषा चुने',
	button_label_0: '{value:number}',
	button_label_1: '{value:number}',
	button_label_2: '{value:number}',
	body_text:
		'यह typesafe-i18n लाइब्रेरी का उपयोग करके SvelteKit में i18n कार्यक्षमता प्रदर्शित करने के लिए एक छोटा सा उदाहरण है। typesafe-i18n आपके सभी टाइपस्क्रिप्ट और जावास्क्रिप्ट प्रोजेक्ट्स के लिए पूरी तरह से टाइप-सुरक्षित और हल्के अंतर्राष्ट्रीयकरण लाइब्रेरी है। typesafe-i18n एक एपीआई के साथ आता है जो अन्य सेवाओं को अनुवाद पढ़ने और अपडेट करने की अनुमति देता है।। {date:Date|simpleDate} तक प्रति सप्ताह npm डाउनलोड की कुल संख्या {download:number|simpleNumber} है|',
	awards: 'आपने {{ कोई पुरस्कार नहीं जीता | बिल्कुल ?? पुरस्कार जीता | ?? पुरस्कार जीते }} है|',
	time: '{value:Date|simpleTime}',
	date: '{value:Date|simpleDate}',
	currency: '{value:number|simpleCurrency}'
} satisfies BaseTranslation;

export default hi;
