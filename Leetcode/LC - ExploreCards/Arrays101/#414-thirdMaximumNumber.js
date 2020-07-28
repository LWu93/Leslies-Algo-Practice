/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]
Output: 1
Explanation: The third maximum is 1.

Example 2:
Input: [1, 2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: [2, 2, 3, 1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//since we only need to check for the 3rd distinct max, we can have 3 vars = 0 to check for vals
//loop through nums, check if they're > than all 3 checks.
//at the end of the loop, check to see if 3rd max !== 0. if it is, return third, else return first

//Psuedocode
//sort nums b-a. check if nums.length < 3. If it is, just return the first idx
//loop through nums and find the 3rd unique num. return that num. have a count to get to 3
//edgecase - if there is no 3rd max or unique, return the first num
var thirdMax = function(nums) {
  let count = 1;
  nums.sort((a,b) => b-a);

  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] !== nums[i+1]) count++;
    if (count == 3) return nums[i+1]
  }

  return nums[0] //case where we never hit a 3rd max, return first max
};
//Time - O(n log n). .sort method
//Space - O(1).
