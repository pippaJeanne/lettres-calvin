<script>
    export let title;
    export let description;
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
    <p>{description}</p>
<div>
<h3>Leyenda</h3>
<ul><li>Círculos azules: lugar de envío</li>
<li>Marcadores azules: lugar de destino</li>
<li>Círculos rojos: lugares mencionados en las cartas</li>
<li>Color más oscuro = más cartas vinculadas al lugar</li>
<li>Clic en un marcador = lista y enlaces a las cartas enviadas a ese lugar</li>
 <li>[] = información incierta</li></ul>
</div>

<div style="width:100%" id="observableCarteEs"> <!-- Only change the number in the next 3 divs' ids when updating along with what's inside the script type="module" tag at the corresponding spot in the template/svelte page for the 'carte' route -->
<div id="observablehq-viewof-date-86cf6b04"></div>
<div id="observablehq-carte-86cf6b04"></div>
<div id="observablehq-activate-86cf6b04" class="cacher"></div>
<p>Credit: <a href="https://observablehq.com/d/de8c36a8a2970791@2649">Red de la correspondencia de Calvino by Yanet&#039;s Visualiser</a></p>
</div>

</div>
  