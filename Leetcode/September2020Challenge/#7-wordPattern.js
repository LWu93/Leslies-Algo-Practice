/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:
Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:
Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", str = "dog dog dog dog"
Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

/* psuedocode
pattern only contains letters - we can separate by .split()
str contains lowercase letters separated by single spaace - split.(" ")

we want to first check if they're the same length(?). if not, it doesn't follow the same pattern.
Similarly, with the pattern, it must also match each individual letter to its word. we can store results in a map and call them if it exists(check if they match) or to store it. You have to store both the key and val so that the pattern is not lost in translation, see Ex 4: a --> dog and dog --> a. if we didn't do this, a --> dog and b --> dog and dog --> will return true
*/

var wordPattern = function (pattern, str) {
	let patt = pattern.split(''),
		words = str.split(' ');
	let cache = new Map();

	if (patt.length !== words.length) return false;

	for (let i = 0; i < patt.length; i++) {
		//Padded both sides so that we can know if one side is a match and a word if they're the same
		//Ex: "abc" --> "b c a"
		let match = patt[i] + '!',
			word = words[i] + '#';

		//check if word exists in cache and vice versa
		if (!cache.has(word)) {
			cache.set(word, match);
		}
		if (!cache.has(match)) {
			cache.set(match, word);
		}

		if (word !== cache.get(match) || match !== cache.get(word)) return false;
	}

	return true;
};
/* Complexity, N - Length of str. W - # of unique words in str

Time - O(N). We split str and that goes O(N). Our main for loop is O(W) but N > W.
Space - O(W). Worstcase, we are storing 2x # of words/patterns in our Map if they are both unique.
*/
