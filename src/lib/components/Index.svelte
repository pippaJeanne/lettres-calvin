<script>
	export let title;
	export let date;
	export let catlist;
	export let tags;
</script>

<div class="card">
	<h2>{title}</h2>
	<p>Date: {date}</p>

	<slot />

	<div class="tags">
		{#each catlist as cat}
			<span class="tag">{cat}</span>
		{/each}
	</div>
	<div class="tags">
		{#each tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</div>

<style>
	/* Add your styling here */
	.card {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 16px;
		margin: 16px;
	}

	.tags {
		margin-top: 8px;
	}

	.tag {
		display: inline-block;
		padding: 4px 8px;
		margin-right: 4px;
		border-radius: 4px;
		background-color :#eee;
	}
</style>
