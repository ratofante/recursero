/**
 * Capitalizes the first letter of each word in a given string.
 *
 * @param str - The input string to be transformed.
 * @returns The transformed string with each word capitalized.
 */
function capitalizeEachWord(str: string): string {
	const words = str.split(' ');
	const capitalizedWords = words.map((word) => {
		const firstLetter = word.charAt(0).toUpperCase();
		const restOfWord = word.slice(1);
		return firstLetter + restOfWord;
	});
	return capitalizedWords.join(' ');
}

/**
 * Converts a given string into a URL-friendly slug.
 *
 * @param str - The input string to be transformed.
 * @returns The slugified string.
 */
function slugify(str: string): string {
	return str
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

export { capitalizeEachWord, slugify };
