import { json } from '@sveltejs/kit'
//import { fetchData } from '$lib/utils';
import {base} from '$app/paths'
import {persons} from "$lib/biblRep/persons.json"
import {persons_es} from "$lib/biblRep/persons_es.json"
import { fr_es } from '$lib/fr_es';

export const GET = async ({params,fetch}) => {
	const res = await fetch('/api');
    const dataLetter = await res.json()
	let lang = params.lang;
	let t = fr_es[lang] || fr_es.fr;
 if (lang === "fr"){
	const dataLetters = [];
	Object.keys(dataLetter).map(key => {
		if (key !== "cartas"){
		let letter = dataLetter[key]
		 letter["slug"] = "fr/lettres/" + key
		dataLetters.push(letter)

	}});

	/*const chronologique = Object.keys(dataLetter.lettersData).map(d =>dataLetter.lettersData[d]);
	chronologique.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});

	const dataLetters = [];

	for (let letter of chronologique){
		Object.keys(dataLetter.lettersData).map(d =>{
			if (dataLetter.lettersData[d] === letter){
				letter["slug"] = "fr/lettres/" + d
		dataLetters.push(letter)
	}})}*/
	

	const files = Object.entries(import.meta.glob('$lib/data/md/*.md'));

	const result = await Promise.all(
		files.map(async ([path, resolver]) => {
			const md = await resolver();

			let newslug = path.split('/');
			let slug = "fr/" + newslug[newslug.length - 1].replace('.md', '');
			const { title } = md.metadata;
			const content = md.default.render();
			const text = content.html.replaceAll(/<\W\w*>|<\w*\W*\s*\S*>|<[\w*\W*\s*\S*]{0,}>/gm, "")
			

	return {
		slug,
		title,
		text
	};
})
	);
	for (let post of result){
		dataLetters.push(post)
	}
	let arr = [];
	for (let person of persons){
		let name = person.name;
		let desc = person.desc;
		arr.push(`${name} ${desc}`)
	}
	const text = arr.join(" \n")
	const persIndex = {
		slug : `${base}fr/index_noms`,
		title : t.name_index,
		text : text
	}
	const carte = {
		slug: `${base}fr/carte`,
		title : t.name_carte,
		text : "Carte interactive"
	}
	dataLetters.push(persIndex)
	dataLetters.push(carte)
	//console.log(dataLetters)
	return json(dataLetters)
	
};
// For Spanish interface
if (lang === "es"){

	const dataLettersEs = [];

	Object.keys(dataLetter["cartas"]).map(key => {
		let carta = dataLetter["cartas"][key]
		carta["slug"] = "es/cartas/" + dataLetter["cartas"][key]["slug"]
		dataLettersEs.push(carta)

	});

	/*const chronologique = Object.keys(dataLetter.lettersDataEs).map(d =>dataLetter.lettersDataEs[d]);
	//console.log(chronologique)
	chronologique.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});
	for (let letter of chronologique){
		Object.keys(dataLetter.lettersDataEs).map(d =>{
			if (dataLetter.lettersDataEs[d] === letter){
				letter["slug"] = "es/cartas/" + dataLetter.lettersDataEs[d]["slug"]
				dataLettersEs.push(letter)
	}})}*/


	

	const files = Object.entries(import.meta.glob('$lib/data/mdes/*.md'));

	const result = await Promise.all(
		files.map(async ([path, resolver]) => {
			const md = await resolver();

			let newslug = path.split('/');
			let slug = "es/" + newslug[newslug.length - 1].replace('.md', '');
			const { title } = md.metadata;
			const content = md.default.render();
			const text = content.html.replaceAll(/<\W\w*>|<\w*\W*\s*\S*>|<[\w*\W*\s*\S*]{0,}>/gm, "")
			

	return {
		slug,
		title,
		text
	};
})
	);
	for (let post of result){
		dataLettersEs.push(post)
	}
	let arr = [];
	for (let person of persons_es){
		let name = person.name;
		let desc = person.desc;
		arr.push(`${name} ${desc}`)
	}
	const text = arr.join(" \n")
	const persIndex = {
		slug : `${base}es/index_noms`,
		title : t.name_index,
		text : text
	}
	const carte = {
		slug: `${base}es/carte`,
		title : t.name_carte,
		text : "Mapa interactivo"
	}
	dataLettersEs.push(persIndex)
	dataLettersEs.push(carte)
	//console.log(dataLettersEs)
	return json(dataLettersEs)
};
}
