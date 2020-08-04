/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//Psuedocode using a sliding window
//use a set to store the ele
//one loop through to see if map has the ele. Check if the size of the set is greater than k
//if it is, delete the first ele from the arr
//if you hit the end, there are no matches, return false

var containsNearbyDuplicate = function(arr, k) {
  let obj = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (obj.has(arr[i])) return true;

    obj.add(arr[i]);

    if (obj.size > k) {
      obj.delete(arr[i-k])
    }

  }

  return false;
};
//Time - O(n). n - arr.length
//Space - O(k). k === k
