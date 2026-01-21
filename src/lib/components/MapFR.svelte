<script>
    export let title;
</script>
<style>
    .cacher{
      display:none;}
    /*form button{
      width:5rem !important;
    }*/
</style>

<div>
<h1>{title}</h1>
<div>
<h3>Légende</h3>
<ul><li>Cercles bleus : lieux d'envoi</li>
<li>Marqueurs bleus : destinations</li>
<li>Cercles rouges : lieux mentionnés</li>
<li>Couleur foncée = plus de lettres liées au lieu</li>
<li>Clic sur un marqueur = liste et liens vers les lettres</li>
 <li>[] = information incertaine</li></ul>
</div>

<div style="width:100%" id="observableCarte"> <!-- Only change the number in the next 3 divs' ids when updating along with what's inside the script type="module" tag at the corresponding spot in the template/svelte page for the 'carte' route -->
<div id="observablehq-viewof-date-d404795d"></div>
<div id="observablehq-carte-d404795d"></div>
<div id="observablehq-activate-d404795d" class="cacher"></div>
<p>Credit: <a href="https://observablehq.com/d/1956978c14deb22b@2653">Réseau de la correspondance de Calvin by Yanet&#039;s Visualiser</a></p>
  </div>

</div>
  