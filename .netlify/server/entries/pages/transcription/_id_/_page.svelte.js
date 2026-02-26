import { c as create_ssr_component, s as subscribe, e as escape, a as each, n as null_to_empty } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { b as biblMs } from "../../../../chunks/bibl.js";
/* empty css                      */
/* empty css                       */
import { b as base } from "../../../../chunks/paths.js";
import { t as transc } from "../../../../chunks/transcriptions.js";
const css = {
  code: "header.svelte-1k63mlb.svelte-1k63mlb{margin-bottom:3rem}a.svelte-1k63mlb.svelte-1k63mlb{text-decoration:none;color:black}.zIndex.svelte-1k63mlb.svelte-1k63mlb{z-index:1050}.tabs_buttons.svelte-1k63mlb.svelte-1k63mlb{position:relative!important;background-image:linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%)!important;border-radius:20px;width:100%;margin-left:auto;margin-right:auto;height:2.5rem}.tabs_buttons.svelte-1k63mlb button.svelte-1k63mlb{background-color:inherit;float:right;border:none;outline:none;cursor:pointer;padding:14px 16px;transition:0.3s;font-size:1rem;color:#aaa}.tab_left.svelte-1k63mlb.svelte-1k63mlb,.tab_right.svelte-1k63mlb.svelte-1k63mlb{width:50%}.tabs_buttons.svelte-1k63mlb button.svelte-1k63mlb:hover{background-color:#ddd}.tabcontent.svelte-1k63mlb.svelte-1k63mlb{display:none;padding:6px 12px;height:100vh;overflow:scroll;padding:1.5rem;width:100%}.tabcontent1.svelte-1k63mlb.svelte-1k63mlb{display:none;padding:6px 12px;height:100vh;overflow:scroll;padding:1.5rem;border-left:1px solid #ccc;width:100%}.tabcontent.svelte-1k63mlb.svelte-1k63mlb{animation:svelte-1k63mlb-fadeEffect 1s}@keyframes svelte-1k63mlb-fadeEffect{from{opacity:0}to{opacity:1}}.slideshow-container.svelte-1k63mlb.svelte-1k63mlb{max-width:1700px;position:relative;margin:auto}#prev.svelte-1k63mlb.svelte-1k63mlb,#next.svelte-1k63mlb.svelte-1k63mlb,#prev1.svelte-1k63mlb.svelte-1k63mlb,#next1.svelte-1k63mlb.svelte-1k63mlb{cursor:pointer;position:absolute;top:50%;width:auto;padding:16px;margin-top:-22px;color:rgb(168, 158, 158);font-weight:bold;font-size:18px;transition:0.6s ease;border-radius:0 3px 3px 0;user-select:none}#next.svelte-1k63mlb.svelte-1k63mlb,#next1.svelte-1k63mlb.svelte-1k63mlb{right:3%;border-radius:3px 0 0 3px}#prev.svelte-1k63mlb.svelte-1k63mlb:hover,#next.svelte-1k63mlb.svelte-1k63mlb:hover,#prev1.svelte-1k63mlb.svelte-1k63mlb:hover,#next1.svelte-1k63mlb.svelte-1k63mlb:hover{background-color:rgba(0,0,0,0.8)}.text.svelte-1k63mlb.svelte-1k63mlb{color:#f2f2f2;font-size:15px;padding:8px 12px;position:absolute;bottom:8px;width:100%;text-align:center}.numbertext.svelte-1k63mlb.svelte-1k63mlb{color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.dot.svelte-1k63mlb.svelte-1k63mlb{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color 0.6s ease}.active.svelte-1k63mlb.svelte-1k63mlb{background-color:#717171}.fade.svelte-1k63mlb.svelte-1k63mlb{animation-name:svelte-1k63mlb-fade;animation-duration:1.5s}@keyframes svelte-1k63mlb-fade{from{opacity:.4}to{opacity:1}}@media only screen and (max-width: 300px){#prev.svelte-1k63mlb.svelte-1k63mlb,#next.svelte-1k63mlb.svelte-1k63mlb{font-size:11px}}@media screen and (max-width: 1200px){.tab_left.svelte-1k63mlb.svelte-1k63mlb,.tab_right.svelte-1k63mlb.svelte-1k63mlb{width:100%!important}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let uri = $page.url.pathname.split("/");
  let slug = uri[uri.length - 1];
  let slugOk = "";
  if (slug !== "carta") {
    slugOk = slug;
  }
  let trans_slug;
  const slugslist = Object.keys(transc);
  slugslist.map((slug2) => {
    if (slugslist.indexOf(slugOk) !== -1) {
      if (slug2 === slugOk) {
        trans_slug = slug2;
      }
    }
  });
  const thisTransc = transc[trans_slug];
  const transc_pages = Object.keys(thisTransc);
  const num_dots = transc_pages.length;
  let { id, url, lang, title, date, categories, editor, bibliothequeMs, srcMs, srcB, coteMs, foliosB, tags, desc } = data.letters[slugOk];
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
  const xmlfile = base + url;
  const xsltdiplo = `${base}/xslt/Transfm-diplomatique.xslt`;
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.thisTransc === void 0 && $$bindings.thisTransc && thisTransc !== void 0) $$bindings.thisTransc(thisTransc);
  if ($$props.transc_pages === void 0 && $$bindings.transc_pages && transc_pages !== void 0) $$bindings.transc_pages(transc_pages);
  if ($$props.num_dots === void 0 && $$bindings.num_dots && num_dots !== void 0) $$bindings.num_dots(num_dots);
  if ($$props.biblMsCheck === void 0 && $$bindings.biblMsCheck && biblMsCheck !== void 0) $$bindings.biblMsCheck(biblMsCheck);
  if ($$props.biblMsInfo === void 0 && $$bindings.biblMsInfo && biblMsInfo !== void 0) $$bindings.biblMsInfo(biblMsInfo);
  if ($$props.xmlfile === void 0 && $$bindings.xmlfile && xmlfile !== void 0) $$bindings.xmlfile(xmlfile);
  if ($$props.xsltdiplo === void 0 && $$bindings.xsltdiplo && xsltdiplo !== void 0) $$bindings.xsltdiplo(xsltdiplo);
  if ($$props.displayDiplomatic === void 0 && $$bindings.displayDiplomatic && displayDiplomatic !== void 0) $$bindings.displayDiplomatic(displayDiplomatic);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-16aeiqt_START -->${$$result.title = `<title>Trancription de la ${escape(title)} </title>`, ""}<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" data-svelte-h="svelte-1s0v7l9"><\/script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" data-svelte-h="svelte-tblfyy"><\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link href="https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.css" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/openseadragon.min.js" data-svelte-h="svelte-12tt9cb"><\/script><!-- HEAD_svelte-16aeiqt_END -->`, ""} <div><style data-svelte-h="svelte-joyoq4">.bgim {
    position: fixed !important;
    margin-top: .2rem !important;
    left: 0 !important;
    width: 100% !important;
    height: auto !important;
    opacity: 1 !important;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 0.7) !important;
    border-radius: 3px 3px 10px 10px !important;
}

