<script>
    import {page} from '$app/stores'
    export let data;
	//import {biblMs} from '$lib/biblRep/bibl.json'
    import "$lib/blog.css";
	import {base} from '$app/paths';
	import {onMount, setContext} from 'svelte';
	
    let uri = $page.url.pathname.split('/');
    let slug = uri[uri.length -1];
	// Check for language
	const lang = $page.params.lang;
	let slugOk = "";
	let cartas = [];
	let xmlEs = "";
	let cartaOk = {};
	if (lang ==="es") {
		slugOk = slug
		cartas = data.letters["cartas"];
	}
	for (let carta of cartas){
		//console.log(carta)
		if (slugOk === carta.slug){
			//console.log(carta)
			xmlEs = carta.url ;
			cartaOk = carta
		} 
	}
	// Arranging categories so the right one matches the right slug
	let categories = []
	Object.keys(data.letters).map(key =>{
		if (key !== "carta"){
			let obj;
		if (cartaOk.source === data.letters[key].id){
		data.letters[key].categories.map((d, index) =>{
			let slug = d.toLowerCase().replaceAll(' ', '-').replaceAll("é",'e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a')
			 
			cartaOk.categories.map((cat, i) => {
			if (data.letters[key].categories.length === cartaOk.categories.length && i === index){
				obj = {slug : slug, cat : cat }
			if(categories.indexOf(obj)=== -1){categories.push(obj)}
		}
		})
		})
	  }	
	}
	})

// Arranging tags (themes) so the right one matches the right slug
let tags = []
	Object.keys(data.letters).map(key =>{
		if (key !== "carta"){
			let obj;
		if (cartaOk.source === data.letters[key].id){
		data.letters[key].tags.map((d, index) =>{
			let slug = d.toLowerCase().replaceAll(' ', '-').replaceAll("é",'e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a')
			 
			cartaOk.tags.map((tag, i) => {
			if (data.letters[key].tags.length === cartaOk.tags.length && i === index){
				obj = {slug : slug, tag : tag }
			if(tags.indexOf(obj)=== -1){tags.push(obj)}
		}
		})
		})
	  }	
	}
	})


	
	//deconstructing values from api
	// Spanish translations
let {title, date, editor, desc} = cartaOk;

//serving xml files and transformation stylesheets
	export const xmlfileEs = base + xmlEs; 
	
export const xsltes =  `${base}/xslt/Transfm-es.xslt`;
//declaring transfromation functions (executed on client-site)

export async function displayResultEs(){
	const parser = new DOMParser();
	const xsltProcessor = new XSLTProcessor();
	let xmles;
	let xsles;
	if(xmlEs !== ""){
		 xmles = await fetch(xmlfileEs);
		 xsles = await fetch(xsltes);
	}
	

	const xmlesText = await xmles.text();
    const xmlesdoc = parser.parseFromString(xmlesText, "application/xml"); 

	const xslesText = await xsles.text();
    const stylesheetes = parser.parseFromString(xslesText, "application/xml"); 
	
	xsltProcessor.importStylesheet(stylesheetes);
	const docEs = xsltProcessor.transformToFragment(xmlesdoc, document);
	document.getElementById("transformedES").appendChild(docEs);
}
//triggers functions that need the DOM to be in place (hydration)
onMount(()=>{
	
	document.addEventListener('load', displayResultEs());

})

</script>

<svelte:head>

	<title>{title}</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</svelte:head>
