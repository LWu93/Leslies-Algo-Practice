/*

Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:
Input:  [1,2,1,3,2,5]
Output: [3,5]

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Psuedocode
//loop through the nums arr. initialize a hash to store key/val --> num/frequency. init res arr
//loop through hash, if the frequency === 1, push key into res arr
//return res arr
var singleNumber = function(nums) {
  let res = [];
  if (!nums.length) return res;
  let hash = {};

  for (const num of nums) {
    if (!hash[num]) hash[num] = 0
    hash[num]++
  }

  for (const key in hash) {
    if (hash[key] === 1) res.push(key)
  }

  return res;
};
//Time - O(n).
//Space - O(n).
