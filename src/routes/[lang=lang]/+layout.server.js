//import { redirect } from "@sveltejs/kit";
//const knownLanguages = ["fr", "es"];

//import { dataready } from '$lib/apiserve.js';
//import { fetchData } from '$lib/utils/index.js';

export const prerender = 'auto';
export const ssr = true;


/*export async function load({fetch}) {
	const lettres = await fetchData(fetch);
    //console.log(lettres)
	return {
		lettres
	};
}*/

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/data`);
	const lettres = await response.json();


	return {
		lettres, 
	};
};
