/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3

Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Note:
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//Psuedocode
//sliding window approach - have 2 pointers, start and end which will shrink/grow the window
//while loop - if end is a 1, grow window and Math.max the count length from start -> end
//if end hits a 0, continue looping until you get to a point where its a 1 again, reset window
//return maxOnes
var findMaxConsecutiveOnes = function(nums) {
  let maxOnes = 0, start = 0, end = 0;

  while (end < nums.length) {
    if (nums[end] === 1) {
      end++
      maxOnes = Math.max(maxOnes, end-start)
    } else {
      end++
      start = end
    }
  }

  return maxOnes
};
//Time - O(n). n - nums.length
//Space - O(1).
