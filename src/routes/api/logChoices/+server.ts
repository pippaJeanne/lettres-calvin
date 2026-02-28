import { getStore } from '@netlify/blobs';

export async function POST({ request }) {
  const data = await request.json();
  const store = getStore('pdf-choices');

  const key = `${Date.now()}-${crypto.randomUUID()}`;
  await store.set(key, JSON.stringify(data));

  return new Response('ok');
}