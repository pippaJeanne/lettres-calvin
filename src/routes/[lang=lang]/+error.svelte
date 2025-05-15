<script>
	import { base } from '$app/paths';
    import { page } from '$app/stores';
    import "$lib/error.css"
    import { fr_es } from '$lib/fr_es';
    $: lang = $page.params.lang;
  $: t = fr_es[lang] || fr_es.fr;
</script>
<div id="error">
    <h1 id="404error">{t.m_error}</h1>
<img id="calvinpic" src="{base}/CalvinErrpgok.png" alt="Calvin confus"/>
</div>
