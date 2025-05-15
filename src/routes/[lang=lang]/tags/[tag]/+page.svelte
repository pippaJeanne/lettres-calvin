<script>
    import {base} from '$app/paths'; 
	import { page } from '$app/stores';
    import Index from '$lib/components/Index.svelte'
	import { fr_es } from '$lib/fr_es.js';
	export let data;
	export {fr_es} from "$lib/fr_es.js"
	const lang = $page.params.lang;
	const t = fr_es[lang] || fr_es.fr;
	const rightSlug = lang === "fr" ? "lettres" : "cartas";
</script>

<!-- ...Post HTML here -->
<svelte:head>
	{#if data.tagname.letters.length}
	<title>{t.theme} : {data.tagname.tag}</title>
	{/if}
</svelte:head>
<article>
{#if data.tagname.letters.length}
	<div>
		<h2>{t.theme} : {data.tagname.tag}</h2>
		<ul>
			{#each data.tagname.letters as lettre}
			    <a class="card" href="{base}/{lang}/{rightSlug}/{lettre}">
					<Index
					title={data.l[lettre].title}
					date={data.l[lettre].date}
					catlist = {data.l[lettre].categories}
					tags = {data.l[lettre].tags}
				> {data.l[lettre].desc}</Index>
					</a>
			{/each}
		</ul>
	</div>
{/if}
</article>
<style>
	a.card{text-decoration: none}
</style>