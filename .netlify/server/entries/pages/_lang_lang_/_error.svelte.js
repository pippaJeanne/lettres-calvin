import { c as create_ssr_component, s as subscribe, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                    */
import { f as fr_es } from "../../../chunks/fr_es.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lang;
  let t;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  lang = $page.params.lang;
  t = fr_es[lang] || fr_es.fr;
  $$unsubscribe_page();
  return `<div id="error"><h1 id="404error">${escape(t.m_error)}</h1> <img id="calvinpic" src="${escape(base, true) + "/CalvinErrpgok.png"}" alt="Calvin confus"></div>`;
});
export {
  Error as default
};
