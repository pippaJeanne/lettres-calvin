import { c as create_ssr_component, s as subscribe, e as escape, a as each, b as add_attribute } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { b as biblMs } from "../../../../../chunks/bibl.js";
/* empty css                         */
import { b as base } from "../../../../../chunks/paths.js";
import { t as transc } from "../../../../../chunks/transcriptions.js";
const css = {
  code: "a.tag.svelte-avw8fg{padding:.3rem;border:.5px solid lightgray;box-shadow:1px 1px 1px lightgray}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let uri = $page.url.pathname.split("/");
  let slug = uri[uri.length - 1];
  const lang = $page.params.lang;
  let slugOk = "";
  if (lang === "fr" && slug !== "carta") {
    slugOk = slug;
  }
  let { id, url, title, date, categories, editor, bibliothequeMs, srcMs, srcB, coteMs, foliosB, tags, desc } = data.letters[slugOk];
  let cartas = data.letters["cartas"];
  let xmlEs = "";
  for (let carta of cartas) {
    if (id === carta.source) {
      xmlEs = carta.url;
    }
  }
  const biblMsCheck = () => {
    let newarray = [];
    if (bibliothequeMs.toLowerCase().includes("bibliothèque de genève")) {
      srcMs.map((src) => {
        newarray.push({ type: "image", url: src });
      });
      return newarray;
    } else {
      return srcMs;
    }
  };
  let split = coteMs.split(" (");
  let coteok = split[0];
  let { biblMsInfo = biblMs[bibliothequeMs][coteok] } = $$props;
  biblMsInfo === void 0 ? biblMsInfo = "Non trouvé" : null;
  const xmlfile = base + "/api/xml/" + url;
  const xmlfileEs = base + "/api/xml/" + xmlEs;
  const xsltfile = `${base}/xslt/Transfm-fr.xslt`;
  const xsltchng = `${base}/xslt/Transfm-Fr-voir-changements.xslt`;
  const xsltdiplo = `${base}/xslt/Transfm-diplomatique.xslt`;
  const xsltes = `${base}/xslt/Transfm-es.xslt`;
  async function displayResult() {
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
  async function displayResultChng() {
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
  async function displayDiplomatic() {
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
  async function displayResultEs() {
    const parser = new DOMParser();
    const xsltProcessor = new XSLTProcessor();
    let xmles;
    let xsles;
    if (xmlEs !== "") {
      xmles = await fetch(xmlfileEs);
      xsles = await fetch(xsltes);
    } else {
      xmles = await fetch(
        /*} else if(title.includes("Madame") && date.includes("1543")){
        xmles = await fetch(xmlfileEs);
        xsles = await fetch(xsltes); */
        xmlfile
      );
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
  const slugslist = Object.keys(transc);
  const createLinkTransc = () => {
    let link2transc;
    slugslist.map((slug2) => {
      if (slugslist.indexOf(slugOk) !== -1) {
        if (slug2 === slugOk) {
          link2transc = document.createElement("p");
          let a = document.createElement("a");
          a.style.textDecoration = "underline";
          a.href = `${base}/transcription/${slugOk}`;
          a.textContent = "Voir transcription diplomatique des fueillets manuscrits de cette lettre";
          link2transc.appendChild(a);
        }
      }
    });
    return link2transc;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.biblMsCheck === void 0 && $$bindings.biblMsCheck && biblMsCheck !== void 0) $$bindings.biblMsCheck(biblMsCheck);
  if ($$props.biblMsInfo === void 0 && $$bindings.biblMsInfo && biblMsInfo !== void 0) $$bindings.biblMsInfo(biblMsInfo);
  if ($$props.xmlfile === void 0 && $$bindings.xmlfile && xmlfile !== void 0) $$bindings.xmlfile(xmlfile);
  if ($$props.xmlfileEs === void 0 && $$bindings.xmlfileEs && xmlfileEs !== void 0) $$bindings.xmlfileEs(xmlfileEs);
  if ($$props.xsltfile === void 0 && $$bindings.xsltfile && xsltfile !== void 0) $$bindings.xsltfile(xsltfile);
  if ($$props.xsltchng === void 0 && $$bindings.xsltchng && xsltchng !== void 0) $$bindings.xsltchng(xsltchng);
  if ($$props.xsltdiplo === void 0 && $$bindings.xsltdiplo && xsltdiplo !== void 0) $$bindings.xsltdiplo(xsltdiplo);
  if ($$props.xsltes === void 0 && $$bindings.xsltes && xsltes !== void 0) $$bindings.xsltes(xsltes);
  if ($$props.displayResult === void 0 && $$bindings.displayResult && displayResult !== void 0) $$bindings.displayResult(displayResult);
  if ($$props.displayResultChng === void 0 && $$bindings.displayResultChng && displayResultChng !== void 0) $$bindings.displayResultChng(displayResultChng);
  if ($$props.displayDiplomatic === void 0 && $$bindings.displayDiplomatic && displayDiplomatic !== void 0) $$bindings.displayDiplomatic(displayDiplomatic);
  if ($$props.displayResultEs === void 0 && $$bindings.displayResultEs && displayResultEs !== void 0) $$bindings.displayResultEs(displayResultEs);
  if ($$props.createLinkTransc === void 0 && $$bindings.createLinkTransc && createLinkTransc !== void 0) $$bindings.createLinkTransc(createLinkTransc);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-dey73u_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" data-svelte-h="svelte-1s0v7l9"><\/script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" data-svelte-h="svelte-tblfyy"><\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- HEAD_svelte-dey73u_END -->`, ""} <div id="anchor"><article><h1>${escape(title)}</h1> <p><span class="tag">Date : ${escape(date)}</span></p> <p><span class="tag">${escape(editor)}</span></p>  <div>${each(categories, (cat) => {
    return `<a class="tag svelte-avw8fg" style="text-decoration:none;" href="${escape(base, true) + "/fr/categories/" + escape(cat.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a"), true)}"><span>${escape(cat)}</span> </a>`;
  })}</div> <div>${each(tags, (tag) => {
    return `<a class="tag svelte-avw8fg" style="text-decoration:none;" href="${escape(base, true) + "/fr/tags/" + escape(tag.replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a"), true)}"><span>${escape(tag)}</span> </a>`;
  })}</div> <div id="lienTransc"></div> <p style="text-align: center !important;font-size: 1.2rem;">${escape(desc)}</p>  <p style="font-size: .9rem;" data-svelte-h="svelte-kat8ia">Vous trouverez ci-après quatre versions de cette lettre : le manuscrit de la plus ancienne copie connue, l&#39;édition de Jules Bonnet parue en 1854, une version en français moderne et une traduction vers l&#39;espagnol que vous pouvez parcourrir et comparer. Il suffit de cliquer sur les boutons pour ouvrir (ou fermer) les tiroirs.</p> <div class="sec-container"> <div class="inner-cont cartav1" style="-webkit-order: 1;order: 1;"><header class="mdc-top-app-bar" style="position: relative!important; background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%);border-radius: 20px; width: 99%; margin-left: auto; margin-right: auto;" data-svelte-h="svelte-wek3rw"><div class="mdc-top-app-bar__row"><section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start;"><span class="mdc-top-app-bar__title" style="color: #676767 !important;">Manuscrit</span></section> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"><span class="visualizar1 mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Visualizar" title="Visualizar" data-aria-label-on="Ocultar" data-aria-label-off="Mostrar" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 28px; --mdc-ripple-fg-scale: 1.7142857142857142; --mdc-ripple-left: 10px; --mdc-ripple-top: 10px;"><div class="mdc-icon-button__ripple"></div> <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_up</i> <i class="material-icons mdc-icon-button__icon">arrow_drop_down</i></span> <div class="openMenu mdc-top-app-bar__action-item mdc-menu-surface--anchor icono-opciones1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="--mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;"><span class="material-icons mdc-top-app-bar__action-item mdc-icon-button openMenu1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;" aria-label="Opciones" title="Cliquer pour changer l'ordre des versions">more_vert
                                <span class="mdc-icon-button__ripple"></span></span> <div class="mdc-menu mdc-menu-surface mdc-elevation--z4 mdc-menu1" style="padding-left: 8px !important; background-color: #E5D2C3; z-index: 1;" tabindex="-1"><div class="mdc-list list-principal" role="menu" aria-hidden="true" aria-orientation="vertical"><p class="mdc-list-item mdc-ripple-upgraded arriba" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">Au-dessus</span></p> <p class="mdc-list-item mdc-ripple-upgraded abajo" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">En-dessous</span></p> <p class="mdc-list-item mdc-ripple-upgraded derecha" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">À droite</span></p> <p class="mdc-list-item mdc-ripple-upgraded izquierda" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">À gauche</span></p> <p class="mdc-list-item mdc-ripple-upgraded diagonal" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">En biais</span></p></div></div></div></section></div></header> <div class="ancho-col content visualizar1grupo" style="display:none!important; width: 97%!important; margin-left: auto!important; margin-right: auto!important;"><div id="openseadragon1" style="width: 98%; height: 500px;background-color: #fcfcfc; display: block; margin-left: auto; margin-right: auto;" data-svelte-h="svelte-1sosb1f"></div> <div><h6>${escape(coteMs)}</h6> <div id="msInfo"></div></div></div></div>  <script data-svelte-h="svelte-17ok25f">function syncNotes(){
		let notes = document.querySelectorAll('.diplomatic');
