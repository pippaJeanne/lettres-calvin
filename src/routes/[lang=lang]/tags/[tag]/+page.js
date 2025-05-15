export const load = async ({ fetch, params }) => {
	const { tag } = params;
    const lang = params.lang;
	const response = await fetch(`/api`);
	const lettres = await response.json();
    // Info needed for the Spanish side to make it easier on routing when switching languages
  function forEs(tag) {
    let taglist;
    let letters = [];
    let letters_id;
    Object.keys(lettres).map(key => {
        if (key !== "cartas"){
        let slug = '';
        taglist = lettres[key].tags;
       taglist.filter((w) =>{ 
        slug = w.toLowerCase().replaceAll(' ', '-').replaceAll('é','e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a');
          if  (slug === tag) {
            letters.push({slug : key, 
                id: lettres[key].id,
                tag_index: taglist.indexOf(w)
            });
            letters_id = {
                slug_tag : tag, 
                }
        }
    });
}})
letters_id["letters"] = letters;
return letters_id
}

 // For French
    if (lang === "fr"){
    let tagname ;
    const letters = [];
    let taglist;
    Object.keys(lettres).map(key => {
        if (key !== "cartas"){
        let slug = '';
        taglist = lettres[key].tags;
       taglist.filter((w) =>{ 
        slug = w.replaceAll(' ', '-').replaceAll("é",'e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a');
          if  (slug === tag /*slug.includes(tag)*/) {
            tagname = {tag: w, slug : tag};
            letters.push(key);
            //console.log(letters)
        }
    });
        
    } })
   tagname['letters'] = letters;
    const l = lettres
	return {
		tagname,
        l
	};
};

// For Spanish
if (lang === "es"){
    let tagname ;
    const letters = [];
    let taglist;
    
    lettres["cartas"].map(d => {
        let info = forEs(tag)
        //console.log(info)
        taglist = d.tags;
        taglist.filter((w, index) =>{ 
        
        info.letters.map(i =>{
          if  (tag === info.slug_tag && index === i.tag_index && i.id === d.source) {
            tagname = {tag: w, slug : tag};
            if (letters.indexOf(d.slug)=== -1){ letters.push(d.slug);}
        }
        })
    });
})
    tagname['letters'] = letters;
    //console.log(tagname)
    let l = [];
     lettres["cartas"].map(obj => {
        l[obj.slug] = obj
     })
    //console.log(l);
	return {
		tagname,
        l
	};
};
}