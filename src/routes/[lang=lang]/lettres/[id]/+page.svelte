<script>
    import {page} from '$app/stores'
    export let data;
	import {biblMs} from '$lib/biblRep/bibl.json'
    import "$lib/blog.css";
	import {base} from '$app/paths';
	import {transc} from '$lib/biblRep/transcriptions.json';
	import {onMount, setContext} from 'svelte';
    let uri = $page.url.pathname.split('/');
    let slug = uri[uri.length -1];
	// Check for language
    const lang = $page.params.lang;
	let slugOk = "";
	if (lang ==="fr" && slug !== "carta") {
		slugOk = slug
	}
	
	//deconstructing values from api
	// French letter
    let {id, url, title, date, categories, editor, bibliothequeMs, srcMs, srcB, coteMs, foliosB, tags, desc} = data.letters[slugOk];
	// Spanish translations (correpondence given by @id of French letter iquals Spanish translation @source value)
	let cartas = data.letters["cartas"];
	let xmlEs = ""
	for (let carta of cartas){
		if (id === carta.source){
			xmlEs = carta.url ;
		} 
	}
	
	//Checking library name. If 'bibliothèque de genève' rearrange array of image urls. Geneva's library facs not iiiF compatible
   export const biblMsCheck = () => { 
    let newarray = [];
    if(bibliothequeMs.toLowerCase().includes('bibliothèque de genève')){
       srcMs.map(src => {
       newarray.push({type:'image',
         url: src})
       })
       return newarray
    }else{
        return srcMs;
    }
}
//Getting catalogue info from library for manuscripts or primary source (Bonnet's version doesn't change, only folio numbers change)
let split = coteMs.split(' ('); //getting right cote without folio numbers
let coteok = split[0];
export let biblMsInfo = biblMs[bibliothequeMs][coteok];
biblMsInfo===undefined? biblMsInfo = "Non trouvé": null
//serving xml files and transformation stylesheets
	export const xmlfile = base + '/api/xml/' + url;
	export const xmlfileEs = base + '/api/xml/' + xmlEs; 
	//export const xmlfileMme = base + "/xmles/SeñoradeFalais-14-oct-1543.xml";
	export const xsltfile =  `${base}/xslt/Transfm-fr.xslt`;
	export const xsltchng =  `${base}/xslt/Transfm-Fr-voir-changements.xslt`;
	export const xsltdiplo =  `${base}/xslt/Transfm-diplomatique.xslt`;
	export const xsltes =  `${base}/xslt/Transfm-es.xslt`;
//declaring transfromation functions (executed on client-side)
	export async function displayResult(){
	const parser = new DOMParser();
	const xsltProcessor = new XSLTProcessor();
	const xml = await fetch(xmlfile);
	const xsl = await fetch(xsltfile);
	
	const xmlText = await xml.text();
    const xmldoc = parser.parseFromString(xmlText, "application/xml"); 

	const xslText = await xsl.text();
    const stylesheet = parser.parseFromString(xslText, "application/xml"); 
	xsltProcessor.importStylesheet(stylesheet);
    const modernisation = xsltProcessor.transformToFragment(xmldoc, document);
	document.getElementById("transformedFR").appendChild(modernisation);
}

	export async function displayResultChng(){
	const parser = new DOMParser();
	const xsltProcessor = new XSLTProcessor();
	const xml = await fetch(xmlfile);
	const xslchng = await fetch(xsltchng);

	const xmlText = await xml.text();
    const xmldoc = parser.parseFromString(xmlText, "application/xml"); 

	const xslTextMod = await xslchng.text();
    const stylesheetMod = parser.parseFromString(xslTextMod, "application/xml"); 

	xsltProcessor.importStylesheet(stylesheetMod);
	const modifs = xsltProcessor.transformToFragment(xmldoc, document);
	document.getElementById("see-changes")?.appendChild(modifs);
	  }
