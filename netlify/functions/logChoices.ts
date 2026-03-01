import { getStore } from '@netlify/blobs';
import type { Handler } from "@netlify/functions"

export const handler:Handler = async (event) => {
  const data = JSON.parse(event.body || "{}");
  const store = getStore("pdf-choices");

  const key = `${Date.now()}-${crypto.randomUUID()}`;
  await store.set(key, JSON.stringify(data));
 console.log(key, data)
  return {
    statusCode:200,
    body: 'ok'
  };
}