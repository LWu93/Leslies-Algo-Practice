/*
Find All Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//psuedocode
//store each val in a set
//IF set already has the val, push val into res arr
//return res
//Follow up - bitwise operators for constant space
var findDuplicates = function(nums) {
  let set = new Set(), res = [];

  for (const num of nums) {
    if (!set.has(num)) set.add(num)
    else res.push(num)
  }

  return res;
};
//Time - O(n).
//Space - O(n * log n) ==> O(n).
