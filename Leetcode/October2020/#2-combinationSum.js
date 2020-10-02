/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:
Input: candidates = [2], target = 1
Output: []

Example 4:
Input: candidates = [1], target = 1
Output: [[1]]

Example 5:
Input: candidates = [1], target = 2
Output: [[1,1]]

Constraints:
1 <= candidates.length <= 30
1 <= candidates[i] <= 200
All elements of candidates are distinct.
1 <= target <= 500

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/* psuedocode - backtracking

res = []

def backtracking(arr,start, remainder)
    basecase 1 - if our remainder is 0, we've hit a point where all our nums === 0.
        potential edgecase - if arr has 0s?
    basecase 2 - if our remainder is less than 0

    for (i = start, start --> end)
        tempArr.push(currNum)
        backtrack([...tempArr], start, remainder - currNum)
        tempArr.pop()

call backtracking function on res
return res
*/
var combinationSum = function (candidates, target) {
	let res = [];

	function backtrack(arr, start, remainder) {
		//basecase 1
		if (remainder === 0) {
			res.push(arr);
		}
		//basecase 2
		if (remainder < 0) {
			return;
		}

		for (let i = start; i < candidates.length; i++) {
			let currNum = candidates[i];
			arr.push(currNum);
			backtrack([...arr], i, remainder - currNum);
			arr.pop();
		}
	}

	backtrack([], 0, target);
	return res;
};
/* complexity. N - candidates.length

Time - O(2^N).
Space - O(2^N). Recursive calls in callstack
*/
