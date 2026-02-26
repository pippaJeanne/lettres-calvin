import { j as json } from "../../../../chunks/index.js";
import { b as base } from "../../../../chunks/paths.js";
import { p as persons_es, a as persons } from "../../../../chunks/persons_es.js";
import { f as fr_es } from "../../../../chunks/fr_es.js";
const GET = async ({ params, fetch }) => {
  const res = await fetch("/api");
  const dataLetter = await res.json();
  let lang = params.lang;
  let t = fr_es[lang] || fr_es.fr;
  if (lang === "fr") {
    const dataLetters = [];
    Object.keys(dataLetter).map((key) => {
      if (key !== "cartas") {
        let letter = dataLetter[key];
        letter["slug"] = "fr/lettres/" + key;
        dataLetters.push(letter);
      }
    });
    const files = Object.entries(/* @__PURE__ */ Object.assign({ "/src/lib/data/md/a_propos.md": () => import("../../../../chunks/a_propos.js"), "/src/lib/data/md/carte.md": () => import("../../../../chunks/carte.js"), "/src/lib/data/md/mentionsLegales.md": () => import("../../../../chunks/mentionsLegales.js"), "/src/lib/data/md/preface_JulesBonnet.md": () => import("../../../../chunks/preface_JulesBonnet.js"), "/src/lib/data/md/recherche.md": () => import("../../../../chunks/recherche.js"), "/src/lib/data/md/vie_ouvres.md": () => import("../../../../chunks/vie_ouvres.js") }));
    const result = await Promise.all(
      files.map(async ([path, resolver]) => {
        const md = await resolver();
        let newslug = path.split("/");
        let slug = "fr/" + newslug[newslug.length - 1].replace(".md", "");
        const { title } = md.metadata;
        const content = md.default.render();
        const text2 = content.html.replaceAll(/<\W\w*>|<\w*\W*\s*\S*>|<[\w*\W*\s*\S*]{0,}>/gm, "");
        return {
          slug,
          title,
          text: text2
        };
      })
    );
    for (let post of result) {
      dataLetters.push(post);
    }
    let arr = [];
    for (let person of persons_es) {
      let name = person.name;
      let desc = person.desc;
      arr.push(`${name} ${desc}`);
    }
    const text = arr.join(" \n");
    const persIndex = {
      slug: `${base}fr/index_noms`,
      title: t.name_index,
      text
    };
    const timeline = {
      slug: `${base}fr/frise`,
      title: t.timeline_text,
      text: t.timeline_text
    };
    dataLetters.push(persIndex);
    dataLetters.push(timeline);
    return json(dataLetters);
  }
  if (lang === "es") {
    const dataLettersEs = [];
    Object.keys(dataLetter["cartas"]).map((key) => {
      let carta = dataLetter["cartas"][key];
      carta["slug"] = "es/cartas/" + dataLetter["cartas"][key]["slug"];
      dataLettersEs.push(carta);
    });
    const files = Object.entries(/* @__PURE__ */ Object.assign({ "/src/lib/data/mdes/a_propos.md": () => import("../../../../chunks/a_propos2.js"), "/src/lib/data/mdes/carte.md": () => import("../../../../chunks/carte2.js"), "/src/lib/data/mdes/mentionsLegales.md": () => import("../../../../chunks/mentionsLegales2.js"), "/src/lib/data/mdes/preface_JulesBonnet.md": () => import("../../../../chunks/preface_JulesBonnet2.js"), "/src/lib/data/mdes/recherche.md": () => import("../../../../chunks/recherche2.js"), "/src/lib/data/mdes/vie_ouvres.md": () => import("../../../../chunks/vie_ouvres2.js") }));
    const result = await Promise.all(
      files.map(async ([path, resolver]) => {
        const md = await resolver();
        let newslug = path.split("/");
        let slug = "es/" + newslug[newslug.length - 1].replace(".md", "");
        const { title } = md.metadata;
        const content = md.default.render();
        const text2 = content.html.replaceAll(/<\W\w*>|<\w*\W*\s*\S*>|<[\w*\W*\s*\S*]{0,}>/gm, "");
        return {
          slug,
          title,
          text: text2
        };
      })
    );
    for (let post of result) {
      dataLettersEs.push(post);
    }
    let arr = [];
    for (let person of persons) {
      let name = person.name;
      let desc = person.desc;
      arr.push(`${name} ${desc}`);
    }
    const text = arr.join(" \n");
    const persIndex = {
      slug: `${base}es/index_noms`,
      title: t.name_index,
      text
    };
    const timeline = {
      slug: `${base}es/frise`,
      title: t.timeline_text,
      text: t.timeline_text
    };
    dataLettersEs.push(persIndex);
    dataLettersEs.push(timeline);
    return json(dataLettersEs);
  }
};
export {
  GET
};
