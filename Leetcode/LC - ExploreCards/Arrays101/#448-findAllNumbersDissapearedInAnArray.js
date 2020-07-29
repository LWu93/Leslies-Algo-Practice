/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Psuedocode
//store all the nums in a set. We know there will be dups and some missing, the set covers both cases
//loop through 1-n. if set doesn't have that num, push it into res arr
//return res arr
var findDisappearedNumbers = function(nums) {
  let res = [];
  let set = new Set(nums) //takes care of dups
  // console.log(set)

  //if set doesn't have i, we know it "dissapeared"
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) res.push(i)
  }

  return res;
};
//n - nums.length
//Time - O(n).
//Space  - O(n). # of elements in set
