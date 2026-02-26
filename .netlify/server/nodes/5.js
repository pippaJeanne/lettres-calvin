import * as server from '../entries/pages/_lang_lang_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.BxwGrmaa.js","_app/immutable/chunks/scheduler.BMgH8iAm.js","_app/immutable/chunks/index.C47Sg0fV.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/stores.B28PIfgH.js","_app/immutable/chunks/entry.Cm7sQLjm.js","_app/immutable/chunks/fr_es.D6gN5umb.js","_app/immutable/chunks/transcriptions.CRStSUn0.js"];
export const stylesheets = ["_app/immutable/assets/5.CoPTsNs8.css","_app/immutable/assets/style.Dn3Xnpc1.css"];
export const fonts = [];
