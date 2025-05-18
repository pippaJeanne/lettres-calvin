/*import { fetchData } from '$lib/utils/index.js';

export async function load({fetch}) {
	const lettres = await fetchData(fetch);
    //console.log(lettres)
	return {
		lettres
	};
}*/

export const load = async ({ fetch }) => {
	const response = await fetch(`/api`);
	const lettres = await response.json();

	return {
		lettres, 
	};
};