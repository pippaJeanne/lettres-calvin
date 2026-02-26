const load = async ({ fetch, params }) => {
  const { category } = params;
  const lang = params.lang;
  const response = await fetch(`/api`);
  const lettres = await response.json();
  function forEs(categ) {
    let catlist;
    let letters = [];
    let letters_id;
    Object.keys(lettres).map((key) => {
      if (key !== "cartas") {
        let slug = "";
        catlist = lettres[key].categories;
        catlist.filter((cat) => {
          slug = cat.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          if (slug === categ) {
            letters.push({
              slug: key,
              id: lettres[key].id
            });
            letters_id = {
              cat_index: catlist.indexOf(cat),
              slug_cat: categ
            };
          }
        });
      }
    });
    letters_id["letters"] = letters;
    return letters_id;
  }
  if (lang === "fr") {
    let categorie;
    const letters = [];
    let catlist;
    Object.keys(lettres).map((key) => {
      if (key !== "cartas") {
        let slug = "";
        catlist = lettres[key].categories;
        catlist.filter((cat) => {
          slug = cat.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          if (slug == category) {
            categorie = { category: cat, slug: category };
            letters.push(key);
          }
        });
      }
    });
    categorie["letters"] = letters;
    const l = lettres;
    return {
      categorie,
      l
    };
  }
  if (lang === "es") {
    let categorie;
    const letters = [];
    let catlist;
    lettres["cartas"].map((d) => {
      let info = forEs(category);
      catlist = d.categories;
      catlist.filter((cat, index) => {
        info.letters.map((i) => {
          if (category === info.slug_cat && index === info.cat_index && i.id === d.source) {
            categorie = { category: cat, slug: category };
            if (letters.indexOf(d.slug) === -1) {
              letters.push(d.slug);
            }
          }
        });
      });
    });
    categorie["letters"] = letters;
    let l = [];
    lettres["cartas"].map((obj) => {
      l[obj.slug] = obj;
    });
    return {
      categorie,
      l
    };
  }
};
export {
  load
};
