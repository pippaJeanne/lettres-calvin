/*import fs from 'fs/promises';
import path from 'path';

export const GET = async ({params, fetch}) => {
  const filename = params.filename;
  let xmlDir;
  

  const res = await fetch('/api');
  const data = await res.json(); 
  
  const fr = Object.keys(data).map(d => {
    
     if (d !== "cartas") {
      return data[d]["url"]
    }})
  const es = Object.keys(data["cartas"]).map(d => {
      return data["cartas"][d]["url"]
    })
  
  if (fr.includes(filename)){
     xmlDir = path.resolve('src/lib/xml');
  } 
  if (es.includes(filename)){
    xmlDir = path.resolve('src/lib/xmles');
 }

  const filePath = path.join(xmlDir, filename);
 
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
};*/
