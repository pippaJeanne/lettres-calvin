export const load = async ({ fetch }) => {
	const response = await fetch(`/api/data`);
	const letters = await response.json();
	return {
		letters
	};
};