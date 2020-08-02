/*
Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Psuedocode
//To find the intersection of each arr, we can convert the nums into ind sets and iterate thru them
//look through the sortest set and push in nums that are in both sets.
//have a res arr to store the data
var intersection = function(nums1, nums2) {
  let set1 = new Set(), set2 = new Set(), res = [];

  for (let num of nums1) {
    set1.add(num)
  }
  for (let num of nums2) {
    set2.add(num)
  }

  //helper func to make it dynamic to check smaller set
  let checkIntersection = function(set1, set2) {
    set1.forEach(num => {
      if (set2.has(num)) res.push(num)
    })
  }

  if (set1.size < set2.size) {
    checkIntersection(set1, set2)
  } else {
    checkIntersection(set2, set1)
  }

  return res;
};

//n - nums1.length, m - nums2.length
//Time - O(n+m).
//Space - O(n+m).
