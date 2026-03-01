import { getStore } from '@netlify/blobs';
import type { Handler } from "@netlify/functions"

console.log("SITE ID:", process.env.NETLIFY_SITE_ID);
console.log("BLOBS TOKEN:", process.env.NETLIFY_BLOBS_TOKEN);

export const handler:Handler = async (event) => {
  const data = JSON.parse(event.body || "{}");
  const store = getStore('pdf-choices');

  const key = `${Date.now()}-${crypto.randomUUID()}`;
  await store.set(key, JSON.stringify(data));
console.log(key, data)
  return {
    statusCode:200,
    body: 'ok'
  };
}