.bbody {
    display: flex !important;
    min-width: 260px !important;
    /*height: auto;*/
}
.fondoImg{
    height: 300px;
    background-image: url("https://lettres-calvin.rarebook-ubfc.fr/wp-content/uploads/2022/04/FondoEncabezadoPag.jpg"), url("https://lettres-calvin.rarebook-ubfc.fr/wp-content/uploads/2022/04/FondoRepetir.jpg") !important;
    /* Center the image */
    background-color: linear-gradient(180deg, rgba(243,231,214,1) 50%, rgba(255,255,255,1) 100%), linear-gradient(180deg, rgba(243,231,214,1) 50%, rgba(255,255,255,1) 100%) !important;
    background-repeat: no-repeat, repeat !important;
    background-position: right top, left top !important;
    background-size: auto, contain;
 }

.mdc-drawer-app-content {
    flex: auto;
    overflow: auto;
    position: relative;
}

/* MDC drawer list item text */
.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic .mdc-list-item__ripple,

/* MDC drawer list item leading icon */
.mdc-drawer .mdc-list-item--activated

{
    color: #000000;
    background-color: #ECD07C;
}

.mdc-drawer {
    flex: auto;
    overflow: auto;
    position: fixed;
    top: 45px;
    left: 3px !important;
}

