<script>
	import "$lib/blog.css";
	export let data;
	export const { title, content } = data;
//	import {base} from '$app/paths';
//	import {onMount} from 'svelte';
	//import { page } from '$app/stores';
	//import { fr_es } from '$lib/fr_es';
	// Check for language
	//$: lang = $page.params.lang;
  	//$: t = fr_es[lang] || fr_es.fr;


</script>

<svelte:head>

	<title>{title}</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
</svelte:head>
<div id='anchor'>
<article>
	<!--Done according to information from 'Let's learn SvelteKit by building a static Markdown blog from scratch' by Josh Collinsworth (updated: February 17, 2023)-->
	<h1>{title}</h1>
	<!--<p><strong>Thèmes</strong> {#each tags as tag}
		<span class="tag">{tag}</span>
	{/each}</p>
	<p><strong>Catégories</strong> {#each category as cat}
		<span class="tag">{cat}</span>
	{/each}</p>-->
	<svelte:component this={content}/>
</article>	
</div>
<style>
	/*.tag{
		padding: .3rem;
		border: .5px solid lightgray;
		box-shadow: 1px 1px 1px lightgray;
	}*/
</style>
