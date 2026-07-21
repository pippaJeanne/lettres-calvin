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
<ul>
<li><strong><img src="/blue_circle.png" alt="Círculo azul" width="10" height="10"> Círculos azules</strong>: lugar de envío</li>
<li><strong><img src="/Blue_map_pin.png" alt="Marcador azul" width="10" height="10"> Marcadores azules</strong>: lugar de destino</li>
<li><strong><img src="/red_circle.png" alt="Círculo rojo" width="10" height="10"> Círculos rojos</strong>: lugares mencionados en las cartas</li>
<li><strong>Color de líneas:</strong></li>
  <ul><li><span style="color:#0c3b05"><strong>—</strong></span> línea verde indica que el nivel de certidumbre para los dos lugares es elevado</li>
    <li><span style="color:#b38c0e"><strong>—</strong></span> línea amarilla indica que el nivel de certidumbre para uno de los dos lugares es bajo o medio</li>
    <li><span style="color:#a31d0b"><strong>—</strong></span> línea roja indica que el nivel de certidumbre para los dos lugares es bajo o medio</li></ul>
<li><strong>Color más oscuro y/o círculo más grande</strong> = más cartas vinculadas al lugar</li>
<li><strong>Clic en un marcador</strong> = lista y enlaces a las cartas enviadas al lugar escogido</li>
<li><strong>Clic en un círculo azul</strong> = lista y enlaces a las cartas enviadas desde el lugar escogido</li>
 <li><strong>[información entre corchetes]</strong> = información incierta (nivel de confianza entre bajo y medio)</li>
  <ul>
    <li><span style="color:#a31d0b">el texto en rojo indica un nivel de certidumbre bajo</span></li>
    <li><span style="color:#b38c0e">el texto en amarillo indica un nivel de certidumbre medio</span></li>
  </ul>
</ul>
</div>

<div style="width:100%" id="observableCarteEs"> <!-- Only change the number in the next 3 divs' ids when updating along with what's inside the script type="module" tag at the corresponding spot in the template/svelte page for the 'carte' route -->
<div id="observablehq-viewof-date-6b17ffc8"></div>
<div id="observablehq-carte-6b17ffc8"></div>
<div id="observablehq-activate-6b17ffc8" class="cacher"></div>
<p>Credit: <a href="https://observablehq.com/d/de8c36a8a2970791">Red de la correspondencia de Calvino by Yanet&#039;s Visualiser</a></p>
</div>

</div>
  