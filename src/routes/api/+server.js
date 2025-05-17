//import { fetchData } from '$lib/utils';
import fs from 'node:fs';
//import path from 'path';
//import { json } from '@sveltejs/kit';

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
	
	//const pathdirfr = path.resolve('static/xml');
	//const pathdires = path.resolve('static/xmles');


	let xmlFiles = getFiles("static/xml");
	let esFiles = getFiles("static/xmles");
	const fileList = {xmlFiles, esFiles}
	//console.log({xmlFiles, esFiles})
	return new Response(JSON.stringify(fileList), {
		headers: { 'Content-Type': 'application/json' }
	});
};
