import { fetchData } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
    const dataLetter = await fetchData();

	const chronologique = Object.keys(dataLetter.lettersData).map(d=>dataLetter.lettersData[d]);
	chronologique.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});

	const dataLetters ={};

	for (let letter of chronologique){
		Object.keys(dataLetter.lettersData).map(d =>{
			if (dataLetter.lettersData[d] === letter){
		dataLetters[d] = letter
	}})}
	
	const cartas = dataLetter.lettersDataEs;
	dataLetters["cartas"] = cartas
	//console.log(letters)
	return json(dataLetters);

};