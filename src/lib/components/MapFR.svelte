<script>
    export let title;
    export let description;
</script>
<style>
    .cacher{
      display:none;}
</style>

<div>
<h1>{title}</h1>
<p>{description}</p>
<div>
<h3>Légende</h3>
<ul><li>Cercles bleus : lieux d'envoi</li>
<li>Marqueurs bleus : destinations</li>
<li>Cercles rouges : lieux mentionnés</li>
<li>Couleur foncée = plus de lettres liées au lieu</li>
<li>Clic sur un marqueur = liste et liens vers les lettres envoyées à ce lieu</li>
 <li>[] = information incertaine</li></ul>
</div>

<div style="width:100%" id="observableCarte"> <!-- Only change the number in the next 3 divs' ids when updating along with what's inside the script type="module" tag at the corresponding spot in the template/svelte page for the 'carte' route -->
<div id="observablehq-viewof-date-920ecaf3"></div>
<div id="observablehq-carte-920ecaf3"></div>
<div id="observablehq-activate-920ecaf3" class="cacher"></div>
<p>Credit: <a href="https://observablehq.com/d/1956978c14deb22b@2653">Réseau de la correspondance de Calvin by Yanet&#039;s Visualiser</a></p>
  </div>

</div>
  