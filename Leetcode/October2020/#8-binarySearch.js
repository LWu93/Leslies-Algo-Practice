/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Note:
You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* psuedocode - binary search

Since the array is sorted in ascending order, we can use BS to search through the first or second half of our array to find the target. If the midIdx value is greater than the target, we can search the first half. Else, we search the second half.
*/

var search = function (nums, target) {
	if (!nums.length) return -1;

	let start = 0,
		end = nums.length - 1,
		mid;

	while (start <= end) {
		mid = start + Math.floor((end - start) / 2);

		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}

	return -1;
};
/* complexity. N - nums.length

Time - O(log N). Binary search cuts the loop or the array.length we need to look for in half at every iteration.
Space - O(1). 3 ptrs.

*/
