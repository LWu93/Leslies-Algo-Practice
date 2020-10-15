/*
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

/* psuedocode
count the amount of letters in each str to find the additional letter
*/

var findTheDifference = function (s, t) {
	let mapS = new Map();
	let mapT = new Map();

	for (let i = 0; i < s.length; i++) {
		if (mapS.has(s[i])) mapS.set(s[i], mapS.get(s[i]) + 1);
		if (!mapS.has(s[i])) mapS.set(s[i], 1);
	}

	for (let i = 0; i < t.length; i++) {
		if (mapT.has(t[i])) mapT.set(t[i], mapT.get(t[i]) + 1);
		if (!mapT.has(t[i])) mapT.set(t[i], 1);

		if (!mapS.has(t[i]) || mapS.get(t[i]) < mapT.get(t[i])) return t[i];
	}
};
/*complexity. N - t.length

Time - O(2N) ==> O(N). 1 loop through s and 1 loop through t
Space - O(26*2) ==> O(1). 2 Maps to store chars

*/