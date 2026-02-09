<script>
    import {base} from '$app/paths';
    import Card from '$lib/components/Card.svelte';
    import {persons} from '$lib/biblRep/persons.json';
    import {persons_es} from "$lib/biblRep/persons_es.json";
    import { page } from '$app/stores';
    
    import { fr_es } from '$lib/fr_es';
// To check for language
  let lang = $page.params.lang;
  let t = fr_es[lang] || fr_es.fr;
  export function personsIndex(){
    if (lang === "fr"){
  const pers = persons;
return pers
} else if (lang === "es"){
    const pers = persons_es;
return pers
}	
}
export let persons_list = personsIndex()
</script>
<svelte:head>
    <title>{t.name_index}</title>
    <meta name="description" content="{t.names_desc}">
    <script src="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.js">
    </script>
</svelte:head>
<article>
    <h2 style="text-align:center;">{t.name_index}</h2>
<div class="card-container">
   {#each persons_list as name }
   <Card
   name={name.name}
   id = {name.id?.replace("#", "")}
   wikiurl = {name.wikiurl}
   thumbnail = {name.thumbnail}
   portrait_text = {t.portrait_text}
   lettres = {t.lettres}
   href_letters = {t.href_letters}
   letters = {name.letters}>{name.desc}</Card>
   {/each} 
</div>
<p>{t.name_notes}</p>
<script type="text/javascript">
    /** Initialize MDC Web components. */
    // Instantiation
    window.mdc.autoInit();
</script>
</article>