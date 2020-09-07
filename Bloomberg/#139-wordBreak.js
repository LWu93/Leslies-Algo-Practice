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

/* psuedocode
wordDict are all unique words and you can reuse them to build the s you're given.

we want to search through the word and see if we can find any substrings that exist in the dictionary.

Approach 1 - BFS. We want to loop through s and everytime we find a word that matches in our string, we want to BFS from the end of that word, and go through each possible connection until we hit the end of the string. we will need to store the words inside of an obj or map so we can BFS accordingly

BFS will take in the idxPoint from the beginning of s and loop through it until we find a word that hits a word in our word dict. Then, we BFS through from the endpoint and continue looping to see if any future words exist in our object. if they don't and we dont hit the basecase of hitting the end of our string, we know the word combination doesn't exist. If it does hit the end, we've found words that CAN build the str

Approach 2 - Dynamic Programming where we check every single substring in s to see if we hit combos. We store those potential results in a arr.
*/

//First approach using backtracking - BFS approach(?)
var wordBreak = function (s, wordDict) {
	//potential edgecase - returning false right now but confirm with interviewer. Can't check here since they dont account for it.
	if (!s.length) return false;
	if (!wordDict.length) return false;

	//build our adjList of words for instant access
	let words = {};
	for (let word of wordDict) {
		words[word] = true;
	}

	let found = false,
		visited = new Set();

	function bfs(startIdx) {
		//basecase - if we hit the end of the string, we've created the entire str. accounting for idx
		if (startIdx === s.length) {
			found = true;
			return;
		}

		//pruning? if we get back to this iteration and we've found it in our previous bfs calls, we dont need to continue
		if (found) return;

		//pruning #2? if we've seen that idx already, we dont need to go through the entire thing
		if (visited.has(startIdx)) return;

		//loop through from the beginning until str.length and see if we can find any words in the adjList
		let currStr = [];
		for (let i = startIdx; i < s.length; i++) {
			currStr.push(s[i]);
			let newStr = currStr.join('');

			if (words[newStr]) {
				//This needs to be faster somehow..memoize??
				bfs(startIdx + currStr.length); //we're excluding the word we've found to search through other words. no need to -1

				//after BFSing through the entire subStrings, we need to memoize the idx we've already checked for so we dont need to redo it.
				visited.add(startIdx);
			}
		}
	}

	//if we found it by searching through the entire str, we set found to true and we can return true. Else we return false
	bfs(0);
	return found;
};
/* Complexity. N - s.length. W - # of words in wordDict aka wordDict.length

Time - O(n^n). will be generating n^n # of recursive calls in the worstcase
Space - O(W+N). storing each word as key/val in obj. Visited will store N indices. Recursive BFS calls - ??
*/

//Second approach using a queue for BFS
var wordBreak = function (s, wordDict) {
	if (!s.length) return false;
	if (!wordDict.length) return false;

	let words = new Set(wordDict),
		visited = new Set();
	let q = [0];

	while (q.length) {
		let startIdx = q.shift();

		if (!visited.has(startIdx)) {
			for (let end = startIdx + 1; end <= s.length; end++) {
				let newWord = s.slice(startIdx, end);
				if (words.has(newWord)) {
					//basecase - we hit the end of the word
					if (end === s.length) return true;
					q.push(end);
				}
			}
			//set the startIdx we've iterated through as visited so we dont do the forloop we did above again
			visited.add(startIdx);
		}
	}

	return false;
};

/* complexity. N - s.length

Time - O(N^2). while loop is constant in this case as we loop through each substring created from the first idx to the end - as the queue grows tho, it loops less through s.length. We are slicing in second forloop which created n^2 time.
Space - O(N). queue in worstcase has N elements in it at once.

*/

//Third approach using DFS
var wordBreak = function (s, wordDict) {
	let wordSet = new Set(wordDict);
	let memo = {};

	function dfs(index) {
		if (index === s.length) return true;
		if (memo[index]) return memo[index];

		for (let end = index + 1; end <= s.length; end++) {
			if (wordSet.has(s.slice(index, end)) && dfs(end)) {
				memo[index] = true;
				return memo[index];
			}
		}

		memo[index] = false;
		return memo[index];
	}

	return dfs(0);
};

//4th approach - DP
var wordBreak = function (s, wordDict) {
	//make a dp array
	let dp = new Array(s.length + 1).fill(false);

	//set first index to true - Fax only
	dp[0] = true;

	//loop through the string, i is the anchor, j checks the slice from i --> j
	//once the sliced word is included in the word dictionary,
	for (let i = 0; i < s.length; i++) {
		for (let j = 1; j <= s.length; j++) {
      //if we hit a point in the array where we've accounted for the first half of the str AND the wordDict has the second half of the word.
			if (dp[i] === true && wordDict.includes(s.slice(i, j))) {
				dp[j] = true;
			}
		}
	}

	return dp[dp.length - 1];
};
/* complexity. N - s.length

Time - O(N^3). 2 nested loops through s.length and slicing in second forloop.
Space - O(N). DP array is N+1.

*/
