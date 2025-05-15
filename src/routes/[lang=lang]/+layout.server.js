//import { redirect } from "@sveltejs/kit";

//const knownLanguages = ["fr", "es"];

export const prerender = 'auto';
export const ssr = true;

export const load = async ({ fetch, params, url }) => {
	const response = await fetch(`/api`);
	const lettres = await response.json();
	
	/*if (!knownLanguages.includes(params.lang)) {
		throw redirect(307, `/fr${url.pathname.substring(3)}`);
	  }
*/
	return {
		lettres, 
	};
};