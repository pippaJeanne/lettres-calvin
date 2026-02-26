import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
/* empty css                      */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  return `${$$result.head += `<!-- HEAD_svelte-nnnzk3_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" data-svelte-h="svelte-1s0v7l9"><\/script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" data-svelte-h="svelte-tblfyy"><\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- HEAD_svelte-nnnzk3_END -->`, ""} <div id="anchor"><article> <h1>${escape(title)}</h1>  ${validate_component(content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article> </div>`;
});
export {
  Page as default
};
