
export const load = async ({ fetch }) => {
	const response = await fetch(`/api`);
	const lettres = await response.json();

	return {
		lettres, 
	};
};