<script>
//import "$lib/pagedjs_css.css";
import "$lib/blog.css"
export let data;
import { fr_es } from '$lib/fr_es';
import { onMount } from 'svelte';
import { page } from '$app/stores';
import { base } from '$app/paths';
//import SaxonJS from "saxonjs-he";
import "$lib/toc-css.css";
import { createPostsIndex, searchPostsIndex } from '$lib/search';

export const lang = $page.params.lang;
const t = fr_es[lang] || fr_es.fr;
export const letters = data.lettres;

const pajedjsurl = "https://unpkg.com/pagedjs/dist/paged.polyfill.js";

export const lettres = [];
export const cartas = [];
export let filteredLetters = [];
export const letters2filter = [];
let natSrc = [];
let destinataires = [];
let sign = [];
let theme = [];
let origPlace = [];
let destPlace = [];

Object.keys(letters).map(key => {
		if (key !== "cartas"){
      letters[key]['slug'] = key;
		 lettres.push(letters[key])
		} 
  })

 const es_ = letters["cartas"];
 es_.forEach(carta => cartas.push(carta));

 // Filter by lang
 if (lang === 'fr'){
    lettres.map(l => letters2filter.push(l));
    
  }
  else if (lang === 'es'){
    cartas.map(l => {
      l["id"] = l.source;
      letters2filter.push(l);
    });
  }

 export let xsltfile;
 if (lang==='fr'){
    xsltfile = `${base}/xslt/pdfs.sef.json`;

    //Get filters options
    lettres.forEach(lettre => {
      let nature = lettre.nature;
     if (!natSrc.includes(nature.toUpperCase())){natSrc.push(nature.toUpperCase())};

     let signed = lettre.categories[2];
     if (!sign.includes(signed)){sign.push(signed)};

     let themes = lettre.tags;
     themes.forEach(t => {
      if (!theme.includes(t)){theme.push(t)};
     });

     let adressee = lettre.person;
     if (!destinataires.includes(adressee)){destinataires.push(adressee)};

     let origLieu = lettre.place;
     let o = origLieu.replace('[', '').replace(']', '');
     if (!origPlace.includes(o)){origPlace.push(o)};

     let destLieu = lettre.placeDest;
     let d = destLieu.replace('[', '').replace(']', '');
     if (!destPlace.includes(d)){destPlace.push(d)};
    }) 
    natSrc.sort(); 
    theme.sort();
    sign.sort();
    destinataires.sort();
    origPlace.sort();
    destPlace.sort();

  } else if (lang==='es'){
  xsltfile = `${base}/xslt/pdfs_es.sef.json`;
    //Get filters options
    cartas.forEach(carta => {
      let nature = carta.nature;
     if (!natSrc.includes(nature.toUpperCase())){natSrc.push(nature.toUpperCase())};

     let signed = carta.categories[2];
     if (!sign.includes(signed)){sign.push(signed)};

     let themes = carta.tags;
     themes.forEach(t => {
      if (!theme.includes(t)){theme.push(t)};
     });

     let adressee = carta.person;
     if (!destinataires.includes(adressee)){destinataires.push(adressee)};

     let origLieu = carta.place;
     let o = origLieu.replace('[', '').replace(']', '');
     if (!origPlace.includes(o)){origPlace.push(o)};

     let destLieu = carta.placeDest;
     let d = destLieu.replace('[', '').replace(']', '');
     if (!destPlace.includes(d)){destPlace.push(d)};
    })
    natSrc.sort(); 
    theme.sort();
    sign.sort();
    destinataires.sort();
    origPlace.sort();
    destPlace.sort();
};

let showPreview = false;
let selectedAll = "all"
let selectedFilter = "cross-filter";
let nochoice = "";
let searchFilter = ""
let resultsFilter = [];
let research = 'loading';
let finalChoices = {};
finalChoices['language'] = lang;


