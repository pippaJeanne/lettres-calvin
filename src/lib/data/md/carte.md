---
title: "Index de lieux"

---

### Legende
Les circles bleus indiquent le lieu d'envoi et le marqueurs bleus indiquent le lieu de destination.

Une liste plus détaillée des lettres envoyées à cet endroit apparaitra si on clique sur les marqueurs.

*Les informations entre crochets ne sont pas certaines.*

<div style="width:100%"> <!-- Only change the number in the next 3 divs' ids when updating along with what's inside the script type="module" tag-->
<div id="observablehq-viewof-date-8946d812"></div>
<div id="observablehq-carte-8946d812"></div>
<div id="observablehq-activate-8946d812" class="cacher"></div>
<p>Crédit: <a href="https://observablehq.com/d/1956978c14deb22b">Réseau de la correspondance de Calvin par <em>visualiser</em></a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/d/1956978c14deb22b@2604.js?v=4";
new Runtime().module(define, name => {
  if (name === "viewof date") return new Inspector(document.querySelector("#observablehq-viewof-date-8946d812"));
  if (name === "carte") return new Inspector(document.querySelector("#observablehq-carte-8946d812"));
  if (name === "activate") return new Inspector(document.querySelector("#observablehq-activate-8946d812"));
  return ["mapViz","arrow"].includes(name);
});
</script>
<style>
  /*#europe{
    width:100%;
    background-color:transparent !important;
  }*/
.cacher{
  display:none;}
form button{
  width:5rem !important;
}
  </style>
  </div>

  