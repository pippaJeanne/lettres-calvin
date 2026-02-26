const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function load({ params }) {
  if (params.lang === "fr") {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/data/md/a_propos.md": () => import("../../../../chunks/a_propos.js"), "../../../lib/data/md/carte.md": () => import("../../../../chunks/carte.js"), "../../../lib/data/md/mentionsLegales.md": () => import("../../../../chunks/mentionsLegales.js"), "../../../lib/data/md/preface_JulesBonnet.md": () => import("../../../../chunks/preface_JulesBonnet.js"), "../../../lib/data/md/recherche.md": () => import("../../../../chunks/recherche.js"), "../../../lib/data/md/vie_ouvres.md": () => import("../../../../chunks/vie_ouvres.js") }), `../../../lib/data/md/${params.slug}.md`, 7);
    const { title } = post.metadata;
    const content = post.default;
    return {
      content,
      title
      //tags,
      //script,
      //description
    };
  } else if (params.lang === "es") {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/data/mdes/a_propos.md": () => import("../../../../chunks/a_propos2.js"), "../../../lib/data/mdes/carte.md": () => import("../../../../chunks/carte2.js"), "../../../lib/data/mdes/mentionsLegales.md": () => import("../../../../chunks/mentionsLegales2.js"), "../../../lib/data/mdes/preface_JulesBonnet.md": () => import("../../../../chunks/preface_JulesBonnet2.js"), "../../../lib/data/mdes/recherche.md": () => import("../../../../chunks/recherche2.js"), "../../../lib/data/mdes/vie_ouvres.md": () => import("../../../../chunks/vie_ouvres2.js") }), `../../../lib/data/mdes/${params.slug}.md`, 7);
    const { title } = post.metadata;
    const content = post.default;
    return {
      content,
      title
      //tags,
      //script,
      //description
    };
  }
}
export {
  load
};