export async function generatepdf(){
  document.getElementById("tenor-gif-embed").style.display="block";
// add filter info to Note Statement page
let filter = document.getElementById('filter');
console.log(filter.value)
if (filter.value !== selectedAll){
  finalChoices['selection'] = {};
   let filter_info = document.createElement('div');
    let passed_filters = document.querySelectorAll('#cat_filters div:not(#recipient) select');
    let recipients_div = document.querySelector('#recipient select')
    let year_divs = document.querySelector('#period');
    let where = document.getElementById('noteStment');
    let h = document.createElement('strong');
     h.textContent = t.text_filtres;
     filter_info.appendChild(h);
     let ys = [];
    year_divs.querySelectorAll('input').forEach(y => ys.push(y.value));
    let years = document.createElement('p')
    years.innerHTML = `<strong>${t.filter_categories.period}</strong>: ${ys[0]} — ${ys[1]}`;
    filter_info.appendChild(years);
     //Record choices 
    finalChoices['selection']['period'] = `${ys[0]} — ${ys[1]}`;

    let chosen_recipient = [];
    for (let option of recipients_div.options){
      if (option.selected && option.value !== "") chosen_recipient.push(option.value)
    };
    if (chosen_recipient.length !== 0) {
      let ul = document.createElement('ul');
     let filter_name = recipients_div.parentElement.querySelector('span').textContent;
     ul.innerHTML += `<strong>${filter_name}</strong>:`;
      chosen_recipient.forEach(c => {
        let li = document.createElement('li');
        li.textContent = c;
        ul.appendChild(li);
      });
      filter_info.appendChild(ul);
      //Record choices 
      finalChoices['selection']['recipient'] = chosen_recipient;
     };

    passed_filters.forEach(f => {
     let p = document.createElement('p');
     let filter_name = f.parentElement.querySelector('span').textContent;
     if (f.value !== ''){
      p.innerHTML = `<strong>${filter_name}</strong>: ${f.value}`;
      filter_info.appendChild(p);
      //Record choices 
      finalChoices['selection'][filter_name] = f.value;
     }
    })
    console.log(passed_filters)
    let s = document.querySelector('#searchTerm input[type="search"]');
    console.log(s.value)
    if (s.value !== ''){
      let p = document.createElement('p');
      p.innerHTML = `<strong>${t.filter_categories.searchFilter}</strong>: ${s.value}`;
      filter_info.appendChild(p);
      //Record choices 
      finalChoices['selection']['search term'] = s.value;
    }
     where.appendChild(filter_info); 

    } else {
       //Record choices 
    finalChoices['selection'] = selectedAll;
    }

// Run transformation
   const displayResult = filteredLetters.map(letter => {
  //console.log(letter);
  let xmlfile = `${base}/api/xml/${letter.url}`;
 
  let transformedText = document.createElement("div");
  return SaxonJS.transform({
                stylesheetLocation: xsltfile,
                sourceLocation: xmlfile,
                destination: "serialized"
            }, "async")
            .then (output => {
              transformedText.innerHTML = output.principalResult;
              document.getElementById(letter.id).appendChild(transformedText);
            })
}); 
  try {await Promise.allSettled(displayResult);
    console.log('transformation done!')
  } 
  catch (error) {
    console.error("Error in the transformation process:", error);
  } finally { // Prepare printable node for impresion (hides the content that is marked 'not-print' along with headers and footers)
   var div = document.getElementById("printable-content").cloneNode(true);
    var head = document.querySelector("head");
		div.id = "toprint";
    div.style.display="block";
    div.style.margin = "5rem";
		var bodychild = document.querySelector("body").children;
		for (let i=0; i<bodychild.length; i++){
		   bodychild[i].style.display="none";
		};
    let script = document.createElement("script");
    script.src = pajedjsurl;
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `${base}/pagedjs_css.css`
    let toc_script = document.createElement("script");
    toc_script.type = "text/javascript";
    toc_script.src = `${base}/createToc.js`;
    head.appendChild(script);
    head.appendChild(toc_script);
    head.appendChild(css);
    const body = document.querySelector("body");
	  body.appendChild(div);
    document.querySelector("header#app-bar").style.display="none";

    // Paginate with PagedJS
    window.PagedConfig = {
      before: toc_script.addEventListener('load', () => {
        createToc({
            content: div, 
            tocElement: '#my-toc-content',
            titleElements: [ '.page h2' ]
          })}),
      after: (flow) => {
          console.log("flow after event");
       if (flow.rendered) {
          console.log("pdf rendering complete")
      const footnote_container = document.querySelectorAll(".pagedjs_footnote_area");
    footnote_container.forEach((el, i) => { 
      if (i <= 3){
      let footnote_content = el.querySelector(".pagedjs_footnote_inner_content"); 
      console.log(footnote_content.children.length);
      if (footnote_content.children.length >= 1){
        el.style.display = "none";
      }
    }});     
     const page_js = document.querySelectorAll('div.pagedjs_page');
     page_js.forEach(page => {
      let data_page = page.getAttribute('data-page-number');
      let h2 = page.querySelector(".page > h2[id]");
      //console.log(h2)
      let id = "";
      if (h2 !== null) {id = h2.getAttribute("id")};
      let tocEl = document.querySelector(`.toc-element a[href='#${id}']`);
      if (tocEl !== null) {tocEl.setAttribute('data-p-number', data_page);};
      //console.log(tocEl)
     }
     )
     // Send recorder choices to storage.
      fetch('/.netlify/functions/logChoices', {
        method: 'POST',
        body: JSON.stringify(finalChoices)
      });
        // Print
        setTimeout(() => window.print(), 7000);
        };
      }
    };

 // Go back to page and reset filters
     document.getElementById("tenor-gif-embed").style.display="none";  
     window.addEventListener("afterprint", function() {
      document.location.reload();
    });

}
  };

 export const syst_filtrage = () => {
  let filter = document.getElementById('filter');
  //console.log(filter.value)
  filter.value === 'all' ? document.getElementById('cat_filters').style.display = 'none' : document.getElementById('cat_filters').style.display = 'flex';
//Scrape results div when any main selector changes.
  let resultsDiv = document.getElementById('results');
     if (resultsDiv){resultsDiv.remove()}
     showPreview = false;
}

