//Script to retrieve blobs, read them and organize them in a single doc to commit to Git repo for archiving
// run following commented lines on terminal to load env variables and run script
/* export $(grep -v '^#' .env | xargs)
   node pdf_choicesBlobs/retrieve_script.js */
import { getStore } from '@netlify/blobs'
const SITE_ID = process.env.MY_SITE_ID;
const TOKEN = process.env.MY_BLOBS_TOKEN;
const STORE = "pdf-choices";

const store = getStore({
  fetch,
  name: STORE,
  siteID: SITE_ID,
  token :TOKEN
})


async function run() {
  const {blobs} = await store.list();
  console.log(blobs)
  const entries = [];

  for (const blob of blobs) {
    //console.log(blob.key)
    if (blob.key && blob.key !== undefined) {
      const content = await store.get(blob.key, {type:'json'});
    //console.log(content)
    entries.push(content);
  }
  }

  const snapshot = {
    exportedAt: new Date().toISOString(),
    count: entries.length,
    entries
  };
  console.log(snapshot)

  await import('fs/promises').then(fs =>
    fs.writeFile(
      `pdf_choicesBlobs/logs/snapshot-${Date.now()}.json`,
      JSON.stringify(snapshot, null, 2)
    )
  );

  console.log("Snapshot written.");
}

run();