

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.MO5r12k2.js","_app/immutable/chunks/scheduler.BMgH8iAm.js","_app/immutable/chunks/index.C47Sg0fV.js"];
export const stylesheets = [];
export const fonts = [];
