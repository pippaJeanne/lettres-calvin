<script>
    //import {base} from '$app/paths';
    import MapFR from '$lib/components/MapFR.svelte';
    import MapEs from '$lib/components/MapEs.svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    
    import { fr_es } from '$lib/fr_es';
    let lang = $page.params.lang;
    let t = fr_es[lang] || fr_es.fr;

    const pageurl = $page.url.pathname
	//console.log(pageurl)
	const fr = lang === 'fr' ? lang : null;
    const es = lang === 'es' ? lang : null;
	
	onMount(() => {
	// Serving assets for Observable maps
	if (fr || es){
	let divId = fr ? 'observableCarte' : 'observableCarteEs'
	let mapcontainer = document.getElementById(divId);
	
	if (!document.querySelector("link[href*='inspector.css']")){
		document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">');}
	if (!document.querySelector("link[href*='leaflet.css']")){
		document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>');}
	
	if (!document.querySelector('script[src*="leaflet.js"]')){
	const scriptAssets = document.createElement('script');
	scriptAssets.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
	scriptAssets.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
	scriptAssets.crossOrigin = "";
	mapcontainer.appendChild(scriptAssets)
} 
	if (!document.querySelector("script[type='module]")){
	const script = document.createElement("script");
	script.type = "module";
	// change text when updating the map
	script.textContent = fr ? `import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/1956978c14deb22b.js?v=4";
new Runtime().module(define, name => {
  if (name === "viewof date") return new Inspector(document.querySelector("#observablehq-viewof-date-920ecaf3"));
  if (name === "carte") return new Inspector(document.querySelector("#observablehq-carte-920ecaf3"));
  if (name === "activate") return new Inspector(document.querySelector("#observablehq-activate-920ecaf3"));
  return ["mapViz","arrow"].includes(name);
});` 
    : `import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/de8c36a8a2970791@2657.js?v=4";
new Runtime().module(define, name => {
  if (name === "viewof date") return new Inspector(document.querySelector("#observablehq-viewof-date-86cf6b04"));
  if (name === "carte") return new Inspector(document.querySelector("#observablehq-carte-86cf6b04"));
  if (name === "activate") return new Inspector(document.querySelector("#observablehq-activate-86cf6b04"));
  return ["mapViz","arrow"].includes(name);
});`
	mapcontainer.appendChild(script)
	}
  }
})		

</script>

<svelte:head>
    <title>{t.name_carte}</title>
	<meta name="description" content="{t.carte_desc}">
</svelte:head>
<article>
{#if fr }
<MapFR title={t.name_carte}
 description={t.carte_desc}/>
{/if}
{#if es }
<MapEs title={t.name_carte}
 description={t.carte_desc}/>
{/if}
</article>