// Appliquer les filtres
export async function applyFilters() {
  let resultsDiv = document.getElementById('results');
     if (resultsDiv){resultsDiv.remove()}

  document.getElementById("tenor-gif-embed").style.display="block";
  let filter = document.getElementById('filter');
  console.log(filter.value)
  if (filter.value === selectedAll) {
   filteredLetters = letters2filter.filter(l => l && l.title && l.id);
  } else if (filter.value === selectedFilter) {
    let recipient_values = [];
    let nature = document.querySelector('#nature select');
    let recipient = document.querySelector('#recipient select');
    for (let option of recipient.options) {
      //console.log(option.selected)
      if (option.selected) recipient_values.push(option.value);
    };
    //console.log(recipient_values.includes())
    let thematique = document.querySelector('#theme select');
    let startY = document.querySelector('#period input#start');
    let endY = document.querySelector('#period input#end');
    let signature = document.querySelector('#signature select');
    let srcPlace = document.querySelector('#srcPlace select');
    let destPlace = document.querySelector('#destPlace select');
     if (resultsFilter.length === 0){
      filteredLetters = letters2filter.filter(l => l.nature.toUpperCase() === nature.value || nature.value === '').filter(l => recipient_values.includes(l.person) || recipient_values.includes("")).filter(l => l.tags.includes(thematique.value) || thematique.value === '').filter(l => l.categories[2]=== signature.value || signature.value === '').filter(l => Number(l.date.split('-')[0]) >= Number(startY.value)  && Number(l.date.split('-')[0]) <= Number(endY.value)).filter(l=> l.place.includes(srcPlace.value) || srcPlace.value === '').filter(l => l.placeDest.includes(destPlace.value) || destPlace.value === '');
      console.log(filteredLetters)
    } else if(resultsFilter.length !== 0){
      //filteredLetters = letters2filter.filter(l => resultsFilter.map(res => res.slug.includes(l.slug)))
      let arrayTrue = []; 
      resultsFilter.map(res => {
         letters2filter.map(l => {if (res.slug.includes(l.slug)) {arrayTrue.push(l)}});
      }) 
      filteredLetters = arrayTrue.filter(l => l.nature.toUpperCase() === nature.value || nature.value === '').filter(l => recipient_values.includes(l.person) || recipient_values.includes("")).filter(l => l.tags.includes(thematique.value) || thematique.value === '').filter(l => l.categories[2]=== signature.value || signature.value === '').filter(l => Number(l.date.split('-')[0]) >= Number(startY.value)  && Number(l.date.split('-')[0]) <= Number(endY.value)).filter(l=> l.place.includes(srcPlace.value) || srcPlace.value === '').filter(l => l.placeDest.includes(destPlace.value) || destPlace.value === '');
      
      filteredLetters.sort((a,b) => {return new Date(a.date) - new Date(b.date)});
    }
  }
     //console.log(filteredLetters)

  document.getElementById("tenor-gif-embed").style.display="none";
  showPreview = true;
  const showResults = document.createElement('div');
  showResults.setAttribute('id', 'results');
  let ol = document.createElement('ol');
  ol.style = 'text-align: left';
  filteredLetters.forEach(l => {
  let li = document.createElement('li');
    li.textContent = l.title + '—' + l.dateDisplay;
    ol.appendChild(li);
})
  let cant = document.createElement('p');
  cant.textContent = filteredLetters.length.toString();
  showResults.appendChild(cant);
  showResults.appendChild(ol);
  document.getElementById('cat_filters').after(showResults);
}

