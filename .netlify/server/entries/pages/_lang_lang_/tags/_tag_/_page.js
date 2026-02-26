const load = async ({ fetch, params }) => {
  const { tag } = params;
  const lang = params.lang;
  const response = await fetch(`/api`);
  const lettres = await response.json();
  function forEs(tag2) {
    let taglist;
    let letters = [];
    let letters_id;
    Object.keys(lettres).map((key) => {
      if (key !== "cartas") {
        let slug = "";
        taglist = lettres[key].tags;
        taglist.filter((w) => {
          slug = w.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          if (slug === tag2) {
            letters.push({
              slug: key,
              id: lettres[key].id,
              tag_index: taglist.indexOf(w)
            });
            letters_id = {
              slug_tag: tag2
            };
          }
        });
      }
    });
    letters_id["letters"] = letters;
    return letters_id;
  }
  if (lang === "fr") {
    let tagname;
    const letters = [];
    let taglist;
    Object.keys(lettres).map((key) => {
      if (key !== "cartas") {
        let slug = "";
        taglist = lettres[key].tags;
        taglist.filter((w) => {
          slug = w.replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          if (slug === tag) {
            tagname = { tag: w, slug: tag };
            letters.push(key);
          }
        });
      }
    });
    tagname["letters"] = letters;
    const l = lettres;
    return {
      tagname,
      l
    };
  }
  if (lang === "es") {
    let tagname;
    const letters = [];
    let taglist;
    lettres["cartas"].map((d) => {
      let info = forEs(tag);
      taglist = d.tags;
      taglist.filter((w, index) => {
        info.letters.map((i) => {
          if (tag === info.slug_tag && index === i.tag_index && i.id === d.source) {
            tagname = { tag: w, slug: tag };
            if (letters.indexOf(d.slug) === -1) {
              letters.push(d.slug);
            }
          }
        });
      });
    });
    tagname["letters"] = letters;
    let l = [];
    lettres["cartas"].map((obj) => {
      l[obj.slug] = obj;
    });
    return {
      tagname,
      l
    };
  }
};
export {
  load
};
