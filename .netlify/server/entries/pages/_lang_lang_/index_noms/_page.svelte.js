import { c as create_ssr_component, b as add_attribute, e as escape, a as each, s as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { b as base } from "../../../../chunks/paths.js";
import { a as persons, p as persons_es } from "../../../../chunks/persons_es.js";
import { p as page } from "../../../../chunks/stores.js";
import { f as fr_es } from "../../../../chunks/fr_es.js";
const css = {
  code: ".name-card.svelte-quhxko p.svelte-quhxko{text-align:justify !important}.centre.svelte-quhxko.svelte-quhxko{text-align:center}figure.svelte-quhxko img.svelte-quhxko{width:70%;justify-content:center;margin-left:15% !important;padding:.5rem !important}.corps.svelte-quhxko.svelte-quhxko{display:block;padding:0  .5rem}.mdc-typography--body1.svelte-quhxko.svelte-quhxko{padding:1rem\n		}ul.svelte-quhxko.svelte-quhxko{padding-left:0}li.svelte-quhxko.svelte-quhxko{list-style:none}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { thumbnail } = $$props;
  let { id } = $$props;
  let { letters } = $$props;
  let { lettres } = $$props;
  let { portrait_text } = $$props;
  let { href_letters } = $$props;
  let { wikiurl } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0) $$bindings.thumbnail(thumbnail);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.letters === void 0 && $$bindings.letters && letters !== void 0) $$bindings.letters(letters);
  if ($$props.lettres === void 0 && $$bindings.lettres && lettres !== void 0) $$bindings.lettres(lettres);
  if ($$props.portrait_text === void 0 && $$bindings.portrait_text && portrait_text !== void 0) $$bindings.portrait_text(portrait_text);
  if ($$props.href_letters === void 0 && $$bindings.href_letters && href_letters !== void 0) $$bindings.href_letters(href_letters);
  if ($$props.wikiurl === void 0 && $$bindings.wikiurl && wikiurl !== void 0) $$bindings.wikiurl(wikiurl);
  $$result.css.add(css);
  return `<link href="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.css" rel="stylesheet"> <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">  <div${add_attribute("id", id, 0)} class="name-card mdc-card mdc-elevation--z4 svelte-quhxko"><div class="mdc-card__ripple"></div> <div class="lettre-card__title mdc-typography--headline6 centre svelte-quhxko"><a${add_attribute("href", wikiurl, 0)}>${escape(name)}</a></div> <div class="lettre-card__secondary--body mdc-typography--caption corps svelte-quhxko">${thumbnail !== "" ? `<figure class="svelte-quhxko"><img${add_attribute("src", thumbnail, 0)} alt="${escape(portrait_text, true) + " " + escape(name, true)}" class="svelte-quhxko"> </figure>` : ``} <p class="mdc-typography--body1 svelte-quhxko">${slots.default ? slots.default({}) : ``}</p></div> <div class="mdc-deprecated-list-divider--inset-trailing mdc-deprecated-list-divider" style="margin-left: 16px; margin-right: 0; width: calc(100% - 32px); margin-bottom:8px;"></div> <div class="lettre-card__subtitle mdc-typography--subtitle1 centre svelte-quhxko"><strong>${escape(lettres)}</strong> <ul class="svelte-quhxko">${each(letters, (letter) => {
    return `<li class="svelte-quhxko"><a href="${escape(base, true) + "/" + escape(href_letters, true) + "/" + escape(letter.slug, true)}" class="mdc-typography--body2" style="text-align:center">${escape(letter.headline)} - ${escape(letter.date)} </a></li>`;
  })}</ul></div></div> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let lang = $page.params.lang;
  let t = fr_es[lang] || fr_es.fr;
  function personsIndex() {
    if (lang === "fr") {
      const pers = persons;
      return pers;
    } else if (lang === "es") {
      const pers = persons_es;
      return pers;
    }
  }
  let { persons_list = personsIndex() } = $$props;
  if ($$props.personsIndex === void 0 && $$bindings.personsIndex && personsIndex !== void 0) $$bindings.personsIndex(personsIndex);
  if ($$props.persons_list === void 0 && $$bindings.persons_list && persons_list !== void 0) $$bindings.persons_list(persons_list);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-2zdyz8_START -->${$$result.title = `<title>${escape(t.name_index)}</title>`, ""}<script src="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.js" data-svelte-h="svelte-17opwye"><\/script><!-- HEAD_svelte-2zdyz8_END -->`, ""} <article><h2 style="text-align:center;">${escape(t.name_index)}</h2> <div class="card-container">${each(persons_list, (name) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        name: name.name,
        id: name.id?.replace("#", ""),
        wikiurl: name.wikiurl,
        thumbnail: name.thumbnail,
        portrait_text: t.portrait_text,
        lettres: t.lettres,
        href_letters: t.href_letters,
        letters: name.letters
      },
      {},
      {
        default: () => {
          return `${escape(name.desc)}`;
        }
      }
    )}`;
  })}</div> <p>${escape(t.name_notes)}</p> <script type="text/javascript" data-svelte-h="svelte-1uoi4ga">/** Initialize MDC Web components. */
    // Instantiation
    window.mdc.autoInit();<\/script></article>`;
});
export {
  Page as default
};
