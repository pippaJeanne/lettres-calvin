import { c as create_ssr_component } from "./ssr.js";
const metadata = { "title": "Recherche" };
const Recherche = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1d6b9vz">Protocole éditoriale</h2> <p data-svelte-h="svelte-15ubff2">À venir</p> <div id="protocole_transcription" data-svelte-h="svelte-1017cme"><h2>Protocole de transcription</h2> <h3>Écriture de Calvin</h3> <ul><li><p>voyelle nasales :  ā    ē    ī    ō    ū</p></li> <li><p>Garder les s long ( ʃ )</p></li> <li><p>Dissimilation de « v » et « u ».</p></li> <li><p>ᴖ  =&gt;  Ce symbole indiquera le signe d’abréviation utilisé dans le manuscrit. Dans le manuscrit, un symbole semblable est placé au-dessus des lettres du mot abrégé, lequel comprend normalement la première lettre suivie des deux dernières. Étant donné que c’est difficile de transcrire ce symbole, on placera le symbole ( ᴖ )  entre la première lettre et les deux dernières pour indiquer les lettres manquantes.</p></li></ul> <p><strong>Exemples :</strong></p> <p><img src="/pics_protocole/abbrev_que.png" alt="q⁀">
q⁀</p> <p><img src="/pics_protocole/abbrev_nostre.png" alt="n⁀re">
n⁀re</p> <p><img src="/pics_protocole/abbrev_frere.png" alt="f⁀re">
f⁀re</p> <p><img src="/pics_protocole/abbrev_leur.png" alt="leur">
Dans ce cas-ci, on va transcrire le symbole superindexé en son équivalent, c’est à dire « ur ». Donc, on va transcrire « leur ».</p> <p><img src="/pics_protocole/noz.png" alt="noz">
nous
<img src="/pics_protocole/plz.png" alt="plz">
plus</p> <p>Dans ces cas-ci, le symbol signalé représente l’abréviation « us ». On va le transcrire comme « us ». Donc, on a « nous » et « plus ».</p> <p><img src="/pics_protocole/par.png" alt="par" title="par">
Ce symbole représente l’abréviation de « par , per». On va le transcrire comme « ꝑ » appelé « p barré à travers la descendante ».</p> <p><img src="/pics_protocole/texteBarre.png" alt="texte barré">
Quant au texte barré comme dans l’exemple ci-dessus, on va le transcrire ainsi :  ̶d̶e̶ (si lisible) ; --- (si illisible)</p> <p><img src="/pics_protocole/esperluette.png" alt="&amp;">
Ce symbole sera transcrit comme « &amp; » (esperluette).</p> <h3>Référence</h3> <p>Sabot, Thierry. 2004. « Paléographie : La forme des lettres ». Histoire-Généalogie. août 2004. <a href="https://www.histoire-genealogie.com/Paleographie-La-forme-des-lettres?lang=fr" rel="nofollow">https://www.histoire-genealogie.com/Paleographie-La-forme-des-lettres?lang=fr</a>.</p></div>`;
});
export {
  Recherche as default,
  metadata
};
