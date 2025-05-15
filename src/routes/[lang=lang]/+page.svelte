<script>
	//import Index from '$lib/components/Index.svelte';
	import '$lib/style.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	export let data;
	import { fr_es } from '$lib/fr_es';
	import {events, era} from '$lib/biblRep/data_timeline.json';
	import {events_es, era_es} from '$lib/biblRep/data_timeline_es.json';
	import {transc} from '$lib/biblRep/transcriptions.json';
	const slugslist = Object.keys(transc)
	// Check for language
	const lang = $page.params.lang;
  	const t = fr_es[lang] || fr_es.fr;
	//$: rightSlug = lang === "fr" ? "lettres" : "cartas";
	export const letters = data.lettres;
	export const cartas = data.lettres["cartas"];
	export let slugs = [];
	Object.keys(letters).map(key => {
		if (key !== "cartas"){
		slugs.push(key)
		}
	});
	// to determine the letters with transcriptions
	let transcs = {};
	slugslist.map(slug => {
		slugs.map(slugOk =>{
    if (slugslist.indexOf(slugOk)!== -1){
      if(slug === slugOk){
		transcs[slug] = letters[slug]
	  }
    }})
  })
	// for tags cloud plugin (change for tags)

	let tags = [];
	for (let slug of slugs){
		tags.push(letters[slug].tags);
	}
	let tagslist = [];
	for (let tag of tags){
		for (let t of tag){
			if (tagslist.indexOf(t) === -1){
				tagslist.push(t);
			}
		} }

	let cats = [];
	for (let slug of slugs){
		cats.push(letters[slug].categories);
	}
	let catslist = [];
	for (let cat of cats){
		for (let c of cat){
			if (catslist.indexOf(c) === -1){
				catslist.push(c);
			}
		} }

// Arranging tags (themes) so the right one matches the right slug
let tags_es = {};
	cartas.map(d =>{
		slugs.map(s => {
		let obj= {};
		if (d.source === letters[s].id){
		letters[s].tags.map((w, index) =>{
			let slug = w.toLowerCase().replaceAll(' ', '-').replaceAll("é",'e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a')
			
			d.tags.map((tag, i) => {
			if (letters[s].tags.length === d.tags.length && i === index){
				obj = {slug : slug, tag: tag}
				tags_es[slug] = obj
			//if(check === obj["slug"]){tags_es.push(obj)}
		}
		})
	  })  }  
	})
})
//console.log(tags_es.length, tags_es )

// Arranging tags (themes) so the right one matches the right slug
let cats_es = []
	cartas.map(d =>{
			let obj;
		slugs.map(s => {
		if (d.source === letters[s].id){
		letters[s].categories.map((c, index) =>{
			let slug = c.toLowerCase().replaceAll(' ', '-').replaceAll("é",'e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a')
			
			d.categories.map((cat, i) => {
			if (letters[s].categories.length === d.categories.length && i === index){
				obj = {slug : slug, cat : cat }
		}
		})
		if(cats_es.indexOf(obj)=== -1){cats_es.push(obj)}
		})
	  }	})
	})

export const tagsL = [];
export const catsL = [];
if (lang==="fr"){
	for (let tag of tagslist){
		let n = 0;
		let tagobj = {};
	  for (let slug of slugs){
		if (letters[slug].tags.indexOf(tag)!== -1){
			let slug = tag.toLowerCase().replaceAll(' ', '-').replaceAll("é",'e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a')
			n += 1 ;
			tagobj = {
				name : tag,
				slug : slug,
				n : n
			};
		}
	  }
	  tagsL.push(tagobj)
	}
	
	for (let cat of catslist){
		let n = 0;
		let catobj = {};
	  for (let slug of slugs){
		if (letters[slug].categories.indexOf(cat)!== -1){
			n += 1 ;
			catobj = {
				name : cat,
				n : n
			};
		}
	  }
	  catsL.push(catobj)
	}
}
if (lang==="es"){
	Object.keys(tags_es).map(tag => {
		//console.log(tags_es[tag].tag)
		let n = 0;
		let tagobj = {};
	  for (let c of cartas) {
		if (c.tags.indexOf(tags_es[tag].tag)!== -1){
			n += 1
			tagobj = {
				name : tags_es[tag].tag,
				slug: tags_es[tag].slug,
				n : n
			};
		}
	  }
	 if (!tagsL.includes(tagobj)){tagsL.push(tagobj)}
	})

	for (let cat of cats_es){
		let n = 0;
		let catobj = {};
		cartas.map(slug =>{
		if (slug.categories.indexOf(cat.cat)!== -1){
			n += 1 ;
			catobj = {
				name : cat.cat,
				slug : cat.slug,
				n : n
			};
		}
	  })
	  catsL.push(catobj)
	}	
} 
//console.log(tagsL)	
//console.log(catsL)

