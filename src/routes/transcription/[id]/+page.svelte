<script>
import {page} from '$app/stores'
    export let data;
	import {biblMs} from '$lib/biblRep/bibl.json'
    import "$lib/blog.css";
    import '$lib/style.css';
	import {base} from '$app/paths';
	import {onMount, setContext} from 'svelte';
  import {transc} from '$lib/biblRep/transcriptions.json';
    let uri = $page.url.pathname.split('/');
    let slug = uri[uri.length -1];
	// Check for language
    //const lang = $page.params.lang;
	let slugOk = "";
	if (slug !== "carta") {
		slugOk = slug
	}
  let trans_slug;
  const slugslist = Object.keys(transc)
  slugslist.map(slug => {
    if (slugslist.indexOf(slugOk)!== -1){
      if(slug === slugOk){trans_slug = slug}
    }
  })

  // To place content in slides
export const thisTransc = transc[trans_slug]
export const transc_pages = Object.keys(thisTransc)
// To create the right amount of "dots" elements for the slide
export const num_dots = transc_pages.length

let {id, url,lang, title, date, categories, editor, bibliothequeMs, srcMs, srcB, coteMs, foliosB, tags, desc} = data.letters[slugOk];
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
	export const xmlfile = base + url;
	//export const xmlfileMme = base + "/xmles/SeñoradeFalais-14-oct-1543.xml";
	export const xsltdiplo =  `${base}/xslt/Transfm-diplomatique.xslt`;
//declaring transfromation functions (executed on client-site)

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

onMount(()=>{
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

  document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen1").click();

for ( let p of transc_pages){
  let pages = document.getElementsByClassName(p)
  for (let pag of pages){
    pag.innerHTML = thisTransc[p]
}
}
})

</script>

<svelte:head>
    <title>Trancription de la {title} </title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.css"  rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/openseadragon.min.js"></script>
</svelte:head>
<div>
<style>

.bgim {
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
.mdc-top-app-bar {z-index: 6;}
</style>
<div class="bbody">
  <header class="bgim mdc-top-app-bar mdc-top-app-bar-estilo" id="app-bar" style="background-image: linear-gradient(rgb(243, 231, 214) 75%, rgb(255, 255, 255) 100%); min-width: 300px !important; top: 0px;">
      <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start ajuste1">
              <span class="mdc-top-app-bar__title ajuste2" style="display: flex;">
                  <a id="siteTitle" href='{base}/{lang}'>
                      <h3 class=tit1>
                        Lettres de Calvin
                      </h3>
                  </a>
              </span>
          </section>
 
      </div>            
  </header>
  </div>
  <script src="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.js">
  </script>
  <script type="text/javascript">
  /** Initialize MDC Web components. */
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
  });
  </script>
  </div>
<article style="margin-left:2rem; margin-right:2rem;">
  <h1>{title}</h1>
  <p><span class="tag">Date : {date}</span></p>
  <p><a href="{base}/{lang}/lettres/{slug}">Édition critique de la lettre</a></p>
  <p style="text-align: center !important;font-size: 1.2rem;">{desc}</p>
  

  <script>
    function opendiv1(evt, tabname) {
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
}
  </script>
  <script>
    let slideIndex = 1;
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
    }
    </script>    

