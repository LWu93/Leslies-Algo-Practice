/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */

/* psuedocode - sliding window
start from center of 2 pair of letters in s to find if there are any palindromes outwards. We know that the length has to be even but palindromes can start from odd or even string lengths.
*/
var longestPalindrome = function (s) {
	if (!s.length) return '';

	function expandAroundCenter(i, j) {
		let start = i,
			end = j;

		//expand outwards to find max palindromes
		while (start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
			start--;
			end++;
		}
		return s.slice(start + 1, end);
	}

	let longestPalinSubStr = '';
	let start = 0,
		end = 0;
	for (let i = 0; i < s.length; i++) {
		let subStr1 = expandAroundCenter(i, i); //even length palindromes
		let subStr2 = expandAroundCenter(i, i + 1); //odd length palindromes
		let longerStr = subStr1.length > subStr2.length ? subStr1 : subStr2;

		//if longerStr.length is greater than our currPalin, we need to reset
		if (longerStr.length > longestPalinSubStr.length) {
			longestPalinSubStr = longerStr;
		}
	}

	return longestPalinSubStr;
};
/* complexity. N - s.length

Time - O(N^2). One loop and 2 while loops + .slice() methods inside.
Space - O(N). Storing longest palindrome.

*/
