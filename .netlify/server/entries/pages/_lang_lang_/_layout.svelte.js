import { c as create_ssr_component, s as subscribe, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                    */
import "flexsearch";
import { f as fr_es } from "../../../chunks/fr_es.js";
const css = {
  code: "header.svelte-qjplb3{margin-bottom:3rem}aside.svelte-qjplb3{z-index:1050}a.svelte-qjplb3{text-decoration:none;color:black}.zIndex.svelte-qjplb3{z-index:1050}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lang;
  let t;
  let oppositeLang;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const letters = data.lettres;
  let { slug_list = [] } = $$props;
  Object.keys(letters).map((key) => {
    let pair = [];
    for (let i of letters["cartas"]) {
      if (key !== "cartas" && letters[key]["id"] === i["source"]) {
        pair.push(key);
        pair.push(i["slug"]);
        slug_list.push(pair);
      }
    }
  });
  function switchLanguage() {
    let newPath = "";
    if ($page.url.pathname.includes(`cartas`)) {
      for (let i of slug_list) {
        if ($page.url.pathname.includes(`${i[1]}`)) {
          newPath = `${base}/fr/lettres/${i[0]}`;
        }
      }
    } else if ($page.url.pathname.includes(`lettres`)) {
      for (let i of slug_list) {
        if ($page.url.pathname.includes(`${i[0]}`)) {
          newPath = `${base}/es/cartas/${i[1]}`;
        }
      }
    } else {
      newPath = $page.url.pathname.replace(/^\/(fr|es)/, `/${oppositeLang}`);
    }
    document.cookie = `lang=${oppositeLang}; path=/; max-age=31536000`;
    window.location.href = newPath;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.letters === void 0 && $$bindings.letters && letters !== void 0) $$bindings.letters(letters);
  if ($$props.slug_list === void 0 && $$bindings.slug_list && slug_list !== void 0) $$bindings.slug_list(slug_list);
  if ($$props.switchLanguage === void 0 && $$bindings.switchLanguage && switchLanguage !== void 0) $$bindings.switchLanguage(switchLanguage);
  $$result.css.add(css);
  lang = $page.params.lang;
  t = fr_es[lang] || fr_es.fr;
  oppositeLang = lang === "fr" ? "es" : "fr";
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-uj9nwv_START -->${$$result.title = `<title>${escape(t.site_title)}</title>`, ""}<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/openseadragon.min.js" data-svelte-h="svelte-12tt9cb"><\/script><link href="https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.css" rel="stylesheet"><!-- HEAD_svelte-uj9nwv_END -->`, ""}  <div id="maindiv"> <style data-svelte-h="svelte-1x6iq0p">.bgim {
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
.mdc-top-app-bar {z-index: 6;}</style> <div class="bbody"><header class="bgim mdc-top-app-bar mdc-top-app-bar-estilo svelte-qjplb3" id="app-bar" style="background-image: linear-gradient(rgb(243, 231, 214) 75%, rgb(255, 255, 255) 100%); min-width: 300px !important; top: 0px;"><div class="mdc-top-app-bar__row"><section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start ajuste1"><span class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button button1 mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Menu" title="Menu" style="color: rgb(103, 103, 103) !important; --mdc-ripple-fg-size: 28px; --mdc-ripple-fg-scale: 1.7142857142857142; --mdc-ripple-left: 10px; --mdc-ripple-top: 10px;" data-svelte-h="svelte-1nl3jdk">menu
                <div class="mdc-icon-button__ripple"></div></span> <span class="mdc-top-app-bar__title ajuste2" style="display: flex;"><a id="siteTitle" href="${escape(base, true) + "/" + escape(lang, true)}" class="svelte-qjplb3"><h3 class="tit1">${escape(t.site_title)}</h3></a></span></section> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar"><div class="elementor-element elementor-element-3cd85bc elementor-widget__width-auto elementor-widget header-search letraIdioma" data-id="3cd85bc" data-element_type="widget" data-widget_type="elementskit-header-search.default" style="width:60%"><div class="elementor-widget-container"><div class="ekit-wid-con"><a href="#ekit_modal-popup-3cd85bc" class="ekit_navsearch-button ekit-modal-popup svelte-qjplb3" data-svelte-h="svelte-1luw11x"><i aria-hidden="true" class="icon icon-search"></i></a>   <div class="zoom-anim-dialog mfp-hide ekit_modal-searchPanel" id="ekit_modal-popup-3cd85bc">${``} </div> </div></div></div> <div class="mdc-top-app-bar__action-item ajuste3 texto-idioma mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" style="--mdc-ripple-fg-size: 92px; --mdc-ripple-fg-scale: 1.6851222826086956; --mdc-ripple-left: 32px; --mdc-ripple-top: -24px;"><button class="lang-button">${escape(lang === "fr" ? "🇪🇸 Español" : "🇫🇷 Français")}</button></div></section></div></header> <aside class="mdc-drawer mdc-drawer--modal mdc-drawer--dismissible mdc-elevation--z4 svelte-qjplb3" style="background-color: #E5D2C3;" data-mdc-auto-init="MDCDrawer" data-mdc-auto-init-state="initialized"><div class="mdc-drawer__header"><div style="display:flex; justify-content: flex-end; flex-flow: row;flex-wrap: nowrap; align-items: center; margin-top: 10px;" data-svelte-h="svelte-1hng73b"><span style="margin-left: auto;margin-right: auto;"><img src="${escape(base, true) + "/Portrait_de_Calvin.jpg"}" alt="Portrait de Calvin by Ary Scheffer, Public domain, via Wikimedia Commons" width="85" height="auto" style="display: block;margin-left: auto;margin-right: auto; border-radius: 50%;"> </span> <span class="material-icons mdc-icon-button bcerrar" style="position: absolute; right: 0px; top: 0px" title="Cerrar el Menú de Navegación" aria-label="Cerrar el Menú de Navegación">close
                <div class="mdc-icon-button__ripple"></div></span></div> <div style="text-align: center!important;"><h1 class="mdc-drawer__title">${escape(t.site_title)}</h1> </div></div> <div role="separator" class="mdc-list-divider" style="margin-bottom: 2px;" data-svelte-h="svelte-1m2o5j"></div> <div class="mdc-drawer__content" style="z-index: 10000; display: block;"><div class="mdc-list list-principal" role="menu"><a class="mdc-list-item mdc-list-item--activated mdc-ripple-upgraded svelte-qjplb3" href="${"/" + escape(lang, true)}" aria-current="page" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.home)}</span></a> <span class="mdc-list-item mdc-ripple-upgraded" style="align-items: center;" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.calvin)}</span> <span style="position: absolute; right: 0px; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;" class="submenu1 mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Opciones" data-aria-label-on="Ocultar Opciones" data-aria-label-off="Mostrar Opciones" data-svelte-h="svelte-1tjv9si"><div class="mdc-icon-button__ripple"></div> <i class="material-icons mdc-list-item__graphic mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_up</i> <i class="material-icons mdc-list-item__graphic mdc-icon-button__icon">arrow_drop_down</i></span></span> <div class="submenu1grupo mdc-list mdc-list-group" style="display:none!important;"> <div class="mdc-list listagrupo1"><div role="separator" class="mdc-list-divider" style="margin-top: 2px; margin-bottom: 2px;" data-svelte-h="svelte-1yhqi6g"></div> <a class="mdc-list-item mdc-ripple-upgraded svelte-qjplb3" href="${escape(base, true) + "/" + escape(lang, true) + "/preface_JulesBonnet/"}" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.preface)}</span></a> <a class="mdc-list-item mdc-ripple-upgraded svelte-qjplb3" href="${escape(base, true) + "/" + escape(lang, true) + "/vie_ouvres"}" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.onCalvin)}</span></a> <span class="mdc-list-item mdc-ripple-upgraded" style="align-items: center;" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.context)}</span> <span style="position: absolute; right: 0px; --mdc-ripple-fg-size: 0px; --mdc-ripple-fg-scale: NaN; --mdc-ripple-left: 0px; --mdc-ripple-top: 0px;" class="submenu2 mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" aria-label="Opciones" data-aria-label-on="Ocultar Opciones" data-aria-label-off="Mostrar Opciones" data-svelte-h="svelte-1g76i3t"><div class="mdc-icon-button__ripple"></div> <i class="material-icons mdc-list-item__graphic mdc-icon-button__icon mdc-icon-button__icon--on">arrow_drop_up</i> <i class="material-icons mdc-list-item__graphic mdc-icon-button__icon">arrow_drop_down</i></span></span> <div class="submenu2grupo mdc-list mdc-list-group" style="display:none!important;"> <div role="separator" class="mdc-list-divider" style="margin-top: 2px; margin-bottom: 2px;" data-svelte-h="svelte-11rbloo"></div> <div class="mdc-list listagrupo2"><a class="mdc-list-item mdc-ripple-upgraded svelte-qjplb3" href="${escape(base, true) + "/" + escape(lang, true) + "/index_noms/"}" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.names)}</span></a> <a class="mdc-list-item mdc-ripple-upgraded svelte-qjplb3" href="${escape(base, true) + "/" + escape(lang, true) + "/carte"}" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.places)}</span></a></div></div> <div role="separator" class="mdc-list-divider" style="margin-top: 2px; margin-bottom: 2px;" data-svelte-h="svelte-1yhqi6g"></div></div></div>  <a class="mdc-list-item mdc-ripple-upgraded svelte-qjplb3" href="${escape(base, true) + "/" + escape(lang, true) + "/recherche"}" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.research)}</span></a> <a class="mdc-list-item mdc-ripple-upgraded svelte-qjplb3" href="${escape(base, true) + "/" + escape(lang, true) + "/a_propos"}" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.about)}</span></a> <a class="mdc-list-item mdc-ripple-upgraded svelte-qjplb3" href="mailto:yhranlo@gmail.com" tabindex="-1"><span class="mdc-list-item__ripple"></span> <span class="mdc-list-item__primary-text">${escape(t.contact)}</span></a></div></div></aside></div> <script src="https://unpkg.com/material-components-web@13.0.0/dist/material-components-web.min.js" data-svelte-h="svelte-2vi7gq"><\/script></div> <div style="min-height: 80vh;">${slots.default ? slots.default({}) : ``}</div> <footer><div class="flex-container-pie"><div class="enlaces-sitio"><div class="elevado"><a href="${escape(base, true) + "/" + escape(lang, true) + "/a_propos"}" class="svelte-qjplb3"><div class="letra1">${escape(t.about)}</div></a></div> <div class="elevado"><a href="mailto:yhranlo@gmail.com" class="svelte-qjplb3"><div class="letra1">${escape(t.contact)}</div></a></div></div> <div class="elevado" data-svelte-h="svelte-1w3bob2"><a href="https://www.umontreal.ca" class="svelte-qjplb3"><img alt="logo UdeM" class="logoestilo" src="${escape(base, true) + "/UdeMlogo.png"}"></a></div> <div class="elevado" data-svelte-h="svelte-yq6xb8"><a href="https://www.ubfc.fr/" class="svelte-qjplb3"><img alt="logo UFBC" class="logoestilo" src="${escape(base, true) + "/Logo_Universite_de_Franche-Comte.png"}"></a></div> <div class="elevado" data-svelte-h="svelte-1wpbq4c"><a href="https://gallica.bnf.fr/" class="svelte-qjplb3"><img alt="logo de Gallica" class="logoestilo" src="${escape(base, true) + "/Logo_Gallica_2014.png"}"></a></div> <div class="elevado" data-svelte-h="svelte-l964u3"><a href="http://institutions.ville-geneve.ch/fr/bge/collections/manuscrits-et-archives/presentation/" class="svelte-qjplb3"><svg xmlns="http://www.w3.org/2000/svg" width="272" height="68" viewBox="0 0 272 68" fill="none"><g clip-path="url(#clip0_25_9951)"><path d="M0 7.02246H8.73234C13.2217 7.02246 16.0029 10.098 16.0029 13.7343C16.0029 15.9498 15.1707 17.4685 13.7089 18.5082C16.0029 19.4772 17.6727 21.4804 17.6727 24.5287C17.6727 28.8182 14.2291 31.5835 9.46596 31.5835H0V7.02246ZM8.20675 17.3651C10.6759 17.3651 11.9296 15.9117 11.9296 14.0446C11.9296 12.1774 10.6759 10.724 8.20675 10.724H4.03494V17.3651H8.20675ZM9.46049 27.8438C12.2417 27.8438 13.5995 26.3577 13.5995 24.3491C13.5995 22.3404 12.2417 20.789 9.46049 20.789H4.03494V27.8438H9.46049Z" fill="#1D1D21"></path><path d="M21.2695 7.02246H25.3045V31.578H21.2695V7.02246Z" fill="#1D1D21"></path><path d="M30.3594 7.02246H39.0917C43.5811 7.02246 46.3623 10.098 46.3623 13.7343C46.3623 15.9498 45.5301 17.4685 44.0683 18.5082C46.3623 19.4772 48.0321 21.4804 48.0321 24.5287C48.0321 28.8182 44.5884 31.5835 39.8253 31.5835H30.3648V7.02246H30.3594ZM38.5661 17.3651C41.0353 17.3651 42.289 15.9117 42.289 14.0446C42.289 12.1774 41.0353 10.724 38.5661 10.724H34.3943V17.3651H38.5661ZM39.8199 27.8438C42.6011 27.8438 43.9588 26.3577 43.9588 24.3491C43.9588 22.3404 42.6011 20.789 39.8199 20.789H34.3943V27.8438H39.8199Z" fill="#1D1D21"></path><path d="M51.6445 7.02246H55.6795V27.6043H66.0816V31.5835H51.6445V7.02246Z" fill="#1D1D21"></path><path d="M68.6914 7.02246H72.7263V31.578H68.6914V7.02246Z" fill="#1D1D21"></path><path d="M76.0391 19.2968C76.0391 12.204 81.6726 6.74414 88.664 6.74414C95.6553 6.74414 101.289 12.2094 101.289 19.2968C101.289 26.3842 95.6882 31.8495 88.664 31.8495C81.6398 31.8495 76.0391 26.3842 76.0391 19.2968ZM97.1883 19.2968C97.1883 14.3868 93.5366 10.5437 88.664 10.5437C83.7914 10.5437 80.1397 14.3813 80.1397 19.2968C80.1397 24.2123 83.7914 28.0445 88.664 28.0445C93.5366 28.0445 97.1883 24.2068 97.1883 19.2968ZM85.8499 19.2968C85.8499 17.74 87.1037 16.4934 88.6695 16.4934C90.2353 16.4934 91.489 17.74 91.489 19.2968C91.489 20.8537 90.2353 22.1002 88.6695 22.1002C87.1037 22.1002 85.8499 20.8537 85.8499 19.2968Z" fill="#1D1D21"></path><path d="M107.965 10.9635H101.598V7.02246H118.4V10.9635H112V31.578H107.965V10.9635Z" fill="#1D1D21"></path><path d="M120.844 7.02246H124.879V17.1909H137.126V7.02246H141.161V31.578H137.126V21.0612H124.879V31.578H120.844V7.02246Z" fill="#1D1D21"></path><path d="M146.27 7.02209H160.915V10.9632H150.304V17.1905H158.829V21.0663H150.304V27.6366H160.915V31.5776H146.27V7.02209ZM149.018 0H153.54L156.152 5.01345H153.124L149.018 0Z" fill="#1D1D21"></path><path d="M173.53 31.7134C167.48 30.8152 162.887 25.6929 162.887 19.2968C162.887 12.204 168.52 6.74414 175.512 6.74414C182.503 6.74414 188.137 12.2094 188.137 19.2968C188.137 25.731 183.543 30.8152 177.455 31.7134V37.9407H173.524V31.7134H173.53ZM177.461 27.8376C181.32 26.9721 184.036 23.5482 184.036 19.2968C184.036 14.3868 180.384 10.5437 175.512 10.5437C171.34 10.5437 168.066 13.3797 167.195 17.2882H177.455V27.8376H177.461ZM167.201 21.2293C167.863 24.5498 170.3 27.0756 173.53 27.8376V21.2293H167.201Z" fill="#1D1D21"></path><path d="M191.312 22.0301V7.02246H195.347V22.139C195.347 25.944 197.745 28.0506 201.26 28.0506C204.775 28.0506 207.14 25.9386 207.14 22.139V7.02246H211.175V22.0356C211.175 28.0887 207.069 31.8556 201.26 31.8556C195.451 31.8556 191.312 28.0833 191.312 22.0356V22.0301Z" fill="#1D1D21"></path><path d="M216.043 7.02246H230.688V10.9635H220.078V17.1909H228.602V21.0667H220.078V27.6369H230.688V31.578H216.043V7.02246Z" fill="#1D1D21"></path><path d="M95.1289 43.167H102.958C110.332 43.167 115.9 48.4907 115.9 55.4475C115.9 62.4043 110.332 67.728 102.958 67.728H95.1289V43.1724V43.167ZM102.958 63.9883C108.279 63.9883 111.794 60.2868 111.794 55.4475C111.794 50.6082 108.279 46.9067 102.958 46.9067H99.1639V63.9938H102.958V63.9883Z" fill="#1D1D21"></path><path d="M119.52 43.167H134.165V47.1081H123.554V53.3354H132.079V57.2112H123.554V63.7815H134.165V67.7226H119.52V43.167Z" fill="#1D1D21"></path><path d="M145.016 55.4423C145.016 48.3495 150.649 42.8896 157.641 42.8896C161.155 42.8896 164.391 44.0981 166.652 46.4497L164.046 49.2857C162.513 47.6581 160.082 46.6892 157.646 46.6892C152.773 46.6892 149.122 50.5269 149.122 55.4423C149.122 60.3578 152.773 64.1954 157.646 64.1954C159.453 64.1954 161.298 63.7436 162.688 62.8781V57.206H155.905L157.679 53.3303H166.723V64.8487C164.429 66.8192 161.123 67.995 157.646 67.995C150.655 67.995 145.021 62.5297 145.021 55.4423H145.016Z" fill="#1D1D21"></path><path d="M171.461 43.167H186.106V47.1081H175.496V53.3354H184.02V57.2112H175.496V63.7815H186.106V67.7226H171.461V43.167Z" fill="#1D1D21"></path><path d="M194.062 52.0565V67.7228H190.027V42.8896L206.901 58.8336V43.1673H210.936V68.0004L194.062 52.0565Z" fill="#1D1D21"></path><path d="M216.035 43.1666H230.68V47.1077H220.07V53.3351H228.594V57.2108H220.07V63.7811H230.68V67.7222H216.035V43.1666ZM218.784 36.1445H223.306L225.917 41.158H222.89L218.784 36.1445Z" fill="#1D1D21"></path><path d="M232.285 43.167H236.736L243.728 58.8714L250.752 43.167H255.17L243.728 68.0002L232.285 43.167Z" fill="#1D1D21"></path><path d="M257.355 43.167H272.001V47.1081H261.39V53.3354H269.915V57.2112H261.39V63.7815H272.001V67.7226H257.355V43.167Z" fill="#1D1D21"></path></g><defs><clipPath id="clip0_25_9951"><rect width="272" height="68" fill="white"></rect></clipPath></defs></svg></a></div></div> <div class="flex-container-pie1"><div class="letra2 titulo" style="margin-bottom:0;"><a href="${escape(base, true) + "/" + escape(lang, true) + "/mentionsLegales"}" class="svelte-qjplb3">${escape(t.policies)}</a></div> <div class="letra2 titulo" style="width: 50%; height: 100%;"><em>${escape(t.site_title)} <span id="anno" data-svelte-h="svelte-1eaf7sq">2024</span></em></div> <div class="letra2 autor" style="margin-bottom:10px; width: 50%; height: 100%;"><em>${escape(t.edition)}</em></div></div></footer>`;
});
export {
  Layout as default
};
