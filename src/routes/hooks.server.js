import { redirect } from '@sveltejs/kit';

const SUPPORTED_LANG = ['fr', 'es'];
const DEFAULT_LANG = 'fr';

export function handle({ event, resolve }) {
    let lang = event.cookies.get('lang');  // Check if a language cookie exists

    // If no valid language, default to French
    if (!SUPPORTED_LANG.includes(lang)|| lang === undefined) {
        lang = DEFAULT_LANG;
    } 
  
    // Ensure the URL matches the detected language
    if (!event.url.pathname.startsWith(`/${lang}`)) {
        throw redirect(307, `/${lang}`);
        //return new Response(null, { status: 307, headers: { Location: `/${lang}` } });
    }

    // Store the language in cookies for future visits
    event.cookies.set('lang', lang, { path: '/', maxAge: 31536000 });

    return resolve(event);
}
