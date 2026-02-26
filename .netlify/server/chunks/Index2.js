import { c as create_ssr_component, e as escape, a as each } from "./ssr.js";
const css = {
  code: ".card.svelte-69a8wb{border:1px solid #ccc;border-radius:8px;padding:16px;margin:16px}.tags.svelte-69a8wb{margin-top:8px}.tag.svelte-69a8wb{display:inline-block;padding:4px 8px;margin-right:4px;border-radius:4px;background-color:#eee}",
  map: null
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { date } = $$props;
  let { catlist } = $$props;
  let { tags } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.catlist === void 0 && $$bindings.catlist && catlist !== void 0) $$bindings.catlist(catlist);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
  $$result.css.add(css);
  return `<div class="card svelte-69a8wb"><h2>${escape(title)}</h2> <p>Date: ${escape(date)}</p> ${slots.default ? slots.default({}) : ``} <div class="tags svelte-69a8wb">${each(catlist, (cat) => {
    return `<span class="tag svelte-69a8wb">${escape(cat)}</span>`;
  })}</div> <div class="tags svelte-69a8wb">${each(tags, (tag) => {
    return `<span class="tag svelte-69a8wb">${escape(tag)}</span>`;
  })}</div> </div>`;
});
export {
  Index as I
};
