import fs from 'node:fs';
import path from 'path';
import { json } from '@sveltejs/kit';
import * as jsdom from 'jsdom'
const { JSDOM } = jsdom;

export const GET = () => {
	// getFiles function from 'Get all files in a folder using Node Js' from the 'Learn with Param' blog
	  // Recursive function to get files
	function getFiles(dir, files = []) {
	  // Get an array of all files and directories in the passed directory using fs.readdirSync
	  const fileList = fs.readdirSync(dir)
	// Create the full path of the file/directory by concatenating the passed directory and file/directory name
	  for (const file of fileList) {
		const name = `${dir}/${file}`
	// Check if the current file/directory is a directory using fs.statSync
		if (fs.statSync(name).isDirectory()) {
		  // If it is a directory, recursively call the getFiles function with the directory path and the files array
		  getFiles(name, files)
		} else {
		  // If it is a file, push the full path to the files array
		  files.push(name)
		}
	  }
	  return files
	}
	
	const pathdirfr = path.resolve('src/lib/xml');
	const pathdires = path.resolve('src/lib/xmles');
  //console.log(pathdirfr, pathdires)

	let xmlfr = getFiles(pathdirfr);
	let xmles = getFiles(pathdires);
  //console.log(xmles, xmlfr)

	// You can return the lists directly or process them here
 /*return {xmlfr, xmles}
}
export async function servedata(){
  const list = await fetchData(fetch)
  const xmlfr = list.xmlfr
  const xmles = list.xmles */
let files = [];
let lettersData = [];
//let docs = [];
for (let file of xmlfr){
    //let path = file.replace('static',`${base}`);
    if (file.includes(".xml")){
    files.push(file)
    let d = fs.readFileSync(file, 'utf-8');
    let slug = file.replace(`${pathdirfr}/`,'').replace('.xml','');
    let parser = new JSDOM(d).window.document;
    let srcMss = parser.querySelector('msDesc')?.getElementsByTagName('facsimile')[0].getElementsByTagName('graphic');
    let tilesrcMs = [];
    if(srcMss !== undefined){
    for (let srcMs of srcMss){
        let src = srcMs.getAttribute('url');
        tilesrcMs.push(src)
    }}
    let srcBs = parser.querySelector('bibl')?.getElementsByTagName('facsimile')[0].getElementsByTagName('graphic');
    let tilesrcB = [];
    if(srcBs !== undefined){
    for (let srcB of srcBs){
        let src = srcB.getAttribute('url');
        tilesrcB.push(src)
    }}
    let signatures = parser.getElementsByTagName('signed');
    let signed = []
    if(signatures !== undefined){
    for (let sign of signatures){
        let diff = sign.textContent;
        let s = sign.getElementsByTagName('persName')[0]?.textContent;
        if (s !== undefined){
        signed.push(s)
        }else if (diff !== undefined){
          signed.push(diff)
        }
      }
    }
    
    let listItems = parser.querySelector("list[xml:id='tags']")?.getElementsByTagName('term');
    let tags = [];
    if(listItems !== undefined){
    for (let term of listItems){
        let tag = term.textContent;
        tags.push(tag)
    }}
    let text = "";
    let bodyarr = parser.querySelectorAll("*");
    for(let el of bodyarr){
        text += `${el.textContent} `;
    }
    let persons = [];
    let persarr = parser.querySelectorAll("persName");
    let keys = [];
    for(let pers of persarr){
      let name = pers.getAttribute("key");
      let ref = pers.getAttribute("ref");
      //let corresp = pers.getAttribute("corresp");
     if(name !== null && ref!==null){ //add same check for corresp
      keys.indexOf(name)===-1 ? keys.push(name) && persons.push({
        name:name,
        ref:ref
        //corresp : corresp
    }):null;
  }} 
    
    //console.log(persons)
    lettersData[slug] = {
        id: parser.getElementsByTagName('TEI')[0]?.getAttribute('xml:id'),
        url: file.replace(`${pathdirfr}/`,''),
        lang : parser.getElementsByTagName('TEI')[0]?.getAttribute('xml:lang'),
        title : parser.querySelectorAll('title')[0]?.textContent,
        desc : parser.querySelector('desc')?.textContent,
        date : parser.querySelectorAll("correspAction")[0]?.getElementsByTagName('date')[0]?.getAttribute('when'),
        person : parser.querySelector("correspAction[type='received']")?.getElementsByTagName('name')[0].textContent,
        destType : parser.querySelector("correspAction[type='received']")?.getElementsByTagName('name')[0]?.getAttribute('type'),
        place : parser.querySelector("correspAction[type='sent']")?.getElementsByTagName('settlement')[0].textContent,
        nature : parser.querySelector("label[type='nature']")?.textContent,
        editor: parser.querySelector("titleStmt")?.getElementsByTagName('editor')[0].textContent,
        bibliothequeMs: parser.querySelector("repository")?.textContent,
        bibliotheque: parser.querySelector('bibl')?.getElementsByTagName('title')[0].textContent,
        srcMs : tilesrcMs,
        srcB : tilesrcB,
        coteMs : parser.querySelector('idno')?.textContent,
        foliosB : parser.querySelector('facsimile[corresp]')?.getAttribute('corresp'),
        tags : tags,
       text : text 
    };
    let categories;
   if(signed.length > 1){
      let pseudonym = 'SIGNÉE PAR PLUSIEURS';
      categories = [lettersData[slug].destType?.toUpperCase(),lettersData[slug].nature?.toUpperCase(), pseudonym]
  }else if (signed.length === 1){ 
      if(!signed[0]?.toLowerCase().includes('calvin') && signed[0] !== "" ){
      let pseudonym = 'SOUS PSEUDONYME';
       categories = [lettersData[slug].destType?.toUpperCase(),lettersData[slug].nature?.toUpperCase(), pseudonym]
      }else if(signed[0] === ""){
        let pseudonym = 'SANS SIGNATURE';
        categories = [lettersData[slug].destType?.toUpperCase(),lettersData[slug].nature?.toUpperCase(), pseudonym]
      }else{
        categories = [lettersData[slug].destType?.toUpperCase(),lettersData[slug].nature?.toUpperCase()]
      }
    }

    lettersData[slug].categories = categories;
}}


// For the Spanish translations
//let esFiles = getFiles('static/xmles');
let filesEs = [];
let lettersDataEs = [];
//let docs = [];
for (let file of xmles){
    //let path = file.replace('static',`${base}`);
    if (file.includes(".xml")){
    filesEs.push(file)
    let d = fs.readFileSync(file, 'utf-8');
    let slugEs = file.replace(`${pathdires}/`,'').replace('.xml','');
    let parser = new JSDOM(d).window.document;
    //let srcMss = parser.querySelector('msDesc')?.getElementsByTagName('facsimile')[0].getElementsByTagName('graphic');
   /*  let tilesrcMs = [];
    if(srcMss !== undefined){
    for (let srcMs of srcMss){
        let src = srcMs.getAttribute('url');
        tilesrcMs.push(src)
    }}
    let srcBs = parser.querySelector('bibl')?.getElementsByTagName('facsimile')[0].getElementsByTagName('graphic');
    let tilesrcB = [];
    if(srcBs !== undefined){
    for (let srcB of srcBs){
        let src = srcB.getAttribute('url');
        tilesrcB.push(src)
    }}*/
    let signaturesEs = parser.getElementsByTagName('signed');
    let signedEs = []
    if(signaturesEs !== undefined){
    for (let sign of signaturesEs){
        let diff = sign.textContent;
        let s = sign.getElementsByTagName('persName')[0]?.textContent;
        if (s !== undefined){
        signedEs.push(s)
        }else if (diff !== undefined){
          signedEs.push(diff)
        }
      }
    }
    
    let listItemsEs = parser.querySelector("list[xml:id='tags']")?.getElementsByTagName('term');
    let tagsEs = [];
    if(listItemsEs !== undefined){
    for (let term of listItemsEs){
        let tag = term.textContent;
        tagsEs.push(tag)
    }}
    let textEs = "";
    let bodyarrEs = parser.querySelectorAll("*");
    for(let el of bodyarrEs){
        textEs += `${el.textContent} `;
    }
    let personsEs = [];
    let persarrEs = parser.querySelectorAll("persName");
    let keysEs = [];
    for(let pers of persarrEs){
      let name = pers.getAttribute("key");
      let ref = pers.getAttribute("ref");
      //let corresp = pers.getAttribute("corresp");
     if(name !== null && ref!==null){ //add same check for corresp
      keysEs.indexOf(name)===-1 ? keysEs.push(name) && personsEs.push({
        name:name,
        ref:ref
        //corresp : corresp
    }):null;
  }} 
    
    //console.log(persons)
    let carta = {
        slug: slugEs,
        url: file.replace(`${pathdires}/`,''),
        lang : parser.getElementsByTagName('TEI')[0]?.getAttribute('xml:lang'),
        title : parser.querySelectorAll('title')[0]?.textContent,
        desc : parser.querySelector('desc')?.textContent,
        date : parser.querySelectorAll("correspAction")[0]?.getElementsByTagName('date')[0]?.getAttribute('when'),
        person : parser.querySelector("correspAction[type='received']")?.getElementsByTagName('name')[0].textContent,
        destType : parser.querySelector("correspAction[type='received']")?.getElementsByTagName('name')[0]?.getAttribute('type'),
        place : parser.querySelector("correspAction[type='sent']")?.getElementsByTagName('settlement')[0].textContent,
        nature : parser.querySelector("label[type='nature']")?.textContent,
        editor: parser.querySelector("titleStmt")?.getElementsByTagName('editor')[0].textContent,
        source: parser.querySelector("sourceDesc")?.getAttribute("corresp"),
        //bibliothequeMs: parser.querySelector("repository")?.textContent,
        //bibliotheque: parser.querySelector('bibl')?.getElementsByTagName('title')[0].textContent,
        //srcMs : tilesrcMs,
        //srcB : tilesrcB,
        //coteMs : parser.querySelector('idno')?.textContent,
        //foliosB : parser.querySelector('facsimile[corresp]')?.getAttribute('corresp'),
        tags : tagsEs,
       text : textEs 
    };
    let categories;
   if(signedEs.length > 1){
      let pseudonym = 'FIRMADA POR VARIOS';
      categories = [carta.destType?.toUpperCase(),carta.nature?.toUpperCase(), pseudonym]
  }else if (signedEs.length === 1){ 
      if(!signedEs[0]?.toLowerCase().includes('calvin') && signedEs[0] !== "" ){
      let pseudonym = 'BAJO PSEUDÓNIMO';
       categories = [carta.destType?.toUpperCase(),carta.nature?.toUpperCase(), pseudonym]
      }else if(signedEs[0] === ""){
        let pseudonym = 'SIN FIRMA';
        categories = [carta.destType?.toUpperCase(),carta.nature?.toUpperCase(), pseudonym]
      }else{
        categories = [carta.destType?.toUpperCase(),carta.nature?.toUpperCase()]
      }
    }
      carta.categories = categories;
    lettersDataEs.push(carta);
}}

const data = {lettersDataEs, lettersData}
const chronologique = Object.keys(data.lettersData).map(d=>data.lettersData[d]);
	chronologique.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});

	const dataLetters ={};

	for (let letter of chronologique){
		Object.keys(data.lettersData).map(d =>{
            //console.log(d)
			if (data.lettersData[d] === letter){
		dataLetters[d] = letter
	}})}
	//console.log(dataLetters)
	const cartas = data.lettersDataEs;
	dataLetters["cartas"] = cartas
	//console.log(dataLetters)
	
    return json(dataLetters);

  //console.log(data)
	//return data;
};
