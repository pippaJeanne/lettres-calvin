export const load = async ({ fetch }) => {
	const response = await fetch(`/api`);
	const letters = await response.json();

	return {
		letters, 
	};
};