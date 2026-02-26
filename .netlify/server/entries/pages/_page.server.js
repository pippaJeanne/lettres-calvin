import { r as redirect } from "../../chunks/index.js";
const knownLanguages = ["fr", "es"];
const load = ({ cookies }) => {
  let lang = cookies.get("lang");
  if (!knownLanguages.includes(lang) || lang === void 0) {
    lang = "fr";
  }
  throw redirect(307, `/${lang}`);
};
export {
  load
};