<div style="display: flex;flex-wrap:wrap;">
      <!-- Left-side tabs -->
  <div class="tab_left sec-container">
    <div class="tabs_buttons">
        <button class="tablinks" onclick="opendiv1(event, 'manuscrit')" id="defaultOpen">Manuscrit</button>
        <button class="tablinks" onclick="opendiv1(event, 'transcription0')">Transcription</button>
      </div>
      
      <!-- Tab content -->
      <div id="manuscrit" class="tabcontent">
        <div>
            <div id="openseadragon1"
                style="width: 98%; height: 500px;background-color: #fcfcfc; display: block; margin-left: auto; margin-right: auto;">
            </div>
            <div>
                <h6>{coteMs} </h6>
                <div id='msInfo'></div>
            </div>
      </div>
    </div>
      
      <div id="transcription0" class="tabcontent">
        <div class="slideshow-container">
          {#each transc_pages as page }
            <div class="mySlides fade">
              <div class={page}></div>
            </div>
            {/each}
            <div>
              <a id="prev" onclick="plusSlides(-1)" >&#10094;</a> 
              <a id="next" onclick="plusSlides(1)" >&#10095;</a> 
            </div>
        </div>
        
      </div>
    </div>
  <!-- Right-side tabs -->
  <div class="tab_right sec-container">
      <div class="tabs_buttons">
        <button class="tablinks1" onclick="opendiv2(event, 'transcription1')" id="defaultOpen1">Transcription</button>
        <button class="tablinks1" onclick="opendiv2(event, 'Bonnet')">Version de Jules Bonnet</button>
      </div>
      
      <!-- Tab content -->
      <div id="transcription1" class="tabcontent1">
        <div class="slideshow-container">
          {#each transc_pages as page }
            <div class="mySlides1 fade">
              <div class={page}></div>
            </div>
            {/each}
            <div>
              <a id="prev1" onclick="plusSlides1(-1)" >&#10094;</a> 
              <a id="next1" onclick="plusSlides1(1)" >&#10095;</a> 
            </div>
        </div>
        
      </div>
      
      <div id="Bonnet" class="tabcontent1">
        <div id="diplomatic">
        </div>
      </div>
  </div>
</div>
<div style="margin-top:3rem; font-size:.5rem">
  <p>Transcription faite sur la plateforme <a href="https://escriptorium.inria.fr/">eScriptorium</a> avec Kraken et à l'aide d'un modèle entraîné sur l'écriture de Jean Calvin à partir du model <a href="https://zenodo.org/records/6657809">HTR-United - Manu McFrench V1 (Manuscripts of Modern and Contemporaneous French)</a>. Vous pouvez consulter le protocole de transcription <a href="{base}/fr/recherche#protocole_transcription">ici</a>.</p>
</div>
</article>

<footer>    
  <div class="flex-container-pie">
    <div class="enlaces-sitio">
      <div class="elevado">
          <a href="{base}/fr/a_propos">
              <div class="letra1">
                 À propos
              </div>
          </a>
      </div>
      <div class="elevado">
          <a href="mailto:yhranlo@gmail.com">
              <div class="letra1">
                Contact
              </div>
          </a>
      </div>            
  </div>
    <div class="elevado">
        <a href="https://www.umontreal.ca">
            <img alt="logo UdeM" class="logoestilo" src="{base}/UdeMlogo.png">
        </a>
    </div>
    <div class="elevado">
            <a href="https://www.ubfc.fr/">
                <img alt="logo UFBC" class="logoestilo" src="{base}/Logo_Universite_de_Franche-Comte.png">
            </a>
    </div>
    <div class="elevado">
            <a href="https://gallica.bnf.fr/">
                <img alt="logo de Gallica" class="logoestilo" src="{base}/Logo_Gallica_2014.png">
            </a>
    </div>
    <div class="elevado">
            <a href="http://institutions.ville-geneve.ch/fr/bge/collections/manuscrits-et-archives/presentation/">
                <svg xmlns="http://www.w3.org/2000/svg" width="272" height="68" viewBox="0 0 272 68" fill="none">
                    <g clip-path="url(#clip0_25_9951)">
                    <path d="M0 7.02246H8.73234C13.2217 7.02246 16.0029 10.098 16.0029 13.7343C16.0029 15.9498 15.1707 17.4685 13.7089 18.5082C16.0029 19.4772 17.6727 21.4804 17.6727 24.5287C17.6727 28.8182 14.2291 31.5835 9.46596 31.5835H0V7.02246ZM8.20675 17.3651C10.6759 17.3651 11.9296 15.9117 11.9296 14.0446C11.9296 12.1774 10.6759 10.724 8.20675 10.724H4.03494V17.3651H8.20675ZM9.46049 27.8438C12.2417 27.8438 13.5995 26.3577 13.5995 24.3491C13.5995 22.3404 12.2417 20.789 9.46049 20.789H4.03494V27.8438H9.46049Z" fill="#1D1D21"/>
                    <path d="M21.2695 7.02246H25.3045V31.578H21.2695V7.02246Z" fill="#1D1D21"/>
                    <path d="M30.3594 7.02246H39.0917C43.5811 7.02246 46.3623 10.098 46.3623 13.7343C46.3623 15.9498 45.5301 17.4685 44.0683 18.5082C46.3623 19.4772 48.0321 21.4804 48.0321 24.5287C48.0321 28.8182 44.5884 31.5835 39.8253 31.5835H30.3648V7.02246H30.3594ZM38.5661 17.3651C41.0353 17.3651 42.289 15.9117 42.289 14.0446C42.289 12.1774 41.0353 10.724 38.5661 10.724H34.3943V17.3651H38.5661ZM39.8199 27.8438C42.6011 27.8438 43.9588 26.3577 43.9588 24.3491C43.9588 22.3404 42.6011 20.789 39.8199 20.789H34.3943V27.8438H39.8199Z" fill="#1D1D21"/>
                    <path d="M51.6445 7.02246H55.6795V27.6043H66.0816V31.5835H51.6445V7.02246Z" fill="#1D1D21"/>
                    <path d="M68.6914 7.02246H72.7263V31.578H68.6914V7.02246Z" fill="#1D1D21"/>
                    <path d="M76.0391 19.2968C76.0391 12.204 81.6726 6.74414 88.664 6.74414C95.6553 6.74414 101.289 12.2094 101.289 19.2968C101.289 26.3842 95.6882 31.8495 88.664 31.8495C81.6398 31.8495 76.0391 26.3842 76.0391 19.2968ZM97.1883 19.2968C97.1883 14.3868 93.5366 10.5437 88.664 10.5437C83.7914 10.5437 80.1397 14.3813 80.1397 19.2968C80.1397 24.2123 83.7914 28.0445 88.664 28.0445C93.5366 28.0445 97.1883 24.2068 97.1883 19.2968ZM85.8499 19.2968C85.8499 17.74 87.1037 16.4934 88.6695 16.4934C90.2353 16.4934 91.489 17.74 91.489 19.2968C91.489 20.8537 90.2353 22.1002 88.6695 22.1002C87.1037 22.1002 85.8499 20.8537 85.8499 19.2968Z" fill="#1D1D21"/>
                    <path d="M107.965 10.9635H101.598V7.02246H118.4V10.9635H112V31.578H107.965V10.9635Z" fill="#1D1D21"/>
                    <path d="M120.844 7.02246H124.879V17.1909H137.126V7.02246H141.161V31.578H137.126V21.0612H124.879V31.578H120.844V7.02246Z" fill="#1D1D21"/>
                    <path d="M146.27 7.02209H160.915V10.9632H150.304V17.1905H158.829V21.0663H150.304V27.6366H160.915V31.5776H146.27V7.02209ZM149.018 0H153.54L156.152 5.01345H153.124L149.018 0Z" fill="#1D1D21"/>
                    <path d="M173.53 31.7134C167.48 30.8152 162.887 25.6929 162.887 19.2968C162.887 12.204 168.52 6.74414 175.512 6.74414C182.503 6.74414 188.137 12.2094 188.137 19.2968C188.137 25.731 183.543 30.8152 177.455 31.7134V37.9407H173.524V31.7134H173.53ZM177.461 27.8376C181.32 26.9721 184.036 23.5482 184.036 19.2968C184.036 14.3868 180.384 10.5437 175.512 10.5437C171.34 10.5437 168.066 13.3797 167.195 17.2882H177.455V27.8376H177.461ZM167.201 21.2293C167.863 24.5498 170.3 27.0756 173.53 27.8376V21.2293H167.201Z" fill="#1D1D21"/>
                    <path d="M191.312 22.0301V7.02246H195.347V22.139C195.347 25.944 197.745 28.0506 201.26 28.0506C204.775 28.0506 207.14 25.9386 207.14 22.139V7.02246H211.175V22.0356C211.175 28.0887 207.069 31.8556 201.26 31.8556C195.451 31.8556 191.312 28.0833 191.312 22.0356V22.0301Z" fill="#1D1D21"/>
                    <path d="M216.043 7.02246H230.688V10.9635H220.078V17.1909H228.602V21.0667H220.078V27.6369H230.688V31.578H216.043V7.02246Z" fill="#1D1D21"/>
                    <path d="M95.1289 43.167H102.958C110.332 43.167 115.9 48.4907 115.9 55.4475C115.9 62.4043 110.332 67.728 102.958 67.728H95.1289V43.1724V43.167ZM102.958 63.9883C108.279 63.9883 111.794 60.2868 111.794 55.4475C111.794 50.6082 108.279 46.9067 102.958 46.9067H99.1639V63.9938H102.958V63.9883Z" fill="#1D1D21"/>
                    <path d="M119.52 43.167H134.165V47.1081H123.554V53.3354H132.079V57.2112H123.554V63.7815H134.165V67.7226H119.52V43.167Z" fill="#1D1D21"/>
                    <path d="M145.016 55.4423C145.016 48.3495 150.649 42.8896 157.641 42.8896C161.155 42.8896 164.391 44.0981 166.652 46.4497L164.046 49.2857C162.513 47.6581 160.082 46.6892 157.646 46.6892C152.773 46.6892 149.122 50.5269 149.122 55.4423C149.122 60.3578 152.773 64.1954 157.646 64.1954C159.453 64.1954 161.298 63.7436 162.688 62.8781V57.206H155.905L157.679 53.3303H166.723V64.8487C164.429 66.8192 161.123 67.995 157.646 67.995C150.655 67.995 145.021 62.5297 145.021 55.4423H145.016Z" fill="#1D1D21"/>
                    <path d="M171.461 43.167H186.106V47.1081H175.496V53.3354H184.02V57.2112H175.496V63.7815H186.106V67.7226H171.461V43.167Z" fill="#1D1D21"/>
                    <path d="M194.062 52.0565V67.7228H190.027V42.8896L206.901 58.8336V43.1673H210.936V68.0004L194.062 52.0565Z" fill="#1D1D21"/>
                    <path d="M216.035 43.1666H230.68V47.1077H220.07V53.3351H228.594V57.2108H220.07V63.7811H230.68V67.7222H216.035V43.1666ZM218.784 36.1445H223.306L225.917 41.158H222.89L218.784 36.1445Z" fill="#1D1D21"/>
                    <path d="M232.285 43.167H236.736L243.728 58.8714L250.752 43.167H255.17L243.728 68.0002L232.285 43.167Z" fill="#1D1D21"/>
                    <path d="M257.355 43.167H272.001V47.1081H261.39V53.3354H269.915V57.2112H261.39V63.7815H272.001V67.7226H257.355V43.167Z" fill="#1D1D21"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_25_9951">
                    <rect width="272" height="68" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
            </a>
    </div>

</div>    
    
<div class="flex-container-pie1">
 
  <div class="letra2 titulo" style="width: 50%; height: 100%;">
      <em>Lettres de Calvin
          <span id="anno"> 2024</span>
      </em>
  </div>
  <div class="letra2 autor" style="margin-bottom:10px; width: 50%; height: 100%;">
      <em>Édition de Yanet Hernández Pedraza</em>
  </div>
</div></footer>

<style>
header {
  margin-bottom: 3rem;
}
/*nav ul {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  list-style: none;
  font-size: 1rem;
  text-transform: uppercase;
}*/
  

a {
  text-decoration: none;
  color: black;
}
  .zIndex{
      z-index: 1050;
  }

    .tabs_buttons {
        position: relative!important;  
        background-image: linear-gradient(rgb(243, 231, 214) 0%, rgb(255, 255, 255) 100%)!important;
        border-radius: 20px; 
        width: 100%;
        margin-left: auto; 
        margin-right: auto;
        height: 2.5rem;
    }

/* Style the buttons that are used to open the tab content */
.tabs_buttons button {
  background-color: inherit;
  float: right;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 1rem;
  color: #aaa;
}
.tab_left,.tab_right {
  width: 50%;
}

/* Change background color of buttons on hover */
.tabs_buttons button:hover {
  background-color: #ddd;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  height: 100vh;
  overflow: scroll;
  padding: 1.5rem;
  width: 100%;
}
.tabcontent1 {
  display: none;
  padding: 6px 12px;
  height: 100vh;
  overflow: scroll;
  padding: 1.5rem;
  border-left:1px solid #ccc;
  width:100%;
}

.tabcontent {
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}

/* For transcriptions in slide mode*/
/* Slideshow container */
.slideshow-container {
  max-width: 1700px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
#prev, #next, #prev1, #next1 {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: rgb(168, 158, 158);
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
#next, #next1 {
  right: 3%;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
#prev:hover, #next:hover, #prev1:hover, #next1:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  #prev, #next {font-size: 11px}
}
@media screen and (max-width: 1200px) {
  .tab_left, .tab_right {
  width: 100%!important;
}
}
</style>