let singleNotes = document.querySelectorAll('sup.diplo');
for (var note of notes){
	var textOk = "";
	var txt = [];
	var text = note.querySelectorAll('span:last-child p span');
	for (var t of text){
		t.textContent.replaceAll("\\n", "")
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
			link.setAttribute("href",\`#\${name}\`);
			var string = href?.split('#');
			var nom = string[1];
			link?.setAttribute("name", nom);
			link.textContent = n;
		}
	}
}};<\/script> <div class="inner-cont cartav2" style="-webkit-order: 2;order: 2;" onmouseover="syncNotes()"><header class="mdc-top-app-bar" style="position: relative!important; background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%);border-radius: 20px; width: 99%; margin-left: auto; margin-right: auto;" data-svelte-h="svelte-9wfiol"><div class="mdc-top-app-bar__row"><section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start;"><span class="mdc-top-app-bar__title" style="color: #676767 !important;">Édition de Jules Bonnet</span></section> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"><span class="visualizar2 mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Visualizar" title="Visualizar" data-aria-label-on="Ocultar" data-aria-label-off="Mostrar" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 28px; --mdc-ripple-fg-scale: 1.7142857142857142; --mdc-ripple-left: 10px; --mdc-ripple-top: 10px;"><div class="mdc-icon-button__ripple"></div> <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_up</i> <i class="material-icons mdc-icon-button__icon">arrow_drop_down</i></span> <div class="openMenu mdc-top-app-bar__action-item mdc-menu-surface--anchor icono-opciones1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="--mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;"><span class="material-icons mdc-top-app-bar__action-item mdc-icon-button openMenu2 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;" aria-label="Opciones" title="Cliquer pour changer l'ordre des versions">more_vert
						<span class="mdc-icon-button__ripple"></span></span> <div class="mdc-menu mdc-menu-surface mdc-elevation--z4 mdc-menu2" style="padding-left: 8px !important; background-color: #E5D2C3; z-index: 1;" tabindex="-1"><div class="mdc-list list-principal" role="menu" aria-hidden="true" aria-orientation="vertical"><p class="mdc-list-item mdc-ripple-upgraded arriba" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">Au-dessus</span></p> <p class="mdc-list-item mdc-ripple-upgraded abajo" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">En-dessous</span></p> <p class="mdc-list-item mdc-ripple-upgraded derecha" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">À droite</span></p> <p class="mdc-list-item mdc-ripple-upgraded izquierda" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">À gauche</span></p> <p class="mdc-list-item mdc-ripple-upgraded diagonal" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">En biais</span></p></div></div></div></section></div></header> <div class="ancho-col content visualizar2grupo" style="display:none!important; width: 97%!important; margin-left: auto!important; margin-right: auto!important;"><div class="content" id="bonnet" style="display:block;border:none;"><div id="btnsfr" style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;" data-svelte-h="svelte-17d6g2n"><button id="voirdiplo" class="btn-row" onclick="seediplo()">Voir la transcription diplomatique</button></div> <div id="openseadragon2" style="width: 98%; height: 500px;background-color: #fcfcfc; display: block; margin-left: auto; margin-right: auto;" data-svelte-h="svelte-8stpq0"></div> <div><h6>Facsimiles ${escape(foliosB)}</h6>  <h3 style="text-align: center;" data-svelte-h="svelte-dsftty">Notice de la bibliothèque</h3> <div data-svelte-h="svelte-y79ahg"><div><span><b>Titre : </b></span> <span>Lettres de Jean Calvin : lettres
						françaises. T. 1 / recueillies pour la première fois et publ. d&#39;après les ms. originaux
						par Jules Bonnet</span></div> <div><span><b>Auteur  : </b></span> <span>Calvin, Jean (1509-1564). Auteur du
						texte</span></div> <div><span><b>Éditeur  : </b></span> <span>(Paris)</span></div> <div><span><b>Date d&#39;édition : </b></span> <span>1854</span></div> <div><span><b>Contributeur  : </b></span> <span>Bonnet, Jules (1820-1892).
						Éditeur scientifique</span></div> <div><span><b>Notice d&#39;ensemble : </b></span> <span><a href="http://catalogue.bnf.fr/ark:/12148/cb30188089q" target="_blank" aria-label="http://catalogue.bnf.fr/ark:/12148/cb30188089q (nouvelle fenêtre)">http://catalogue.bnf.fr/ark:/12148/cb30188089q</a></span></div> <div><span><b>Type : </b></span> <span><span>monographie imprimée</span></span></div> <div><span><b>Langue  : </b></span> <span>français</span></div> <div><span><b>Description : </b></span> <span><span>Correspondance</span></span></div> <div><span><b>Droits  : </b></span> <span>Consultable en ligne</span></div> <div><span><b>Identifiant : </b></span> <span><a href="https://gallica.bnf.fr/ark:/12148/bpt6k209248w" target="_blank" aria-label="ark:/12148/bpt6k209248w (nouvelle fenêtre)">ark:/12148/bpt6k209248w</a></span></div> <div><span><b>Source  : </b></span> <span>Bibliothèque nationale de France</span></div> <div><span><b>Provenance : </b></span> <span>Bibliothèque nationale de France</span></div> <div><span><b>Date de mise en ligne  : </b></span> <span>15/10/2007</span></div></div></div></div> <div class="content" style="border:none;" id="diplomatic"><div id="btnsfr" style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;"><button class="btn-row" id="voir0" onclick="seediplo()" data-svelte-h="svelte-xwdsd3">Cacher la transcription diplomatique</button> <a id="dwl-xml1"${add_attribute("href", xmlfile, 0)} download><button class="btn-row" type="button" data-svelte-h="svelte-bvgoiz"><i class="fa fa-download"></i><span>XML-TEI</span></button></a> <button id="agrandir0" title="agrandir pour imprimer" onclick="fulldiplo()" class="glyphicon glyphicon-fullscreen btn-row" data-svelte-h="svelte-dsbtx3"></button> <button class="btn-row" id="reduire0" title="réduire" style="display:none" onclick="goBackdiplo()" data-svelte-h="svelte-mn43jo"><span style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button></div></div></div></div>  <div class="inner-cont cartav3" style="-webkit-order: 3;order: 3;"><header class="mdc-top-app-bar" style="position: relative!important; background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%);border-radius: 20px; width: 99%; margin-left: auto; margin-right: auto;" data-svelte-h="svelte-yz7biz"><div class="mdc-top-app-bar__row"><section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start;"><span class="mdc-top-app-bar__title" style="color: #676767 !important;">Modernisation</span></section> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"><span class="visualizar3 mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Ocultar" title="ocultar" data-aria-label-on="Visualizar" data-aria-label-off="Mostrar" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 28px; --mdc-ripple-fg-scale: 1.7142857142857142; --mdc-ripple-left: 10px; --mdc-ripple-top: 10px;"><div class="mdc-icon-button__ripple"></div> <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_down</i> <i class="material-icons mdc-icon-button__icon">arrow_drop_up</i></span> <div class="openMenu mdc-top-app-bar__action-item mdc-menu-surface--anchor icono-opciones1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="--mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;"><span class="material-icons mdc-top-app-bar__action-item mdc-icon-button openMenu3 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;" aria-label="Opciones" title="Cliquer pour changer l'ordre des versions">more_vert
							<span class="mdc-icon-button__ripple"></span></span> <div class="mdc-menu mdc-menu-surface mdc-elevation--z4 mdc-menu3" style="padding-left: 8px !important; background-color: #E5D2C3; z-index: 1;" tabindex="-1"><div class="mdc-list list-principal" role="menu" aria-hidden="true" aria-orientation="vertical"><p class="mdc-list-item mdc-ripple-upgraded arriba" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">Au-dessus</span></p> <p class="mdc-list-item mdc-ripple-upgraded abajo" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">En-dessous</span></p> <p class="mdc-list-item mdc-ripple-upgraded derecha" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">À droite</span></p> <p class="mdc-list-item mdc-ripple-upgraded izquierda" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">À gauche</span></p> <p class="mdc-list-item mdc-ripple-upgraded diagonal" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">En biais</span></p></div></div></div></section></div></header>  <div class="content visualizar3grupo listagrupo3" style="display:block!important; width: 97%!important; margin-left: auto!important; margin-right: auto!important;padding: 0 !important;"><div class="content" style="border:none;display:block" id="transformedFR" onscroll="synchro()"><div id="btnsfr" style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;"><button id="voir" class="btn-row" onclick="see()" data-svelte-h="svelte-xi67j7">Voir les modifications</button> <a id="dwl-xml1"${add_attribute("href", xmlfile, 0)} download><button class="btn-row" type="button" data-svelte-h="svelte-bvgoiz"><i class="fa fa-download"></i><span>XML-TEI</span></button></a> <button id="agrandir" title="agrandir pour imprimer" onclick="full()" class="glyphicon glyphicon-fullscreen btn-row" data-svelte-h="svelte-fsllid"></button> <button class="btn-row" id="reduire" title="réduire" onclick="goBackToNormal()" style="display:none;" data-svelte-h="svelte-t8gbzq"><span style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button></div></div> <div class="content" style="border:none;" id="see-changes" data-svelte-h="svelte-txiuz"><div id="btnsfr" style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;"><button class="btn-row" id="voir1" onclick="see()">Cacher les modifications</button> <button id="agrandir1" title="agrandir pour imprimer" onclick="full1()" class="glyphicon glyphicon-fullscreen btn-row"></button> <button class="btn-row" id="reduire1" title="réduire" style="display:none" onclick="goBack()"><span style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button></div></div></div></div>  <div class="inner-cont cartav4" style="-webkit-order: 4;order: 4;"><header class="mdc-top-app-bar" style="position: relative!important; background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%);border-radius: 20px; width: 99%; margin-left: auto; margin-right: auto;" data-svelte-h="svelte-wak1u9"><div class="mdc-top-app-bar__row"><section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start;"><span class="mdc-top-app-bar__title" style="color: #676767 !important;">Traduction espagnole</span></section> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"><span class="visualizar4 mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Ocultar" title="ocultar" data-aria-label-on="Visualizar" data-aria-label-off="Mostrar" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 28px; --mdc-ripple-fg-scale: 1.7142857142857142; --mdc-ripple-left: 10px; --mdc-ripple-top: 10px;"><div class="mdc-icon-button__ripple"></div> <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_down</i> <i class="material-icons mdc-icon-button__icon">arrow_drop_up</i></span> <div class="openMenu mdc-top-app-bar__action-item mdc-menu-surface--anchor icono-opciones1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="--mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;"><span class="material-icons mdc-top-app-bar__action-item mdc-icon-button openMenu4 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;" aria-label="Opciones" title="Cliquer pour changer l'ordre des versions">more_vert
							<span class="mdc-icon-button__ripple"></span></span> <div class="mdc-menu mdc-menu-surface mdc-elevation--z4 mdc-menu4" style="padding-left: 8px !important; background-color: #E5D2C3; z-index: 1;" tabindex="-1"><div class="mdc-list list-principal" role="menu" aria-hidden="true" aria-orientation="vertical"><p class="mdc-list-item mdc-ripple-upgraded arriba" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">Au-dessus</span></p> <p class="mdc-list-item mdc-ripple-upgraded abajo" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">En-dessous</span></p> <p class="mdc-list-item mdc-ripple-upgraded derecha" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">À droite</span></p> <p class="mdc-list-item mdc-ripple-upgraded izquierda" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">À gauche</span></p> <p class="mdc-list-item mdc-ripple-upgraded diagonal" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="cmover mdc-list-item__primary-text">En biais</span></p></div></div></div></section></div></header> <div class="content visualizar4grupo listagrupo4" style="display:block!important;width: 97%!important; margin-left: auto!important; margin-right: auto!important;" id="transformedES" onscroll="synchro1()"><div id="btnsfr" style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;"><a id="dwl-xml2" style="color:black;"${add_attribute("href", xmlfileEs, 0)} download><button class="btn-row" type="button" data-svelte-h="svelte-bvgoiz"><i class="fa fa-download"></i><span>XML-TEI</span></button></a> <button id="agrandirES" title="agrandir pour imprimer" onclick="fullES()" class="glyphicon glyphicon-fullscreen btn-row" data-svelte-h="svelte-144bccp"></button> <button class="btn-row" id="reduireES" title="réduire" onclick="goBackES()" style="display:none" data-svelte-h="svelte-1shjb81"><span style="border:solid #555;border-width:0 3px 3px 0;display: inline-block;padding: 3px;transform:rotate(-45deg)"></span><span style="border:solid #555;border-width:3px 0 0 3px;display: inline-block;padding: 3px;transform:rotate(-45deg);"></span></button></div></div></div> </div> <script data-svelte-h="svelte-vk4tky">var panelFR = document.getElementById("transformedFR");
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
	  }<\/script> <script src="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.js" data-svelte-h="svelte-eie54p"><\/script> <script type="text/javascript" data-svelte-h="svelte-15hkw41">/** Initialize MDC Web components. */
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
		  });<\/script> <script data-svelte-h="svelte-1fzf010">// declaring varibles
	
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
	}<\/script> <script src="${escape(base, true) + "/functionsLetters.js"}"><\/script></article> </div>`;
});
export {
  Page as default
};
