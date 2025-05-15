export async function load({ params }) {
	if (params.lang === "fr" ){
		const post = await import(`../../../lib/data/md/${params.slug}.md`);
	const { title } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		//tags,
		//script,
		//description
	};
	} else if (params.lang === "es"){
		const post = await import(`../../../lib/data/mdes/${params.slug}.md`);
	const { title } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		//tags,
		//script,
		//description
	};
	}
}
