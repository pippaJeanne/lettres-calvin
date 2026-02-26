import { c as create_ssr_component, s as subscribe, e as escape, a as each, b as add_attribute } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
/* empty css                         */
import { b as base } from "../../../../../chunks/paths.js";
const css = {
  code: "#transformedES.svelte-tlp666{margin-top:2.5rem;margin-bottom:2.5rem}a.tag.svelte-tlp666{padding:.3rem;border:.5px solid lightgray;box-shadow:1px 1px 1px lightgray}",
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
  let cartas = [];
  let xmlEs = "";
  let cartaOk = {};
  if (lang === "es") {
    slugOk = slug;
    cartas = data.letters["cartas"];
  }
  for (let carta of cartas) {
    if (slugOk === carta.slug) {
      xmlEs = carta.url;
      cartaOk = carta;
    }
  }
  let categories = [];
  Object.keys(data.letters).map((key) => {
    if (key !== "carta") {
      let obj;
      if (cartaOk.source === data.letters[key].id) {
        data.letters[key].categories.map((d, index) => {
          let slug2 = d.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          cartaOk.categories.map((cat, i) => {
            if (data.letters[key].categories.length === cartaOk.categories.length && i === index) {
              obj = { slug: slug2, cat };
              if (categories.indexOf(obj) === -1) {
                categories.push(obj);
              }
            }
          });
        });
      }
    }
  });
  let tags = [];
  Object.keys(data.letters).map((key) => {
    if (key !== "carta") {
      let obj;
      if (cartaOk.source === data.letters[key].id) {
        data.letters[key].tags.map((d, index) => {
          let slug2 = d.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e").replaceAll(".", "").replaceAll("î", "i").replaceAll("û", "u").replaceAll("à", "a");
          cartaOk.tags.map((tag, i) => {
            if (data.letters[key].tags.length === cartaOk.tags.length && i === index) {
              obj = { slug: slug2, tag };
              if (tags.indexOf(obj) === -1) {
                tags.push(obj);
              }
            }
          });
        });
      }
    }
  });
  let { title, date, editor, desc } = cartaOk;
  const xmlfileEs = base + "/api/xml/" + xmlEs;
  const xsltes = `${base}/xslt/Transfm-es.xslt`;
  async function displayResultEs() {
    const parser = new DOMParser();
    const xsltProcessor = new XSLTProcessor();
    let xmles;
    let xsles;
    if (xmlEs !== "") {
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.xmlfileEs === void 0 && $$bindings.xmlfileEs && xmlfileEs !== void 0) $$bindings.xmlfileEs(xmlfileEs);
  if ($$props.xsltes === void 0 && $$bindings.xsltes && xsltes !== void 0) $$bindings.xsltes(xsltes);
  if ($$props.displayResultEs === void 0 && $$bindings.displayResultEs && displayResultEs !== void 0) $$bindings.displayResultEs(displayResultEs);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-dey73u_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" data-svelte-h="svelte-1s0v7l9"><\/script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" data-svelte-h="svelte-tblfyy"><\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- HEAD_svelte-dey73u_END -->`, ""} <div id="anchor"><article><h1>${escape(title)}</h1> <p><span class="tag">Date : ${escape(date)}</span></p> <p><span class="tag">${escape(editor)}</span></p>  <div>${each(categories, (cat) => {
    return `<a class="tag svelte-tlp666" style="text-decoration:none;" href="${escape(base, true) + "/es/categories/" + escape(cat.slug, true)}"><span>${escape(cat.cat)}</span> </a>`;
  })}</div> <div>${each(tags, (tag) => {
    return `<a class="tag svelte-tlp666" style="text-decoration:none;" href="${escape(base, true) + "/es/tags/" + escape(tag.slug, true)}"><span>${escape(tag.tag)}</span> </a>`;
  })}</div> <p style="text-align: center !important;font-size: 1.2rem;">${escape(desc)}</p>  <div id="transformedES" class="svelte-tlp666">  <div id="btnsfr" style="width:100%;margin:0.5rem 1rem .5rem 5%;float:right;display:flex;justify-content: flex-end;flex-wrap: wrap;"><a id="dwl-xml2" style="color:black;"${add_attribute("href", xmlfileEs, 0)} download><button class="btn-row" type="button" data-svelte-h="svelte-bvgoiz"><i class="fa fa-download"></i><span>XML-TEI</span></button></a> </div> </div>  <script src="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.js" data-svelte-h="svelte-eie54p"><\/script> <script type="text/javascript" data-svelte-h="svelte-bi0jy">/** Initialize MDC Web components. */
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
		  });<\/script> <script src="${escape(base, true) + "/functionsLetters.js"}"><\/script></article> </div>`;
});
export {
  Page as default
};