export async function displayDiplomatic(){
	const parser = new DOMParser();
	const xsltProcessor = new XSLTProcessor();
	const xml = await fetch(xmlfile);
	const xsldiplo = await fetch(xsltdiplo);

	const xmlText = await xml.text();
    const xmldoc = parser.parseFromString(xmlText, "application/xml"); 

	const xslTextDiplo = await xsldiplo.text();
    const stylesheetDiplo = parser.parseFromString(xslTextDiplo, "application/xml"); 

	xsltProcessor.importStylesheet(stylesheetDiplo);
	const diplo = xsltProcessor.transformToFragment(xmldoc, document);
	document.getElementById("diplomatic").appendChild(diplo);
}

	export async function displayResultEs(){
	const parser = new DOMParser();
	const xsltProcessor = new XSLTProcessor();
	let xmles;
	let xsles;
	if(xmlEs !== ""){
		 xmles = await fetch(xmlfileEs);
		 xsles = await fetch(xsltes);
	/*} else if(title.includes("Madame") && date.includes("1543")){
		 xmles = await fetch(xmlfileEs);
		 xsles = await fetch(xsltes); */
	} else {
		 xmles = await fetch(xmlfile);
		 xsles = await fetch(xsltfile);
	}
	

	const xmlesText = await xmles.text();
    const xmlesdoc = parser.parseFromString(xmlesText, "application/xml"); 

	const xslesText = await xsles.text();
    const stylesheetes = parser.parseFromString(xslesText, "application/xml"); 
	
	xsltProcessor.importStylesheet(stylesheetes);
	const docEs = xsltProcessor.transformToFragment(xmlesdoc, document);
	document.getElementById("transformedES").appendChild(docEs);
}
const slugslist = Object.keys(transc)
export const createLinkTransc = () =>{
	let link2transc;
  slugslist.map(slug => {
    if (slugslist.indexOf(slugOk)!== -1){
      if(slug === slugOk){
		link2transc = document.createElement("p")
		let a = document.createElement("a");
		a.style.textDecoration = "underline"
		a.href = `${base}/transcription/${slugOk}`;
		a.textContent = "Voir transcription diplomatique des fueillets manuscrits de cette lettre";
		link2transc.appendChild(a);
	  }
    }
  })
  return link2transc;
}
//triggers functions that need the DOM to be in place (hydration)
onMount(()=>{
	document.addEventListener('load', displayResult());
	document.addEventListener('load', displayResultChng());
	document.addEventListener('load', displayResultEs());
	document.addEventListener('load', displayDiplomatic());
	document.getElementById('msInfo').innerHTML = biblMsInfo;
    var viewer1 = OpenSeadragon({
			id: "openseadragon1", prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
			tileSources:biblMsCheck(), 
		sequenceMode: true,
		// Initial rotation angle
		degrees: 90,
		message:"Item temporarily unavailable",
	// Show rotation buttons
	showRotationControl: true,
	// Enable touch rotation on tactile devices
	gestureSettingsTouch: {
	pinchRotate: true}
	});
	
	 var viewer2 = OpenSeadragon({
								id: "openseadragon2",
								prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
							sequenceMode: true,
							tileSources: srcB,
							message: "Item temporarily unavailable"
	});
	
	createLinkTransc() !== undefined ? document.getElementById("lienTransc").appendChild(createLinkTransc()): null;
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
		<a class="tag" style='text-decoration:none;' href='{base}/fr/categories/{cat.toLowerCase().replaceAll(' ', '-').replaceAll("é",'e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a')}'>
			<span>{cat}</span>
		</a>
	{/each}
   </div>
   <div>
	{#each tags as tag}
		<a class="tag" style='text-decoration:none;' href='{base}/fr/tags/{tag.replaceAll(' ', '-').replaceAll("é",'e').replaceAll('è','e').replaceAll('.', '').replaceAll('î', 'i').replaceAll('û', 'u').replaceAll('à', 'a')}'>
			<span>{tag}</span>
		</a>
	{/each}
	</div>
	<div id="lienTransc"></div>
	<p style="text-align: center !important;font-size: 1.2rem;">{desc}</p>
	<!--<svelte:component this={content}/>-->
	<p style="font-size: .9rem;">Vous trouverez ci-après quatre versions de cette lettre : le manuscrit de la plus ancienne copie connue, l'édition de Jules Bonnet parue en 1854, une version en français moderne et une traduction vers l'espagnol que vous pouvez parcourrir et comparer. Il suffit de cliquer sur les boutons pour ouvrir (ou fermer) les tiroirs.</p>

<div class="sec-container"><!-- manuscript original or copy-->
	 <div class="inner-cont cartav1" style="-webkit-order: 1;order: 1;">

            <header class="mdc-top-app-bar"
                style="position: relative!important;  background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%);border-radius: 20px; width: 99%; margin-left: auto; margin-right: auto;">
                <div class="mdc-top-app-bar__row">
                    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start;">
                        <span class="mdc-top-app-bar__title" style="color: #676767 !important;">
                            Manuscrit
                        </span>
                    </section>

                    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">

                        <span
                            class="visualizar1 mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
                            aria-label="Visualizar" title="Visualizar" data-aria-label-on="Ocultar"
                            data-aria-label-off="Mostrar"
                            style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 28px; --mdc-ripple-fg-scale: 1.7142857142857142; --mdc-ripple-left: 10px; --mdc-ripple-top: 10px;">
                            <div class="mdc-icon-button__ripple" ></div>
                            <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_up</i>
                            <i class="material-icons mdc-icon-button__icon">arrow_drop_down</i>
                        </span>

                        <div class="openMenu mdc-top-app-bar__action-item mdc-menu-surface--anchor icono-opciones1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
                            style="--mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;">
                            <span
                                class="material-icons mdc-top-app-bar__action-item mdc-icon-button openMenu1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
                                style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;"
                                aria-label="Opciones" title="Cliquer pour changer l'ordre des versions">more_vert
                                <span class="mdc-icon-button__ripple"></span>
                            </span>
                            <div class="mdc-menu mdc-menu-surface mdc-elevation--z4 mdc-menu1"
                                style=" padding-left: 8px !important; background-color: #E5D2C3; z-index: 1;"
                                tabindex="-1">
                                <div class="mdc-list list-principal" role="menu" aria-hidden="true" aria-orientation="vertical">

                                    <p class="mdc-list-item mdc-ripple-upgraded arriba"  tabindex="-1">
                                        <span class="mdc-list-item__ripple"></span>
                                        <span class="cmover mdc-list-item__primary-text" >Au-dessus</span>
									</p>
                                    <p class="mdc-list-item mdc-ripple-upgraded abajo" tabindex="-1">
                                        <span class="mdc-list-item__ripple"></span>
                                        <span class="cmover mdc-list-item__primary-text">En-dessous</span>
									</p>
                                    <p class="mdc-list-item mdc-ripple-upgraded derecha" tabindex="-1">
                                        <span class="mdc-list-item__ripple"></span>
                                        <span class="cmover mdc-list-item__primary-text">À droite</span>
									</p>
                                    <p class="mdc-list-item mdc-ripple-upgraded izquierda" tabindex="-1">
                                        <span class="mdc-list-item__ripple"></span>
                                        <span class="cmover mdc-list-item__primary-text" >À gauche</span>
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

            <div class="ancho-col content visualizar1grupo" style="display:none!important; width: 97%!important; margin-left: auto!important; margin-right: auto!important;">
                <div id="openseadragon1"
                    style="width: 98%; height: 500px;background-color: #fcfcfc; display: block; margin-left: auto; margin-right: auto;">
                </div>
                <div>
                    <h6>{coteMs} </h6>
                    <div id='msInfo'></div>
                </div>
            </div>
        </div>


 <!-- Bonnet's edition -->
 <script>
	function syncNotes(){
		let notes = document.querySelectorAll('.diplomatic');
let singleNotes = document.querySelectorAll('sup.diplo');
for (var note of notes){
	var textOk = "";
	var txt = [];
	var text = note.querySelectorAll('span:last-child p span');
	for (var t of text){
		t.textContent.replaceAll("\n", "")
		txt.push(t.textContent);
		textOk = txt.join("");
	}
	var href =note.querySelector('span:first-child > a.sup')?.getAttribute('href');
	var name =note.querySelector('span:first-child > a.sup')?.getAttribute('name');
	var n = note.querySelector('span:first-child > a.sup')?.textContent;
	for (var snote of singleNotes){
		var txt = snote.querySelector('a.sup')?.getAttribute('title');
		var link = snote.querySelector('a.sup');
		var num = snote.querySelector('a.sup').textContent;
		if(txt==textOk){
			link.setAttribute("href",`#${name}`);
			var string = href?.split('#');
			var nom = string[1];
			link?.setAttribute("name", nom);
			link.textContent = n;
		}
	}
}};
</script>
 <div class="inner-cont cartav2" style="-webkit-order: 2;order: 2;" onmouseover="syncNotes()">

	<header class="mdc-top-app-bar"
		style="position: relative!important;  background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%);border-radius: 20px; width: 99%; margin-left: auto; margin-right: auto;">
		<div class="mdc-top-app-bar__row">
			<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start;">
				<span class="mdc-top-app-bar__title" style="color: #676767 !important;">
					Édition de Jules Bonnet
				</span>
			</section>

			<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">

				<span
					class="visualizar2 mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
					aria-label="Visualizar" title="Visualizar" data-aria-label-on="Ocultar"
					data-aria-label-off="Mostrar"
					style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 28px; --mdc-ripple-fg-scale: 1.7142857142857142; --mdc-ripple-left: 10px; --mdc-ripple-top: 10px;">
					<div class="mdc-icon-button__ripple"></div>
					<i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_up</i>
					<i class="material-icons mdc-icon-button__icon">arrow_drop_down</i>
				</span>
				
				<div class="openMenu mdc-top-app-bar__action-item mdc-menu-surface--anchor icono-opciones1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
					style="--mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;">
					<span
						class="material-icons mdc-top-app-bar__action-item mdc-icon-button openMenu2 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
						style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;"
						aria-label="Opciones" title="Cliquer pour changer l'ordre des versions">more_vert
						<span class="mdc-icon-button__ripple"></span>
					</span>
					<div class="mdc-menu mdc-menu-surface mdc-elevation--z4 mdc-menu2"
						style=" padding-left: 8px !important; background-color: #E5D2C3; z-index: 1;"
						tabindex="-1">
						<div class="mdc-list list-principal" role="menu" aria-hidden="true" aria-orientation="vertical">
							
							<p class="mdc-list-item mdc-ripple-upgraded arriba" tabindex="-1" >
								<span class="mdc-list-item__ripple"></span>
								<span class="cmover mdc-list-item__primary-text">Au-dessus</span>
							</p>
							<p class="mdc-list-item mdc-ripple-upgraded abajo" tabindex="-1">
								<span class="mdc-list-item__ripple"></span>
								<span class="cmover mdc-list-item__primary-text">En-dessous</span>
							</p>
							<p class="mdc-list-item mdc-ripple-upgraded derecha"  tabindex="-1">
								<span class="mdc-list-item__ripple"></span>
								<span class="cmover mdc-list-item__primary-text">À droite</span>
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
	<div class="ancho-col content visualizar2grupo" style="display:none!important; width: 97%!important; margin-left: auto!important; margin-right: auto!important;">
		<div class="content" id="bonnet" style="display:block;border:none;">
			<div id="btnsfr"
				style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;">
				<button id="voirdiplo" class="btn-row" onclick="seediplo()">Voir version texte</button>
			</div>
			<div id="openseadragon2"
			style="width: 98%; height: 500px;background-color: #fcfcfc; display: block; margin-left: auto; margin-right: auto;">
			</div>
			<div>
			<h6>Facsimiles {foliosB} </h6>
			<!-- Notice de la bibliohèque -->
			<h3 style="text-align: center;">Notice de la bibliothèque
			</h3>
			<div>
				<div> <span> <b> Titre&nbsp;:&nbsp; </b> </span> <span> Lettres de Jean Calvin : lettres
						françaises. T. 1 / recueillies pour la première fois et publ. d'après les ms. originaux
						par Jules Bonnet </span> </div>
				<div> <span> <b> Auteur &nbsp;:&nbsp; </b> </span> <span> Calvin, Jean (1509-1564). Auteur du
						texte </span> </div>
				<div> <span> <b> Éditeur &nbsp;:&nbsp; </b> </span> <span> (Paris) </span> </div>
				<div> <span> <b> Date d'édition&nbsp;:&nbsp; </b> </span> <span> 1854 </span> </div>
				<div> <span> <b> Contributeur &nbsp;:&nbsp; </b> </span> <span> Bonnet, Jules (1820-1892).
						Éditeur scientifique </span> </div>
				<div> <span> <b> Notice d'ensemble&nbsp;:&nbsp; </b> </span> <span> <a
							href="http://catalogue.bnf.fr/ark:/12148/cb30188089q" target="_blank"
							aria-label="http://catalogue.bnf.fr/ark:/12148/cb30188089q (nouvelle fenêtre)">http://catalogue.bnf.fr/ark:/12148/cb30188089q</a>
					</span> </div>
				<div> <span> <b> Type&nbsp;:&nbsp; </b> </span> <span> <span>monographie imprimée</span> </span> </div>
				<div> <span> <b> Langue &nbsp;:&nbsp; </b> </span> <span> français </span> </div>
				<div> <span> <b> Description&nbsp;:&nbsp; </b> </span> <span> <span>Correspondance</span></span> </div>
				<div> <span> <b> Droits &nbsp;:&nbsp; </b> </span> <span> Consultable en ligne </span> </div>
				<div> <span> <b> Identifiant&nbsp;:&nbsp; </b> </span> <span> <a
							href="https://gallica.bnf.fr/ark:/12148/bpt6k209248w" target="_blank"
							aria-label="ark:/12148/bpt6k209248w (nouvelle fenêtre)">ark:/12148/bpt6k209248w</a>
					</span> </div>
				<div> <span> <b> Source &nbsp;:&nbsp; </b> </span> <span> Bibliothèque nationale de France
					</span> </div>
				<div> <span> <b> Provenance&nbsp;:&nbsp; </b> </span> <span> Bibliothèque nationale de France
					</span> </div>
				<div> <span> <b> Date de mise en ligne &nbsp;:&nbsp; </b> </span> <span> 15/10/2007 </span>
				</div>
			</div>
			</div>
	 	</div>
		<div class="content" style="border:none;" id="diplomatic">
			<div id="btnsfr"
			style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;">
				<button class="btn-row" id="voir0" onclick="seediplo()">Cacher la version texte</button>
				<a id="dwl-xml1" 
					href={xmlfile}
					download><button class="btn-row" type="button"><i class="fa fa-download"></i><span> XML-TEI
						</span></button></a>
				<button id="agrandir0" title="agrandir pour imprimer" onclick="fulldiplo()"
					class="glyphicon glyphicon-fullscreen btn-row">
				</button>
				<button class="btn-row" id="reduire0" title="réduire" style="display:none" onclick="goBackdiplo()"><span
						style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span
						style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button>
			</div>
		  </div>
	</div>
</div>
       <!-- Modernisation -->
	   <div class="inner-cont cartav3" style="-webkit-order: 3;order: 3;">

		<header class="mdc-top-app-bar"
			style="position: relative!important;  background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%);border-radius: 20px; width: 99%; margin-left: auto; margin-right: auto;">
			<div class="mdc-top-app-bar__row">
				<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start;">
					<span class="mdc-top-app-bar__title" style="color: #676767 !important;">
						Modernisation
					</span>
				</section>

				<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">

					<span
						class="visualizar3 mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
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
							class="material-icons mdc-top-app-bar__action-item mdc-icon-button openMenu3 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
							style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;"
							aria-label="Opciones" title="Cliquer pour changer l'ordre des versions">more_vert
							<span class="mdc-icon-button__ripple"></span>
						</span>
						<div class="mdc-menu mdc-menu-surface mdc-elevation--z4 mdc-menu3"
							style=" padding-left: 8px !important; background-color: #E5D2C3; z-index: 1;"
							tabindex="-1">
							<div class="mdc-list list-principal" role="menu" aria-hidden="true" aria-orientation="vertical">
								
								<p class="mdc-list-item mdc-ripple-upgraded arriba" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text">Au-dessus</span>
								</p>
								<p class="mdc-list-item mdc-ripple-upgraded abajo" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text">En-dessous</span>
								</p>
								<p class="mdc-list-item mdc-ripple-upgraded derecha" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text">À droite</span>
								</p>
								<p class="mdc-list-item mdc-ripple-upgraded izquierda" tabindex="-1">
									<span class="mdc-list-item__ripple"></span>
									<span class="cmover mdc-list-item__primary-text" >À gauche</span>
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

<!--ça aussi-->
		<div class="content visualizar3grupo listagrupo3" style="display:block!important; width: 97%!important; margin-left: auto!important; margin-right: auto!important;padding: 0 !important;"> 
		<div class="content" style="border:none;display:block" id="transformedFR" onscroll="synchro()">
			<div id="btnsfr"
			style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;">
				<button id="voir" class="btn-row" onclick="see()">Voir les modifications</button>
				<a id="dwl-xml1" 
					href={xmlfile}
					download><button class="btn-row" type="button"><i class="fa fa-download"></i><span> XML-TEI
						</span></button></a>
				<button id="agrandir" title="agrandir pour imprimer" onclick="full()"
					class="glyphicon glyphicon-fullscreen btn-row">
				</button>
				<button class="btn-row" id="reduire" title="réduire" onclick="goBackToNormal()"
					style="display:none;"><span
						style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span
						style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button>
			</div>
		</div>
		<div class="content" style="border:none;" id="see-changes">
			<div id="btnsfr"
			style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;">
				<button class="btn-row" id="voir1" onclick="see()">Cacher les modifications</button>

				<button id="agrandir1" title="agrandir pour imprimer" onclick="full1()"
					class="glyphicon glyphicon-fullscreen btn-row">
				</button>
				<button class="btn-row" id="reduire1" title="réduire" style="display:none" onclick="goBack()"><span
						style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span
						style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button>
			</div>
		  </div>

		</div>
	</div>

	<!-- Traduction ES-->
	<div class="inner-cont cartav4" style="-webkit-order: 4;order: 4;">
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
		<div class="content visualizar4grupo listagrupo4" style="display:block!important;width: 97%!important; margin-left: auto!important; margin-right: auto!important;" id="transformedES"
			onscroll="synchro1()">
			<div id="btnsfr"
			style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;">

				<a id="dwl-xml2" style="color:black;"
					href={xmlfileEs}
					download><button class="btn-row" type="button"><i class="fa fa-download"></i><span> XML-TEI
						</span></button></a>
				<button id="agrandirES" title="agrandir pour imprimer" onclick="fullES()"
					class="glyphicon glyphicon-fullscreen btn-row">
				</button>
				<button class="btn-row" id="reduireES" title="réduire" onclick="goBackES()"
					style="display:none"><span
						style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span
						style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button>
			</div>
		</div>
	</div> 
<!--code for toggle content from W3School (adapted)-->
</div>
	  <script>
	  var panelFR = document.getElementById("transformedFR");
	  var panelES= document.getElementById("transformedES");
	  
	  function synchro(){                          //add onscroll="synchro()" in concerned div, i.e. #transformedFR 
		  if(panelES.style.display==="block"){
				  var scroll1 = panelFR.scrollTop;
				  panelES.scrollTop = scroll1;
			  }
	  }
	  function synchro1(){
		  if(panelFR.style.display==="block"){
				  var scroll2 = panelES.scrollTop;
				  panelFR.scrollTop = scroll2;
			  }
	  }
	  
	  </script>
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
	
		  var visualizar1BotEl = document.querySelector('.visualizar1');
		  var visualizar1Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(visualizar1BotEl);
		  var visualizar1GrupoEl = document.querySelector('.visualizar1grupo');
		  visualizar1BotEl.addEventListener('click', () => {
			  if (visualizar1GrupoEl.style.display == 'block') {
				  visualizar1GrupoEl.style.display = 'none';
			  }
			  else {
				  visualizar1GrupoEl.style.display = 'block';
			  }
		  });
		  var visualizar2BotEl = document.querySelector('.visualizar2');
		  var visualizar2Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(visualizar2BotEl);
		  var visualizar2GrupoEl = document.querySelector('.visualizar2grupo');
		  visualizar2BotEl.addEventListener('click', () => {
			  if (visualizar2GrupoEl.style.display == 'block') {
				  visualizar2GrupoEl.style.display = 'none';
			  }
			  else {
				  visualizar2GrupoEl.style.display = 'block';
			  }
		  });
		  var visualizar3BotEl = document.querySelector('.visualizar3');
		  var visualizar3Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(visualizar3BotEl);
		  var visualizar3GrupoEl = document.querySelector('.visualizar3grupo');
		  visualizar3BotEl.addEventListener('click', () => {
			  if (visualizar3GrupoEl.style.display == 'block') {
				  visualizar3GrupoEl.style.display = 'none';
			  }
			  else {
				  visualizar3GrupoEl.style.display = 'block';
			  }
		  });
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
	  <script>
	 
		  // declaring varibles
	
		  var up=document.querySelectorAll(".arriba"),
			  down=document.querySelectorAll(".abajo"),
			  right=document.querySelectorAll(".derecha"),
			  left=document.querySelectorAll(".izquierda"),
			  diag=document.querySelectorAll(".diagonal"),
			  choix=document.querySelectorAll(".icono-opciones1");
	
			  var manu=document.getElementById("manu"),
			  bonnet=document.getElementById("bonnet"),
			  mod=document.getElementById("mod"),
			  es=document.getElementById("es");
			  var all = document.getElementsByClassName("inner-cont");
	
		  //hiding the options that need to be hidden on drop-down menu for move div around
		  for(opt of choix){opt.addEventListener('click',check)};
		  function check(){
			  for(var i=0; i < up.length;i++){
				  var st = up[i].closest('.inner-cont').style.order;
					  if(st==1||st==2){
						up[i].style.display="none";
				  }else{up[i].style.display="block"}
			  }
			  for(var i=0; i < down.length;i++){
				  var st = down[i].closest('.inner-cont').style.order;
					  if(st==3||st==4){
						down[i].style.display="none";
				  }else{down[i].style.display="block"}
			  }
			  for(var i=0; i < right.length;i++){
				  var st = right[i].closest('.inner-cont').style.order;
					  if(st==2||st==4){
						right[i].style.display="none";
				  }else{right[i].style.display="block"}
			  }
			  for(var i=0; i < left.length;i++){
				  var st = left[i].closest('.inner-cont').style.order;
					  if(st==1||st==3){
						left[i].style.display="none";
				  }else{left[i].style.display="block"}
			  }
			  
		  } 
		  //z-index ufff
		  for(opt of choix){opt.addEventListener('click',function(){
					  ////console.log(all);
					  for (el of all){
						  ////console.log(el);
						  var z = el.style;
						
					 if(el.style.order==1){z.setProperty("z-index","5");}
					 if(el.style.order==2){z.setProperty("z-index","4");}
					 if(el.style.order==3){z.setProperty("z-index","3");}
					 if(el.style.order==4){z.setProperty("z-index","2");}
					
	
					////console.log(el.style.getPropertyValue("z-index"))
				  }});  
						;}
		  
	// algorythm for each one of the options (up, down, right, left, diagonal)                          
		   //up    
			  for(var i=0; i < up.length;i++){
				   
			   up[i].addEventListener('click', function(){
					  ////console.log(this);
				  /* var innerDiv= this.closest("header").nextElementSibling;*/
				  var div = this.closest(".inner-cont");
				  /*//console.log(innerDiv);*/
	
	var order = div.style.order;            
	////console.log(order);
	var thisOrder ="";
	var nerOr ="";
	for (var e=0,el; el = all[e];e++){
	 if(order==3){
		  if (el.style.order==order){
		  thisOrder= el;
		  ////console.log(thisOrder);
		 }
		  if(el.style.order==1){
		 nerOr = el; ////console.log(nerOr);
	  }
	  }
	  else if(order==4){
		  if (el.style.order==order){
		  thisOrder= el;
		  ////console.log(thisOrder);
		 }
		  if(el.style.order==2){
		 nerOr = el; ////console.log(nerOr);
	  }
	  }
	 
	}
	nerOr.style.order=order; 
	  thisOrder.style.order=order-2;
	
	  //console.log(nerOr,nerOr.style.order);
	  //console.log(thisOrder,thisOrder.style.order);
	
	})            
	}
	
	//down 
	for(var i=0; i < down.length;i++){
				   
				   down[i].addEventListener('click', function(){
						  //console.log(this);
					  /* var innerDiv= this.closest("header").nextElementSibling;*/
					  var div = this.closest(".inner-cont");
					  /*//console.log(innerDiv);*/
		
	  var order = div.style.order;            
	  //console.log(order);
	  var thisOrder ="";
	  var nerOr ="";
	  for (var e=0,el; el = all[e];e++){
		 if(order==1){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==3){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		  else if(order==2){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==4){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		 
	  }
	  thisOrder.style.order=nerOr.style.order;
	  nerOr.style.order=order; 
		  
	
		  //console.log(nerOr,nerOr.style.order);
	  //console.log(thisOrder,thisOrder.style.order);
	
	
	   })             
	}
	
	//right
	for(var i=0; i < right.length;i++){
				   
				   right[i].addEventListener('click', function(){
						  //console.log(this);
					  /* var innerDiv= this.closest("header").nextElementSibling;*/
					  var div = this.closest(".inner-cont");
					  /*//console.log(innerDiv);*/
		
	  var order = div.style.order;            
	  //console.log(order);
	  var thisOrder ="";
	  var nerOr ="";
	  for (var e=0,el; el = all[e];e++){
		 if(order==1){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==2){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		  else if(order==3){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==4){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		 
	  }
	  thisOrder.style.order=nerOr.style.order;
	  nerOr.style.order=order; 
	
		  //console.log(nerOr,nerOr.style.order);
	  //console.log(thisOrder,thisOrder.style.order);
	
	   })            
	}  
	
	//left
	for(var i=0; i < left.length;i++){
				   
				   left[i].addEventListener('click', function(){
						  //console.log(this);
					  /* var innerDiv= this.closest("header").nextElementSibling;*/
					  var div = this.closest(".inner-cont");
					  /*//console.log(innerDiv);*/
		
	  var order = div.style.order;            
	  //console.log(order);
	  var thisOrder ="";
	  var nerOr ="";
	  for (var e=0,el; el = all[e];e++){
		 if(order==2){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==1){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		  else if(order==4){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==3){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		 
	  }
	  nerOr.style.order=order; 
		  thisOrder.style.order=order-1;
	
		  //console.log(nerOr,nerOr.style.order);
		  //console.log(thisOrder,thisOrder.style.order);
	
	   })            
	}
	//diag
	for(var i=0; i < diag.length;i++){
				   
				   diag[i].addEventListener('click', function(){
						  //console.log(this);
					  /* var innerDiv= this.closest("header").nextElementSibling;*/
					  var div = this.closest(".inner-cont");
					  /*//console.log(innerDiv);*/
		
	  var order = div.style.order;            
	  //console.log(order);
	  var thisOrder ="";
	  var nerOr ="";
	  for (var e=0,el; el = all[e];e++){
		 if(order==1){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==4){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		  else if(order==2){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==3){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		  if(order==3){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==2){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
		  if(order==4){
			  if (el.style.order==order){
			  thisOrder= el;
			  //console.log(thisOrder);
			 }
			  if(el.style.order==1){
			 nerOr = el; //console.log(nerOr);
		  }
		  }
	  }
	  thisOrder.style.order=nerOr.style.order;
	  nerOr.style.order=order; 
	
		  //console.log(nerOr,nerOr.style.order);
		  //console.log(thisOrder,thisOrder.style.order);
	
	   })            
	}
	
	  </script>

	<script src="{base}/functionsLetters.js"/>
</article>
</div>
<style>
	a.tag{
		padding: .3rem;
		border: .5px solid lightgray;
		box-shadow: 1px 1px 1px lightgray;
	}
</style>


