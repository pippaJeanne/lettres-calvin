//import { fetchData } from '$lib/utils/index.js';
export const load = async ({ fetch, params }) => {
	const { category } = params;
    const lang = params.lang;
    //console.log(lang)
    const response = await fetch(`/api/data`);
        const lettres = await response.json();
	
    //console.log("lettres keys:", Object.keys(lettres));
    //console.log("lettres['cartas'] length:", lettres["cartas"].length);
    
    // Info needed for the Spanish side to make it easier on routing when switching languages
  function forEs(categ) {
    let catlist;
    let letters = [];
    let letters_id;
    Object.keys(lettres).map(key => {
        if (key !== "cartas"){
        let slug = '';
        catlist = lettres[key].categories;
       catlist.filter((cat) =>{ 
        slug = cat.toLowerCase().replaceAll(' ', '-').replaceAll('é','e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a');
          if  (slug === categ) {
            letters.push({slug : key, 
                id: lettres[key].id
            });
            letters_id = {cat_index: catlist.indexOf(cat), 
                slug_cat : categ, 
                }
        }
    });
}})
letters_id["letters"] = letters;
return letters_id
}
//console.log(forEs(category))

 // For French
    if (lang === "fr"){
    let categorie ;
    const letters = [];
    let catlist;
    Object.keys(lettres).map(key => {
        if (key !== "cartas"){
        let slug = '';
        catlist = lettres[key].categories;
       catlist.filter((cat) =>{ 
        slug = cat.toLowerCase().replaceAll(' ', '-').replaceAll('é','e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a');
          if  (slug == category) {
            categorie = {category: cat, slug : category};
            letters.push(key);
        }
    });
}})
    categorie['letters'] = letters;
    const l = lettres;
    //console.log(categorie);
	return {
		categorie,
        l
	};
};

// For Spanish
if (lang === "es"){
    let categorie ;
    const letters = [];
    let catlist;
    
    lettres["cartas"].map(d => {
        let info = forEs(category)
        //console.log(info)
        catlist = d.categories;
       catlist.filter((cat, index) =>{ 
        
        info.letters.map(i =>{
          if  (category === info.slug_cat && index === info.cat_index && i.id === d.source) {
            categorie = {category: cat, slug : category};
            if (letters.indexOf(d.slug)=== -1){ letters.push(d.slug);}
        }
        })
    });
})
    categorie['letters'] = letters;
    let l = [];
     lettres["cartas"].map(obj => {
        l[obj.slug] = obj
     })
    //console.log(l);
	return {
		categorie,
        l
	};
};

}