<script>
	import {base} from '$app/paths'; 
	export let name;
	export let thumbnail;
	export let id;
	export let letters;
	export let lettres;
	export let portrait_text;
	export let href_letters;
	export let wikiurl;
	//export let description;
</script>

<link href="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> 
<style>
    .name-card p{text-align:justify !important; }
        .stylehr{
            width: 100%;
           
            border-bottom: 1px solid transparent;
        }
        .centre{
        text-align: center;
        }
        figure img{width:70%; justify-content: center;margin-left:15% !important; padding:.5rem !important;}
        /*figcaption{font-size:.6rem;margin-top:.2rem;text-align:center;}*/
        .corps{display:block; padding:0  .5rem;}
        .lettre-card span{text-align: center;}
		.mdc-typography--body1{
			padding:1rem
		}
		ul {
			padding-left: 0;
		}
		li {list-style: none;}
    </style>

	<div id="{id}" class="name-card mdc-card mdc-elevation--z4">
		<div class="mdc-card__ripple"></div>
		<div class="lettre-card__title mdc-typography--headline6 centre">
		<a href="{wikiurl}">{name}</a>
		</div>
		<div class="lettre-card__secondary--body mdc-typography--caption corps">
			{#if thumbnail !== "" }
			<figure>
				<img src="{thumbnail}" alt="{portrait_text} {name}">
				<!--<figcaption class="mdc-typography--body2" style="font-size:0.5rem;">
				</figcaption>-->
			</figure>
			{/if}	
			
				<p class="mdc-typography--body1">
					<slot />
				</p>
		</div>
		<div class="mdc-deprecated-list-divider--inset-trailing mdc-deprecated-list-divider" style="margin-left: 16px; margin-right: 0; width: calc(100% - 32px); margin-bottom:8px;"></div>
			<div class="lettre-card__subtitle mdc-typography--subtitle1 centre">
				<strong>{lettres}</strong>
				<ul>
					{#each letters as letter}
						<li><a href="{base}/{href_letters}/{letter.slug}" class="mdc-typography--body2" style="text-align:center">
						{letter.headline} - {letter.date}
						</a></li>
					{/each}
				</ul>
			</div>	

	</div>



<!-- <style>
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
		background-color: #eee;
		padding: 4px 8px;
		margin-right: 4px;
		border-radius: 4px;
	}
</style> -->
