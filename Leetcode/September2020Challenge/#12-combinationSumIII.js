/*
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]

*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

/* psuedocode - backtracking

we want to create different combinations of numbers that satisfy k and also sum up to n

backtrack(remainingTotal, arr, nextNum)
    basecase 1 - if the remainingTotal is === 0 AND arr.length === k
        push in the arr we're at
    basecase 2 - remainingTotal < 0 (meaning we went over) OR arr.length >= k
        return

    Loop to create the new combinations of numbers
    for (nextNum --> 9) - we need to build the next num and add to our arr
        arr.push(nextNum+1)
        backtrack(remainingTotal - i, arr, i+1)
        arr.pop()

*/

var combinationSum3 = function (k, n) {
	let res = [];

	function backtrack(remainingTotal, numsArr, nextNum) {
		//basecase 1
		if (remainingTotal === 0 && numsArr.length >= k) {
			res.push([...numsArr]);
			return;
		}

		//basecase 2 - prune
		if (remainingTotal < 0 || numsArr.length === k) {
			return;
		}

		for (let i = nextNum; i <= 9; i++) {
			numsArr.push(i);
			backtrack(remainingTotal - i, numsArr, i + 1);
			numsArr.pop();
		}
	}

	backtrack(n, [], 1);
	return res;
};

/* complexity.

*/