.main-content {
    overflow: auto !important;
    height: 100% !important;
}

.list-principal {
    margin: 5px 5px auto 5px !important;
}

.mdc-list-item {
    border-radius: 6px !important;
    justify-content: left !important;
    padding: 5px 0px 5px 5px !important;

}
.mdc-list-item__tex {        
    padding: 5px 0px 5px 5px !important;
}

.submenu1grupo {
    margin: 0px 0px 0px 5px !important;
    padding: 0px !important;
}

.listagrupo1 {
    margin: 0px !important;
    padding: 0px !important;
}

.submenu2grupo {
    margin: 0px 0px 0px 5px !important;
    padding: 0px !important;
}

.listagrupo2 {
    margin: 0px !important;
    padding: 0px !important;
}
.ajuste3 {
    background-color: none !important;
    padding: 8px 20px !important;
}

#Layer_1 path{fill:black;}
/*:root {}*/

/*// Only apply this style if below top app bar. */
.mdc-top-app-bar {z-index: 6;}</style> <div class="bbody"><header class="bgim mdc-top-app-bar mdc-top-app-bar-estilo svelte-1k63mlb" id="app-bar" style="background-image: linear-gradient(rgb(243, 231, 214) 75%, rgb(255, 255, 255) 100%); min-width: 300px !important; top: 0px;"><div class="mdc-top-app-bar__row"><section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start ajuste1"><span class="mdc-top-app-bar__title ajuste2" style="display: flex;"><a id="siteTitle" href="${escape(base, true) + "/" + escape(lang, true)}" class="svelte-1k63mlb"><h3 class="tit1" data-svelte-h="svelte-1ghm9dq">Lettres de Calvin</h3></a></span></section></div></header></div> <script src="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.js" data-svelte-h="svelte-ky31na"><\/script> <script type="text/javascript" data-svelte-h="svelte-13l9zi1">/** Initialize MDC Web components. */
  // Instantiation
  window.mdc.autoInit();
  
  var buttons = document.querySelectorAll('.mdc-button, .mdc-fab');
  for (var i = 0, button; button = buttons[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(button);
  }
  
  var nodes = document.querySelectorAll('.mdc-icon-toggle');
  for (var i = 0, node; node = nodes[i]; i++) {
    mdc.iconToggle.MDCIconToggle.attachTo(node);
  }
  
  var interactiveListItems = document.querySelectorAll('.mdc-list-item');
  for (var i = 0, li; li = interactiveListItems[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(li);
    // Prevent link clicks from jumping demo to the top of the page
    //.addEventListener('click', function(evt) {
      //evt.preventDefault();
    //});
  }
  
  //const submenu2BotRippleEl = document.querySelector('.submenu2');
  //const submenu2BotRipple = mdc.ripple.MDCRipple.attachTo(submenu2BotRippleEl);
  //submenu2BotRipple.unbounded = true;
  
  //const submenu1BotRippleEl = document.querySelector('.submenu1');
  //const submenu1BotRipple = mdc.ripple.MDCRipple.attachTo(submenu1BotRippleEl);
  //submenu1BotRipple.unbounded = true;
  
  const drawerElement = document.querySelector('.mdc-drawer');
  const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
  
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);
  /*topAppBar.setScrollTarget(document.getElementById('main-content'));*/
  topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
  });
  
  const bCerrar = document.querySelector('.bcerrar');
  bCerrar.addEventListener('click', () => {
      drawer.open = !drawer.open;
  });
  
  const submenu1BotEl = document.querySelector('.submenu1');
  const submenu1Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(submenu1BotEl);
  const submenu1GrupoEl = document.querySelector('.submenu1grupo');
  submenu1BotEl.addEventListener('click', () => {
      if (submenu1GrupoEl.style.display == 'block') {
          submenu1GrupoEl.style.display = 'none';
          //Hay que simular un click en submenu2
          //submenu2GrupoEl.style.display = 'none';
          if (submenu2GrupoEl.style.display == 'block') {
              submenu2BotEl.click();
          }
      }
      else {
          submenu1GrupoEl.style.display = 'block';
      }
  });
  
  const submenu2BotEl = document.querySelector('.submenu2');
  const submenu2Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(submenu2BotEl);
  const submenu2GrupoEl = document.querySelector('.submenu2grupo');
  submenu2BotEl.addEventListener('click', () => {
      if (submenu2GrupoEl.style.display == 'block') {
          submenu2GrupoEl.style.display = 'none';
      }
      else {
          submenu2GrupoEl.style.display = 'block';
      }
  });
  
  const menuIdiomaEl = document.querySelector('.menu-idioma');
  const menuIdioma = new mdc.menu.MDCMenu(menuIdiomaEl);
  const idiomaSelectEl = document.querySelector('.idioma-select');        
  idiomaSelectEl.addEventListener('click', (event) => {
      menuIdioma.open = !menuIdioma.open;
  });<\/script></div> <article style="margin-left:2rem; margin-right:2rem;"><h1>${escape(title)}</h1> <p><span class="tag">Date : ${escape(date)}</span></p> <p><a href="${escape(base, true) + "/" + escape(lang, true) + "/lettres/" + escape(slug, true)}" class="svelte-1k63mlb">Édition critique de la lettre</a></p> <p style="text-align: center !important;font-size: 1.2rem;">${escape(desc)}</p> <script data-svelte-h="svelte-1eg3rop">function opendiv1(evt, tabname) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "activo"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activo", "");
  }

  // Show the current tab, and add an "activo" class to the button that opened the tab
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " activo";
}
function opendiv2(evt, tabname) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "activo"
  tablinks = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activo", "");
  }

  // Show the current tab, and add an "activo" class to the button that opened the tab
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " activo";
}<\/script> <script data-svelte-h="svelte-ucjgfn">let slideIndex = 1;
    showSlides(slideIndex);
    
    showSlides1(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function plusSlides1(n) {
      showSlides1(slideIndex += n);
    }
    
    /*function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    function currentSlide1(n) {
      showSlides1(slideIndex = n);
    }*/
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      //let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }*/
      slides[slideIndex-1].style.display = "block";  
      //dots[slideIndex-1].className += " active";
    }
    function showSlides1(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides1");
      //let dots = document.getElementsByClassName("dot1");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }*/
      slides[slideIndex-1].style.display = "block";  
      //dots[slideIndex-1].className += " active";
    }<\/script> <div style="display: flex;flex-wrap:wrap;"> <div class="tab_left sec-container svelte-1k63mlb"><div class="tabs_buttons svelte-1k63mlb" data-svelte-h="svelte-1pfne9k"><button class="tablinks svelte-1k63mlb" onclick="opendiv1(event, 'manuscrit')" id="defaultOpen">Manuscrit</button> <button class="tablinks svelte-1k63mlb" onclick="opendiv1(event, 'transcription0')">Transcription</button></div>  <div id="manuscrit" class="tabcontent svelte-1k63mlb"><div><div id="openseadragon1" style="width: 98%; height: 500px;background-color: #fcfcfc; display: block; margin-left: auto; margin-right: auto;" data-svelte-h="svelte-1jxy5sz"></div> <div><h6>${escape(coteMs)}</h6> <div id="msInfo"></div></div></div></div> <div id="transcription0" class="tabcontent svelte-1k63mlb"><div class="slideshow-container svelte-1k63mlb">${each(transc_pages, (page2) => {
    return `<div class="mySlides fade svelte-1k63mlb"><div class="${escape(null_to_empty(page2), true) + " svelte-1k63mlb"}"></div> </div>`;
  })} <div data-svelte-h="svelte-srjynm"><a id="prev" onclick="plusSlides(-1)" class="svelte-1k63mlb">❮</a> <a id="next" onclick="plusSlides(1)" class="svelte-1k63mlb">❯</a></div></div></div></div>  <div class="tab_right sec-container svelte-1k63mlb"><div class="tabs_buttons svelte-1k63mlb" data-svelte-h="svelte-3l3fg6"><button class="tablinks1 svelte-1k63mlb" onclick="opendiv2(event, 'transcription1')" id="defaultOpen1">Transcription</button> <button class="tablinks1 svelte-1k63mlb" onclick="opendiv2(event, 'Bonnet')">Version de Jules Bonnet</button></div>  <div id="transcription1" class="tabcontent1 svelte-1k63mlb"><div class="slideshow-container svelte-1k63mlb">${each(transc_pages, (page2) => {
    return `<div class="mySlides1 fade svelte-1k63mlb"><div class="${escape(null_to_empty(page2), true) + " svelte-1k63mlb"}"></div> </div>`;
  })} <div data-svelte-h="svelte-1regyt6"><a id="prev1" onclick="plusSlides1(-1)" class="svelte-1k63mlb">❮</a> <a id="next1" onclick="plusSlides1(1)" class="svelte-1k63mlb">❯</a></div></div></div> <div id="Bonnet" class="tabcontent1 svelte-1k63mlb" data-svelte-h="svelte-jtgocl"><div id="diplomatic"></div></div></div></div> <div style="margin-top:3rem; font-size:.5rem" data-svelte-h="svelte-rh2pkx"><p>Transcription faite sur la plateforme <a href="https://escriptorium.inria.fr/" class="svelte-1k63mlb">eScriptorium</a> avec Kraken et à l&#39;aide d&#39;un modèle entraîné sur l&#39;écriture de Jean Calvin à partir du model <a href="https://zenodo.org/records/6657809" class="svelte-1k63mlb">HTR-United - Manu McFrench V1 (Manuscripts of Modern and Contemporaneous French)</a>. Vous pouvez consulter le protocole de transcription <a href="${escape(base, true) + "/fr/recherche#protocole_transcription"}" class="svelte-1k63mlb">ici</a>.</p></div></article> <footer data-svelte-h="svelte-je4gox"><div class="flex-container-pie"><div class="enlaces-sitio"><div class="elevado"><a href="${escape(base, true) + "/fr/a_propos"}" class="svelte-1k63mlb"><div class="letra1">À propos</div></a></div> <div class="elevado"><a href="mailto:yhranlo@gmail.com" class="svelte-1k63mlb"><div class="letra1">Contact</div></a></div></div> <div class="elevado"><a href="https://www.umontreal.ca" class="svelte-1k63mlb"><img alt="logo UdeM" class="logoestilo" src="${escape(base, true) + "/UdeMlogo.png"}"></a></div> <div class="elevado"><a href="https://www.ubfc.fr/" class="svelte-1k63mlb"><img alt="logo UFBC" class="logoestilo" src="${escape(base, true) + "/Logo_Universite_de_Franche-Comte.png"}"></a></div> <div class="elevado"><a href="https://gallica.bnf.fr/" class="svelte-1k63mlb"><img alt="logo de Gallica" class="logoestilo" src="${escape(base, true) + "/Logo_Gallica_2014.png"}"></a></div> <div class="elevado"><a href="http://institutions.ville-geneve.ch/fr/bge/collections/manuscrits-et-archives/presentation/" class="svelte-1k63mlb"><svg xmlns="http://www.w3.org/2000/svg" width="272" height="68" viewBox="0 0 272 68" fill="none"><g clip-path="url(#clip0_25_9951)"><path d="M0 7.02246H8.73234C13.2217 7.02246 16.0029 10.098 16.0029 13.7343C16.0029 15.9498 15.1707 17.4685 13.7089 18.5082C16.0029 19.4772 17.6727 21.4804 17.6727 24.5287C17.6727 28.8182 14.2291 31.5835 9.46596 31.5835H0V7.02246ZM8.20675 17.3651C10.6759 17.3651 11.9296 15.9117 11.9296 14.0446C11.9296 12.1774 10.6759 10.724 8.20675 10.724H4.03494V17.3651H8.20675ZM9.46049 27.8438C12.2417 27.8438 13.5995 26.3577 13.5995 24.3491C13.5995 22.3404 12.2417 20.789 9.46049 20.789H4.03494V27.8438H9.46049Z" fill="#1D1D21"></path><path d="M21.2695 7.02246H25.3045V31.578H21.2695V7.02246Z" fill="#1D1D21"></path><path d="M30.3594 7.02246H39.0917C43.5811 7.02246 46.3623 10.098 46.3623 13.7343C46.3623 15.9498 45.5301 17.4685 44.0683 18.5082C46.3623 19.4772 48.0321 21.4804 48.0321 24.5287C48.0321 28.8182 44.5884 31.5835 39.8253 31.5835H30.3648V7.02246H30.3594ZM38.5661 17.3651C41.0353 17.3651 42.289 15.9117 42.289 14.0446C42.289 12.1774 41.0353 10.724 38.5661 10.724H34.3943V17.3651H38.5661ZM39.8199 27.8438C42.6011 27.8438 43.9588 26.3577 43.9588 24.3491C43.9588 22.3404 42.6011 20.789 39.8199 20.789H34.3943V27.8438H39.8199Z" fill="#1D1D21"></path><path d="M51.6445 7.02246H55.6795V27.6043H66.0816V31.5835H51.6445V7.02246Z" fill="#1D1D21"></path><path d="M68.6914 7.02246H72.7263V31.578H68.6914V7.02246Z" fill="#1D1D21"></path><path d="M76.0391 19.2968C76.0391 12.204 81.6726 6.74414 88.664 6.74414C95.6553 6.74414 101.289 12.2094 101.289 19.2968C101.289 26.3842 95.6882 31.8495 88.664 31.8495C81.6398 31.8495 76.0391 26.3842 76.0391 19.2968ZM97.1883 19.2968C97.1883 14.3868 93.5366 10.5437 88.664 10.5437C83.7914 10.5437 80.1397 14.3813 80.1397 19.2968C80.1397 24.2123 83.7914 28.0445 88.664 28.0445C93.5366 28.0445 97.1883 24.2068 97.1883 19.2968ZM85.8499 19.2968C85.8499 17.74 87.1037 16.4934 88.6695 16.4934C90.2353 16.4934 91.489 17.74 91.489 19.2968C91.489 20.8537 90.2353 22.1002 88.6695 22.1002C87.1037 22.1002 85.8499 20.8537 85.8499 19.2968Z" fill="#1D1D21"></path><path d="M107.965 10.9635H101.598V7.02246H118.4V10.9635H112V31.578H107.965V10.9635Z" fill="#1D1D21"></path><path d="M120.844 7.02246H124.879V17.1909H137.126V7.02246H141.161V31.578H137.126V21.0612H124.879V31.578H120.844V7.02246Z" fill="#1D1D21"></path><path d="M146.27 7.02209H160.915V10.9632H150.304V17.1905H158.829V21.0663H150.304V27.6366H160.915V31.5776H146.27V7.02209ZM149.018 0H153.54L156.152 5.01345H153.124L149.018 0Z" fill="#1D1D21"></path><path d="M173.53 31.7134C167.48 30.8152 162.887 25.6929 162.887 19.2968C162.887 12.204 168.52 6.74414 175.512 6.74414C182.503 6.74414 188.137 12.2094 188.137 19.2968C188.137 25.731 183.543 30.8152 177.455 31.7134V37.9407H173.524V31.7134H173.53ZM177.461 27.8376C181.32 26.9721 184.036 23.5482 184.036 19.2968C184.036 14.3868 180.384 10.5437 175.512 10.5437C171.34 10.5437 168.066 13.3797 167.195 17.2882H177.455V27.8376H177.461ZM167.201 21.2293C167.863 24.5498 170.3 27.0756 173.53 27.8376V21.2293H167.201Z" fill="#1D1D21"></path><path d="M191.312 22.0301V7.02246H195.347V22.139C195.347 25.944 197.745 28.0506 201.26 28.0506C204.775 28.0506 207.14 25.9386 207.14 22.139V7.02246H211.175V22.0356C211.175 28.0887 207.069 31.8556 201.26 31.8556C195.451 31.8556 191.312 28.0833 191.312 22.0356V22.0301Z" fill="#1D1D21"></path><path d="M216.043 7.02246H230.688V10.9635H220.078V17.1909H228.602V21.0667H220.078V27.6369H230.688V31.578H216.043V7.02246Z" fill="#1D1D21"></path><path d="M95.1289 43.167H102.958C110.332 43.167 115.9 48.4907 115.9 55.4475C115.9 62.4043 110.332 67.728 102.958 67.728H95.1289V43.1724V43.167ZM102.958 63.9883C108.279 63.9883 111.794 60.2868 111.794 55.4475C111.794 50.6082 108.279 46.9067 102.958 46.9067H99.1639V63.9938H102.958V63.9883Z" fill="#1D1D21"></path><path d="M119.52 43.167H134.165V47.1081H123.554V53.3354H132.079V57.2112H123.554V63.7815H134.165V67.7226H119.52V43.167Z" fill="#1D1D21"></path><path d="M145.016 55.4423C145.016 48.3495 150.649 42.8896 157.641 42.8896C161.155 42.8896 164.391 44.0981 166.652 46.4497L164.046 49.2857C162.513 47.6581 160.082 46.6892 157.646 46.6892C152.773 46.6892 149.122 50.5269 149.122 55.4423C149.122 60.3578 152.773 64.1954 157.646 64.1954C159.453 64.1954 161.298 63.7436 162.688 62.8781V57.206H155.905L157.679 53.3303H166.723V64.8487C164.429 66.8192 161.123 67.995 157.646 67.995C150.655 67.995 145.021 62.5297 145.021 55.4423H145.016Z" fill="#1D1D21"></path><path d="M171.461 43.167H186.106V47.1081H175.496V53.3354H184.02V57.2112H175.496V63.7815H186.106V67.7226H171.461V43.167Z" fill="#1D1D21"></path><path d="M194.062 52.0565V67.7228H190.027V42.8896L206.901 58.8336V43.1673H210.936V68.0004L194.062 52.0565Z" fill="#1D1D21"></path><path d="M216.035 43.1666H230.68V47.1077H220.07V53.3351H228.594V57.2108H220.07V63.7811H230.68V67.7222H216.035V43.1666ZM218.784 36.1445H223.306L225.917 41.158H222.89L218.784 36.1445Z" fill="#1D1D21"></path><path d="M232.285 43.167H236.736L243.728 58.8714L250.752 43.167H255.17L243.728 68.0002L232.285 43.167Z" fill="#1D1D21"></path><path d="M257.355 43.167H272.001V47.1081H261.39V53.3354H269.915V57.2112H261.39V63.7815H272.001V67.7226H257.355V43.167Z" fill="#1D1D21"></path></g><defs><clipPath id="clip0_25_9951"><rect width="272" height="68" fill="white"></rect></clipPath></defs></svg></a></div></div> <div class="flex-container-pie1"><div class="letra2 titulo" style="width: 50%; height: 100%;"><em>Lettres de Calvin
          <span id="anno">2024</span></em></div> <div class="letra2 autor" style="margin-bottom:10px; width: 50%; height: 100%;"><em>Édition de Yanet Hernández Pedraza</em></div></div></footer>`;
});
export {
  Page as default
};
