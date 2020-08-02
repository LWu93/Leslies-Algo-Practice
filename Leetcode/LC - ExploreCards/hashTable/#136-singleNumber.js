/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//Psuedocode using set
//Insert nums into a set. If a set already has that num, we can delete it from our set
//After iterating through nums, our set should only have 1 num left
//return that singlenum

var singleNumber = function(nums) {
  let set = new Set(), single;

  for (num of nums) {
    if (set.has(num)) set.delete(num);
    else set.add(num)
  }

  set.forEach(ele => single = ele) //only 1 ele so constant time

  return single;
};
//n - nums.length
//Time - O(n).
//Space - O(log n). will never have more than half of n's nums via dups.
