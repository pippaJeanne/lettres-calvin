import { fetchData } from '$lib/utils';
//import { json } from '@sveltejs/kit';

export const GET = async () => {
    const dataLetter = await fetchData();

	return dataLetter;

};