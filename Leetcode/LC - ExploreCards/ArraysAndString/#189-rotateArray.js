/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]

Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Psuedocode
//we can find each unique idx point of start/end by doing k % from nums.length also covering overflow
//reverse the entire array
//we only need to reverse from start to k - 1 so that the vals are in order
//do the same from k to nums.length - 1 so that the vals moved are in order
//create a HF reverse(nums,start,end) to help you do each reverse method in-place
var rotate = function(nums, k) {
  k = k % nums.length;

  //-1 to account for idxpoints
  reverse(nums, 0, nums.length-1)
  reverse(nums, 0, k-1)
  reverse(nums,k,nums.length-1)

  //standard swap function
  function reverse(arr,start,end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
};
//Time - O(n). n - nums.length
//Space - O(1). Reversing in-place

//Another approach using a similar concept as reverse but stores modified eles in a new arr. Space - O(n)
// var rotate = function(nums, k) {
//     let res = new Array(0);//arbitrary array that we will replace with new values
//      // nums = [1,2,3,4,5,6,7], k = 3
//     for (let i = 0; i < nums.length; i++) {
//         //this will set the new idx in res to be where we move our 0th idx to and account for overflow
//         res[(i + k) % nums.length] = nums[i]
//     }

//     //we need to modify in-place so we need to have nums replicate res
//     for (let j = 0; j < res.length; j++) {
//         nums[j] = res[j]
//     }
// };
