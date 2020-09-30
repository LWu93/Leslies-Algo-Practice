/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
Input: [1,2,0]
Output: 3

Example 2:
Input: [3,4,-1,1]
Output: 2

Example 3:
Input: [7,8,9,11,12]
Output: 1

Follow up:
Your algorithm should run in O(n) time and uses constant extra space.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/* psuedocode

swap the smallest nonpositive integer to the front.
  some additional logic and conditionals

loop through the nums array again to find the next positive int.
  so if i = 0 and nums[i] !== 1, return i+1

edgecase - if all the nums in the array are in order, we want to return nums.length+1 at the end
*/

var firstMissingPositive = function (nums) {
	if (!nums.length) return 1;

	let i = 0;
	while (i < nums.length) {
		let currNum = nums[i] - 1;

		if (
			currNum < nums.length &&
			currNum >= 0 &&
			i !== currNum &&
			nums[currNum] !== nums[i]
		) {
			[nums[i], nums[currNum]] = [nums[currNum], nums[i]];
		} else {
			i++;
		}
	}

	for (let i = 0; i < nums.length; i++) {
		if (i + 1 !== nums[i]) return i + 1;
	}

	return nums.length + 1;
};

/* complexity. N - nums.length

Time - O(N). 2 loops simplify to just N time. First loop to swap the positives to the front. The second is to find the next positive integer.
Space - O(1). No additional space.
*/