<div id='anchor'>
<article>
	<h1>{title}</h1>
    <p><span class="tag">Date : {date}</span></p>
    <p><span class="tag">{editor}</span></p>
	<!--<p><strong>Thèmes</strong> {#each tags as tag}
		<span class="tag">{tag}</span>
	{/each}</p>-->
    <div>
	{#each categories as cat}
		<a class="tag" style='text-decoration:none;' href='{base}/es/categories/{cat.slug}'>
			<span>{cat.cat}</span>
		</a>
	{/each}
   </div>
   <div>
	{#each tags as tag}
		<a class="tag" style='text-decoration:none;' href='{base}/es/tags/{tag.slug}'>
			<span>{tag.tag}</span>
		</a>
	{/each}
	</div>
	<p style="text-align: center !important;font-size: 1.2rem;">{desc}</p>
	<!--<svelte:component this={content}/>-->
	

<div id="transformedES">

	<!-- Traduction ES-->
	<!--<div class="inner-cont cartav4" style="-webkit-order: 4;order: 4;">
		<header class="mdc-top-app-bar"
			style="position: relative!important; background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%);border-radius: 20px; width: 99%; margin-left: auto; margin-right: auto;">
			<div class="mdc-top-app-bar__row">
				<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start;">
					<span class="mdc-top-app-bar__title" style="color: #676767 !important;">
						Traduction espagnole
					</span>
				</section>

				<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">

					<span
						class="visualizar4 mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
						aria-label="Ocultar" title="ocultar" data-aria-label-on="Visualizar"
						data-aria-label-off="Mostrar"
						style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 28px; --mdc-ripple-fg-scale: 1.7142857142857142; --mdc-ripple-left: 10px; --mdc-ripple-top: 10px;">
						<div class="mdc-icon-button__ripple"></div>
						<i
							class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_down</i>
						<i class="material-icons mdc-icon-button__icon">arrow_drop_up</i>
					</span>

					<div class="openMenu mdc-top-app-bar__action-item mdc-menu-surface--anchor icono-opciones1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
						style="--mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;">
						<span
							class="material-icons mdc-top-app-bar__action-item mdc-icon-button openMenu4 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
							style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;"
							aria-label="Opciones" title="Cliquer pour changer l'ordre des versions">more_vert
							<span class="mdc-icon-button__ripple"></span>
						</span>
						<div class="mdc-menu mdc-menu-surface mdc-elevation--z4 mdc-menu4"
							style="padding-left: 8px !important; background-color: #E5D2C3; z-index: 1;"
							tabindex="-1">
							<div class="mdc-list list-principal" role="menu" aria-hidden="true" aria-orientation="vertical">

								<p class="mdc-list-item mdc-ripple-upgraded arriba" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text">Au-dessus</span>
								</p>
								<p class="mdc-list-item mdc-ripple-upgraded abajo" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text" >En-dessous</span>
								</p>
								<p class="mdc-list-item mdc-ripple-upgraded derecha" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text" >À droite</span>
								</p>
								<p class="mdc-list-item mdc-ripple-upgraded izquierda" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text">À gauche</span>
								</p>
								<p class="mdc-list-item mdc-ripple-upgraded diagonal" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text">En biais</span>
								</p>                                    
							</div>
						</div>
					</div>

				</section>
			</div>
		</header>
		<div class="content visualizar4grupo listagrupo4" style="display:block!important;width: 97%!important; margin-left: auto!important; margin-right: auto!important;" id="transformedES"> -->
			<div id="btnsfr"
			style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;">

				<a id="dwl-xml2" style="color:black;"
					href={xmlEs}
					download><button class="btn-row" type="button"><i class="fa fa-download"></i><span> XML-TEI
						</span></button></a>
				<!--<button id="agrandirES" title="agrandir pour imprimer" onclick="fullES()"
					class="glyphicon glyphicon-fullscreen btn-row">
				</button>
				<button class="btn-row" id="reduireES" title="réduire" onclick="goBackES()"
					style="display:none"><span
						style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span
						style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button>-->
			</div>
		<!--</div>
	</div> -->
	</div>
<!--code for toggle content from W3School (adapted)-->

	  <script src="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.js">
	  </script>
	  
	  <script type="text/javascript">
		  /** Initialize MDC Web components. */
		  // Instantiation
		  window.mdc.autoInit();
	
		  var nodes = document.querySelectorAll('.mdc-icon-toggle');
		  for (var i = 0, node; node = nodes[i]; i++) {
			  mdc.iconToggle.MDCIconToggle.attachTo(node);
		  }
	
		  var visualizar4BotEl = document.querySelector('.visualizar4');
		  var visualizar4Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(visualizar4BotEl);
		  var visualizar4GrupoEl = document.querySelector('.visualizar4grupo');
		  visualizar4BotEl.addEventListener('click', () => {
			  if (visualizar4GrupoEl.style.display == 'block') {
				  visualizar4GrupoEl.style.display = 'none';
			  }
			  else {
				  visualizar4GrupoEl.style.display = 'block';
			  }
		  });
		  
	
		  var menu1El = document.querySelector('.mdc-menu1');
		  var menu1 = new mdc.menu.MDCMenu(menu1El);
		  var SelectEl1 = document.querySelector('.openMenu1');
		  SelectEl1.addEventListener('click', (event) => {
			  menu1.open = !menu1.open;
		  });
	
		  var menu2El = document.querySelector('.mdc-menu2');
		  var menu2 = new mdc.menu.MDCMenu(menu2El);
		  var SelectEl2 = document.querySelector('.openMenu2');
		  SelectEl2.addEventListener('click', (event) => {
			  menu2.open = !menu2.open;
		  });
	
		  var menu3El = document.querySelector('.mdc-menu3');
		  var menu3 = new mdc.menu.MDCMenu(menu3El);
		  var SelectEl3 = document.querySelector('.openMenu3');
		  SelectEl3.addEventListener('click', (event) => {
			  menu3.open = !menu3.open;
		  });
	
		  var menu4El = document.querySelector('.mdc-menu4');
		  var menu4 = new mdc.menu.MDCMenu(menu4El);
		  var SelectEl4 = document.querySelector('.openMenu4');
		  SelectEl4.addEventListener('click', (event) => {
			  menu4.open = !menu4.open;
		  });
	
	  </script>


	<script src="{base}/functionsLetters.js"/>
</article>
</div>
<style>
	#transformedES{
		margin-top: 2.5rem;
		margin-bottom: 2.5rem;
	}
	a.tag{
		padding: .3rem;
		border: .5px solid lightgray;
		box-shadow: 1px 1px 1px lightgray;
	}
</style>


