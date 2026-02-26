import { c as create_ssr_component, s as subscribe, e as escape, a as each, v as validate_component } from "../../../../../chunks/ssr.js";
import { b as base } from "../../../../../chunks/paths.js";
import { p as page } from "../../../../../chunks/stores.js";
import { I as Index } from "../../../../../chunks/Index2.js";
import { f as fr_es } from "../../../../../chunks/fr_es.js";
const css = {
  code: "a.card.svelte-1oi6j61{text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ready;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const lang = $page.params.lang;
  const t = fr_es[lang] || fr_es.fr;
  const rightSlug = lang === "fr" ? "lettres" : "cartas";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  ready = !!data?.categorie?.letters?.length;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1jgaqqj_START -->${data.categorie.letters.length ? `${$$result.title = `<title>${escape(t.category)} : ${escape(data.categorie.category)}</title>`, ""}` : ``}<!-- HEAD_svelte-1jgaqqj_END -->`, ""} <article>${ready ? ` <div><h2>${escape(t.category)} : ${escape(data.categorie.category)}</h2> <ul>${each(data.categorie.letters, (lettre) => {
    return `${data.l[lettre] ? `<a class="card svelte-1oi6j61" href="${escape(base, true) + "/" + escape(lang, true) + "/" + escape(rightSlug, true) + "/" + escape(lettre, true)}">${validate_component(Index, "Index").$$render(
      $$result,
      {
        title: data.l[lettre].title,
        date: data.l[lettre].date,
        catlist: data.l[lettre].categories,
        tags: data.l[lettre].tags
      },
      {},
      {
        default: () => {
          return `${escape(data.l[lettre].desc)}`;
        }
      }
    )} </a>` : ``}`;
  })}</ul></div>` : ``} </article>`;
});
export {
  Page as default
};