export function tline_data(){
    if (lang === "fr"){
  const timeline = {
    events : events,
    era : era
} 
return timeline
} else if (lang === "es"){
  const timeline = {
    events : events_es,
    era : era_es
}
return timeline
}	
}
// To load timeline functions and css
function loadTimelineAssets() {
    const loadScript = src => new Promise((resolve, reject) => {
      if (window.TL) return resolve(); // Already loaded
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

    const loadCSS = href => new Promise((resolve, reject) => {
      if (document.querySelector(`link[href="${href}"]`)) return resolve();
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });

    return Promise.all([
      loadCSS('https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css'),
      loadScript('https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js')
    ]);
  }
//console.log(tline_data())
onMount(async ()=> {
	await loadTimelineAssets();
// Create a new timeline instance
window.timeline = new TL.Timeline('timeline-embed', tline_data());

	let links = document.getElementsByClassName("tag");
	let categ = document.getElementsByClassName("categ");
	for (let link of links){
		for (let tag of tagsL){
			if(link.textContent === tag.name){
				link.setAttribute("style", "font-size : 1." + tag.n + "rem")  
			}
		}
	}
	for (let c of categ){
		for (let cat of catsL){
			if(c.textContent === cat.name){
				c.innerHTML += ` <span class="n">[${cat.n}]</span>`  
			}
		}
	}
	
})
</script> 

<svelte:head>
<title>{t.home}</title>    
<!--<link title="timeline-styles" rel="stylesheet" 
              href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">
<script src='https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js'></script>-->
</svelte:head>

<!-- Timeline -->
<div id='timeline-embed' style="width: 100%; height: 65vh;z-index:3"></div>

<article style="margin-top: 0 !important;">
<div style="text-align:center">
	<p>{t.txt_ppt}</p>
	<p style="color:green;">{t.txt_temp}</p>
	<p style="text-align:center!important"><a href="/{lang}/a_propos">{t.savoirplus}</a></p>
</div>

<hr style="margin: 1rem 15rem;"/>
<!-- Transversal Indexes-->
<div class="mainIndex">
	<ul><h3>{t.ppt_index}</h3>
	<li><a href="/{lang}/index_noms">{t.names}</a></li>
	<li><a href="/{lang}/carte">{t.places}</a></li>
	</ul>
</div>

<div class="index">
	<div class="nuage">
	<h2>{t.tag_cloud}</h2>
	<ul class="taglist">
		{#each tagsL as tag}
			<li class="tagplugin">
				<a class="tag" href="./{lang}/tags/{tag.slug}">
				{tag.name}
				</a>
			</li>
		{/each}
	</ul> 
	</div>

	<div class="nuage">
		<h2>{t.categories}</h2>
		<ul class="cats"> <p>{t.cat_nature} :</p>
				<li><a class="categ" href="./{lang}/categories/copie">{t.copy} 
					</a>
				</li>
				<li><a class="categ" href="./{lang}/categories/orig-autographe">{t.orig_autograph} 
					</a>
				</li>
				<li><a class="categ" href="./{lang}/categories/minute-originale">{t.minute_orig}
					</a>
				</li>
				<li><a class="categ" href="./{lang}/categories/minute-autographe">{t.minute_autog} 
				</a>
			</li>
				<li><a class="categ" href="./{lang}/categories/original">{t.orig}
					</a>
				</li>
		</ul> 
		<ul class="cats"> <p>{t.cat_recipient} :</p>
			<li><a class="categ" href="./{lang}/categories/individu">{t.individual} 
				</a>
			</li>
			<li><a class="categ" href="./{lang}/categories/collectivite">{t.group} 
				</a>
			</li>
	</ul> 
	<ul class="cats"><p>{t.cat_signature} :</p>
		<li><a class="categ" href="./{lang}/categories/signee-par-plusieurs">{t.signed_many} 
			</a>
		</li>
		<li><a class="categ" href="./{lang}/categories/sous-pseudonyme">{t.pseudonym} 
			</a>
		</li>
		<li>
			<a class="categ" href="./{lang}/categories/sans-signature">{t.no_signature}
			</a>
		</li>
	</ul> 
		</div>
</div>
{#if lang === "fr"}
<div class="nuage">
	<h2>Sélection de transcriptions de l'écriture de Jean Calvin</h2>
	<ul class="taglist">
		{#each slugslist  as slug}
			<li class="tagplugin">
				<a class="tag" href="./transcription/{slug}">
				{transcs[slug].title}
				</a>
			</li>
		{/each}
	</ul> 
	</div>
	{/if}
	
	<p style="color:slategrey;">{t.misajour}</p>
</article>
<style>
.index{
	display: flex;
}
.mainIndex{
	margin:2rem 15rem;
}
	ul {
		list-style: none;
		padding: 0;
	}
	li{
		list-style: none; 
		margin:.5rem .5rem .5rem 1rem ;
	}
	a {
		text-decoration: none;
	}
	.tagplugin{
    display: inline-block;
    margin: .4rem .8rem;
    border-radius: 4px;
    /* border: solid #eeee 1px; */
}
.cats li {
	text-align: justify;
}
	article{
		display:block;
	}
	.taglist{
			margin: .5rem;
			padding: .3rem;}
	.nuage{
    padding: 2rem 6rem;
    width: 100%;
    border-left: solid #eeee 1px;
    text-align: center;
}
	@media screen and (max-width:800px){
		.index{flex-direction: column;}
		.nuage{
    padding: 2rem 1rem;}
		.nuage{border-top: solid #eeee 1px;
		border-bottom:none ;}
		.mainIndex{
	margin:1rem 2rem;
}
	}
</style>