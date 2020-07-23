/*
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]
Output: 4

Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//Psuedocode
//since the array will always be even, the min value of the max pairs will always be the first num in pairs if the nums array is sorted.
//Sort the array, count only the first ele in the pair of nums provided.
var arrayPairSum = function(nums) {
  nums.sort((a,b) => a - b)

  let maxSum = 0;

  for (let i = 0; i < nums.length; i+=2) {
    maxSum += nums[i]
  }

  return maxSum;
};
//Time Complexity - O(n log n). n log n for JS built-in sort method. n - nums.length.
//Space Complexity - O(1). No additional space except for var maxSum.
