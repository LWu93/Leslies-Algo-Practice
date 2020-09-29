/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/* psuedocode - backtracking

loop through the s and look for any words that contain words in the wordDict.
If it does, we can backtrack from there and loop through the rest of s to see if any additional words can complete the rest of s. If we hit the end and we don't reach the end of s, we restart from the beginning or the last place prior to recursively calling the backtracking func.
IF we hit the basecase - where our idxTracker reaches s.length, we return true.
ELSE we return false
*/

var wordBreak = function (s, wordDict) {
	if (!s.length) return false;

	//create instant access wordDict
	let words = new Set(wordDict);
	let visited = new Set();

	function backtrack(startIdx, currWord) {
		//basecase
		if (startIdx === s.length) return true;

		//pruning - if we've already started at this idx before, no need to do it all again
		if (visited.has(startIdx)) return;

		for (let i = startIdx; i < s.length; i++) {
			let newWord = s.slice(startIdx, i + 1);
			if (words.has(newWord)) {
				if (backtrack(i + 1, newWord)) {
					return true;
				}
			}
		}
		visited.add(startIdx); //adds this startIdx as false since we've tested all its combinations
		return false;
	}

	return backtrack(0, s);
};
