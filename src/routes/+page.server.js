import { redirect } from "@sveltejs/kit";

const knownLanguages = ["fr", "es"];

export const load = ({ cookies }) => {
	let lang = cookies.get('lang')
    
	if (!knownLanguages.includes(lang) || lang === undefined) {
		lang = "fr" // default language
	  } 
    throw redirect(307, `/${lang}`);
};