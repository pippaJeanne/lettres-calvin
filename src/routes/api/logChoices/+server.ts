import { getStore } from '@netlify/blobs';
//import type { Context } from "@netlify/functions";
export const prerender = false;
export const config = {
  runtime: "nodejs"
};

export async function POST({ request }) {
  const data = await request.json();
  const store = getStore('pdf-choices');

  const key = `${Date.now()}-${crypto.randomUUID()}`;
  await store.set(key, JSON.stringify(data));
console.log(key, data)
  return new Response('ok');
}