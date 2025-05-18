import fs from 'fs/promises';
import path from 'path';

export const GET = async ({params, fetch}) => {
  const filename = params.filename;
  let xmlDir;
  //let xmldires;

  const res = await fetch('/api');
  const data = await res.json(); 
  //console.log(data)
  const fr = Object.keys(data).map(d => {
    //console.log(data[d]["url"])
     if (d !== "cartas") {
      return data[d]["url"]
    }})
  const es = Object.keys(data["cartas"]).map(d => {
      return data["cartas"][d]["url"]
    })
  //console.log(es)
  if (fr.includes(filename)){
     xmlDir = path.resolve('src/lib/xml');
  } 
  if (es.includes(filename)){
    xmlDir = path.resolve('src/lib/xmles');
 }

  const filePath = path.join(xmlDir, filename);
 //console.log(filePath)
  try {
    const fileContent = await fs.readFile(filePath);

    return new Response(fileContent, {
      headers: {
        'Content-Type': 'application/xml',
        'Content-Disposition': `attachment; filename="${filename}"`
      }
    });
  } catch (err) {
    return new Response('File not found', { status: 404 });
  }
};
