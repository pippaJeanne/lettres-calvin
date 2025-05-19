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
<h3>Legende</h3>
<p>Les circles bleus indiquent le lieu d'envoi et le marqueurs bleus indiquent le lieu de destination.</p>

<p>Une liste plus détaillée des lettres envoyées à cet endroit apparaitra si on clique sur les marqueurs.</p>

<p><em>Les informations entre crochets ne sont pas certaines.</em></p>
</div>

<div style="width:100%" id="observableCarte"> <!-- Only change the number in the next 3 divs' ids when updating along with what's inside the script type="module" tag-->
<div id="observablehq-viewof-date-8946d812"></div>
<div id="observablehq-carte-8946d812"></div>
<div id="observablehq-activate-8946d812" class="cacher"></div>
<p>Crédit: <a href="https://observablehq.com/d/1956978c14deb22b">Réseau de la correspondance de Calvin par <em>visualiser</em></a></p>
  </div>

</div>
  