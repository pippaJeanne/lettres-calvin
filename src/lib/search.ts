// Croat, Matt. s. d. « How To Make A Blazing Fast SvelteKit Search ». Joy of Code. Consulté le 11 octobre 2024. https://joyofcode.xyz/.
// Adapté

import FlexSearch from 'flexsearch'
export type Data = {
	text: string
	slug: string
	title: string
}

export type Result = {
	text: string[]
	slug: string
	title: string
}
let postsIndex: FlexSearch.Index
let letters : Data[];

export function createPostsIndex(data: Data[]) {
  // create the posts index
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' })

	data.forEach((letter, i) => {
    // index the title and content together
		const item = `${letter.title} ${letter.text}`
    // add the item to the index
		postsIndex.add(i, item)
	})

	letters = data
    console.log(postsIndex)
}

export function searchPostsIndex(searchTerm: string) {
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	const results = postsIndex.search(match)

	return results
		.map((index) => letters[index as number])
		.map(({ slug, title, text }) => {
			return {
				slug,
				title: replaceTextWithMarker(title, match),
				text: getMatches(text, match),
			}
		})
}
function replaceTextWithMarker(text: string, match: string) {
	const regex = new RegExp(match, 'gi')
	return text.replaceAll(regex, (match) => `<mark>${match}</mark>`)
}

function getMatches(text: string, searchTerm: string, limit = 1) {
	const regex = new RegExp(searchTerm, 'gi')
	const indexes = []
	let matches = 0
	let match

	while ((match = regex.exec(text)) !== null && matches < limit) {
		indexes.push(match.index)
		matches++
	}

	return indexes.map((index) => {
		const start = index - 20
		const end = index + 80
		const excerpt = text.substring(start, end).trim()
		return `...${replaceTextWithMarker(excerpt, searchTerm)}...`
	})
}
