/*
Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:
Input: [3, 10, 5, 25, 2, 8]
Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//brute force - nested for loop and compare the 2 nums using the XOR operator
var findMaximumXOR = function (nums) {
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			max = Math.max(max, nums[i] ^ nums[j]);
		}
	}

	return max;
};
//Time - O(n^2). Space - O(1)
