/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2

Explanation: the subarray [4,3] has the minimal length under the problem constraint.

Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

//Psuedocode
//sliding window approach - left, right. keep a window where the sum is greater than s
//if the sum is < s, you want to increment your right++
//if sum >= s, you want to calculate length between right-left and Math.min to var minLength
//continue looping until you hit the end of nums

var minSubArrayLen = function(s, nums) {
  let left = 0, right = 0, sum = 0, minLength = Infinity;

  while (left < nums.length) {
    if (sum < s) {
      //edge case where there is still some left but no more right to calculate
      if (!nums[right]) break;
      sum += nums[right];
      right++
    } else {
      minLength = Math.min(minLength, right-left);
      sum -= nums[left]
      left++
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
//Time - O(n). n - nums.length
//Space - O(1). no additional space

// Another approach using for/while loop - still O(n) as the while loop will be a constant time as it doesn't fluctuate depending on nums.length,, but still noticeably slower
// var minSubArrayLen = function(s, nums) {
//   let left = 0, sum = 0, minLength = Infinity;

//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];

//     while (sum >= s) {
//       minLength = Math.min(minLength, right + 1 - left) //accounting for idx
//       sum -= nums[left];
//       left++
//     }
//   }

//   return minLength === Infinity ? 0 : minLength;
// };
