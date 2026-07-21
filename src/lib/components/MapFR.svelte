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
<ul>
  <li><strong><img src="/blue_circle.png" alt="Cercle bleu" width="10" height="10"> Cercles bleus</strong> : lieux d'envoi</li>
<li><strong><img src="/Blue_map_pin.png" alt="Marqueur bleu" width="10" height="10"> Marqueurs bleus</strong> : destinations</li>
<li><strong><img src="/red_circle.png" alt="Cercle rouge" width="10" height="10"> Cercles rouges</strong> : lieux mentionnés</li>
<li><strong>Couleur de lignes :</strong></li>
  <ul><li><span style="color:#0c3b05"><strong>—</strong></span> ligne verte indique que le niveau de confiance pour les deux lieux est élevé</li>
    <li><span style="color:#b38c0e"><strong>—</strong></span> ligne jaune indique que le niveau de confiance pour un des deux lieux est bas ou moyen</li>
    <li><span style="color:#a31d0b"><strong>—</strong></span> ligne rouge indique que le niveau de confiance pour les deux lieux est bas ou moyen</li></ul>
<li><strong>Couleur foncée et/ou cercle plus large</strong> = plus de lettres liées au lieu</li>
<li><strong>Clic sur un marqueur</strong> = liste et liens vers les lettres envoyées au lieu choisi</li>
<li><strong>Clic sur un cercle bleu</strong> = liste et liens vers les lettres envoyées depuis le lieu choisi</li>
 <li><strong>[information entre crochets]</strong> = information incertaine (niveau de confiance entre bas et moyen)</li>
 <ul>
  <li><span style="color:#a31d0b">le texte en rouge indique un niveau de certitude bas</span></li>
  <li><span style="color:#b38c0e">le texte en jaune indique un niveau de certitude moyen</span></li>
 </ul>
</ul>
</div>

<div style="width:100%" id="observableCarte"> <!-- Only change the number in the next 3 divs' ids when updating along with what's inside the script type="module" tag at the corresponding spot in the template/svelte page for the 'carte' route -->
<div id="observablehq-viewof-date-66f83944"></div>
<div id="observablehq-carte-66f83944"></div>
<div id="observablehq-activate-66f83944" class="cacher"></div>
<p>Credit: <a href="https://observablehq.com/d/1956978c14deb22b">Réseau de la correspondance de Calvin by Yanet&#039;s Visualiser</a></p>
  </div>

</div>
  