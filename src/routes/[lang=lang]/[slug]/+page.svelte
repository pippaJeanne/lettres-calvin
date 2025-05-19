<script>
	import "$lib/blog.css";
	  export let data;
	$: ({title, content} = data)

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
	<svelte:component this={content}/>
</article>	
</div>