onMount(async () => {
        //await loadassets();
		const posts = await fetch(`/${lang}/search`).then((res) => res.json())
		createPostsIndex(posts)
    research = 'ready';

    // Detect Chrome
let chromeAgent = window.navigator.userAgent.includes('Chrome') //.indexOf("Chrome") > -1;
// Detect Safari
let safariAgent = window.navigator.userAgent.includes('Safari') //.indexOf("Safari") > -1;

// Discard Safari since it also matches Chrome
if ((chromeAgent) && (safariAgent)) safariAgent = false;

console.log(`safari : ${safariAgent}`, `chrome: ${chromeAgent}`, )
if (chromeAgent) {
  let warning = document.createElement('p');
  warning.style = 'color:red; text-align:center';
  warning.textContent = t.warning_browser;
  document.querySelector('div.no-print').insertBefore(warning, document.querySelector('div.filters'))
}


});
$: if (research === 'ready') {
		resultsFilter = searchPostsIndex(searchFilter)
  }

</script>

<svelte:head>
    <title>{t.pdfs_header}</title>
    <script src="{base}/saxonjs3/SaxonJS3.js"></script>
    <!--<link rel="stylesheet" href="{base}/toc-css.css">-->
</svelte:head>

<article style="text-align: center;">
<div class="no-print">
<h1>{t.pdfs_header}</h1>
{#each t.pdfs_p.split("\n") as paragraph}
  <p class="pdf_p">{paragraph}</p>
{/each}

<div class="filters">
    <select id="filter" bind:value={selectedFilter} on:change={syst_filtrage}>
      <option value="all">{t.txt_all}</option>
      <option value="cross-filter">{t.txt_filtrer}</option>
    </select>
</div>
    <div id="cat_filters">
      <div id="nature"><span>{t.filter_categories.nature}</span>
        <select name="c1">
            <option value="{nochoice}"></option>
            {#each natSrc as nat }
              <option value="{nat}">{nat}</option>
            {/each}
        </select>
      </div>
      <div id="recipient"><span>{t.filter_categories.recipient}</span>
      <select name="c2" multiple>
        <option value="{nochoice}"></option>
        {#each destinataires as dest }
              <option value="{dest}">{dest}</option>
            {/each}
      </select>
      </div>
      <div id="signature"><span>{t.filter_categories.signature}</span>
      <select name="c3">
        <option value="{nochoice}"></option>
        {#each sign as s }
              <option value="{s}">{s}</option>
            {/each}
      </select>
      </div>
      <div id="theme"><span>{t.filter_categories.theme}</span>
      <select name="c4">
        <option value="{nochoice}"></option>
        {#each theme as t }
              <option value="{t}">{t}</option>
            {/each}
      </select>
      </div>
      <div id="period"><span>{t.filter_categories.period}</span>
       <input name="years" id="start" type="number" min="1538" max="1554" placeholder="1538" required value=1538> - <input id="end" type="number" min="1538" max="1554" placeholder="1554" value=1554 required>
      </div>
      <div id="srcPlace"><span>{t.filter_categories.srcPlace}</span>
        <select name="c5">
          <option value="{nochoice}"></option>
          {#each origPlace as op }
              <option value="{op}">{op}</option>
            {/each}
        </select>
      </div>
      <div id="destPlace"><span>{t.filter_categories.destPlace}</span>
        <select name="c6">
          <option value="{nochoice}"></option>
          {#each destPlace as dp }
              <option value="{dp}">{dp}</option>
            {/each}
        </select>
      </div>
      <div id="searchTerm"><span>{t.filter_categories.searchFilter}</span>
        <form role="search" method="get" class="ekit-search-group" action="/" style="display:flex;width:auto;">
                    <input type="search" style="display:block;width:100%;border:.5px solid rgb(136, 36, 233);border-radius:5%;" class="ekit_search-field" placeholder="{t.search}..." name="search"
                    bind:value={searchFilter}
                    autocomplete="on"
                    spellcheck="true"   
                /></form>
      </div>
    </div>
    <button on:click={applyFilters}><strong>{t.pdf_btn_filtres}</strong></button>
    {#if showPreview}
      <button on:click={generatepdf}><strong>{t.pdf_btn_generate}</strong></button>
    {/if}
  </div>

<div id="tenor-gif-embed" style="display:none; z-index: 999999999999; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"><!-- Tenor Embed Code -->
<video preload="auto" loop autoplay id="content" width="64" height="64"><source src="https://media.tenor.com/yfaFcsYBgqMAAAPo/loading-gif.mp4" type="video/mp4"/><source src="https://media.tenor.com/yfaFcsYBgqMAAAPs/loading-gif.webm" type="video/webm"/></video></div>
</article>

 <!-- Seul ce contenu sera traité pour l'impression -->
 <div id="printable-content" style="display: none;">
<div class="pagedjs_pages">
  <div id="cover">
    <div style="text-align: center;">
    <h1 style="text-align: center; margin: 3rem">{t.pdf_title}</h1>
    <h2 style="text-align: center; margin: 3rem"><em>{t.pdf_subtitle}</em></h2>
    <img src="{base}/Portrait_de_Calvin.jpg" alt="Jean Calvin" style="display: block; margin: 4rem auto; border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
      <p><strong style="text-align: center; display: block; margin: 3rem;"><em>{t.pdf_author}</em></strong></p>
    </div>
  </div> 
  <div id="noteStment">
    <p style="text-align: center; margin-top: 5rem; font-weight: normal">{t.noteStment}</p>
  </div>
   <div id="toc">
    <h3 style="text-align: center; margin: 3rem">{t.pdf_table_cont}</h3>
    <nav id="my-toc-content" style="text-align: left;">
      
     </nav>
  </div> 
  {#each filteredLetters as letter}
    <div class="page">
     <h2 id="{letter.id}ref" style="text-align: center;" data-date="{letter.dateDisplay}"><a class="back2toc" href="#toc">{letter.title}</a></h2>
     <p style="text-align:center !important; color: #27753c !important; font-size:.9em;"><em>{letter.desc}</em></p>
      <div id="{letter.id}"></div>
    </div>
  {/each}
  </div>
</div>

<style>
  .no-print {
    margin-bottom: 2rem;
  }
  
  .filters {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    align-content: center;
    justify-content: center;
  }

  .pdf_p:last-of-type {
    font-style: oblique;
  }

  #cat_filters{
    display:flex;
    flex-wrap: wrap;
    margin: 1rem;
    padding: 1rem;
    justify-content: center;
  }
  #cat_filters div{
    padding: 1rem;
  }

#cat_filters div select{
    overflow-y: scroll;
  }
</style>