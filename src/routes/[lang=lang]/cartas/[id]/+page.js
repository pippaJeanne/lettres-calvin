/*import { fetchData } from '$lib/utils/index.js';

export async function load({fetch}) {
	const letters = await fetchData(fetch);
    //console.log(lettres)
	return {
		letters
	};
}
*/

export const load = async ({ fetch }) => {
	const response = await fetch(`/api`);
	const letters = await response.json();

	return {
		letters, 
	};
};