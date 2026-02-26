import * as server from '../entries/pages/_lang_lang_/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_lang_lang_/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/[lang=lang]/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.DIgnBzBv.js","_app/immutable/chunks/scheduler.BMgH8iAm.js","_app/immutable/chunks/index.C47Sg0fV.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.Cm7sQLjm.js","_app/immutable/chunks/stores.B28PIfgH.js","_app/immutable/chunks/fr_es.D6gN5umb.js"];
export const stylesheets = ["_app/immutable/assets/2.BpuU5T3a.css","_app/immutable/assets/style.Dn3Xnpc1.css"];
export const fonts = [];
