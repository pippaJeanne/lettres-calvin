const prerender = "auto";
const ssr = true;
const load = async ({ fetch }) => {
  const response = await fetch(`/api`);
  const lettres = await response.json();
  return {
    lettres
  };
};
export {
  load,
  prerender,
  ssr
};
